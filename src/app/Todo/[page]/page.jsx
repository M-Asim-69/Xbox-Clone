"use server";

import Delete from "@/components/UI/Delete";
import Link from "next/link";
import { cookies } from "next/headers";
import Image from "next/image";
import Pagination from "@/components/UI/Pagination";

async function fetchTodos(page = 1, limit = 4) {
  const cookieStore = await cookies();
  const token = cookieStore?.get("access_token")?.value;

  try {
    const response = await fetch(
      `${process.env.URL}/todo/listing?page=${page}&limit=${limit}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      console.error(`Failed to fetch todos. Status: ${response.status}`);
      return { todos: [], total: 0 };
    }

    const data = await response.json();
    const todos = data?.data?.data || [];
    const total = data?.data?.pagination?.totalRecords || 0;

    return { todos, total };
  } catch (error) {
    console.error("Failed to fetch todos:", error.message);
    return { todos: [], total: 0 };
  }
}

export default async function Page({ params }) {
  const page = parseInt(params?.page || "1", 10);
  const limit = 4;

  const { todos, total } = await fetchTodos(page, limit);
  const totalPages = Math.ceil(total / limit);

  return (
    <div className="relative bg-gradient-to-b from-gray-500 to-black text-white min-h-screen p-8">
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <div className="relative z-10">
        <h1 className="text-4xl mt-24 font-bold text-green-500 mb-6 text-center">
          Your Todos
        </h1>
        <Link className="w-12 m-4 flex" href="/Add">
          <Image src="/add.png" width={50} height={24} alt="Add" priority />
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-semibold text-green-400 mb-3">
                {todo.title}
              </h2>
              <p className="text-gray-300 mb-4">{todo.description}</p>
              <div className="mt-4 flex justify-between">
                <Delete id={todo.id} />
                <div className="ml-4">
                  <Link
                    href={`/Update/${todo.id}?title=${encodeURIComponent(
                      todo.title
                    )}&description=${encodeURIComponent(todo.description)}`}
                  >
                    <button className="bg-yellow-600 py-2 shadow-lg rounded-lg px-4">
                      Update
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        {totalPages > 1 && <Pagination page={page} totalPages={totalPages} />}
      </div>
    </div>
  );
}
