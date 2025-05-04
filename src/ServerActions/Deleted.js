"use server";
import { cookies } from "next/headers";
import { revalidatePath } from 'next/cache'

export async function Deleted(formData) {
  try {
    const todoId = formData.get("id"); // We are using this to get value of input from the form in server side
    const cookieStore = await cookies();
    const token = cookieStore?.get("access_token").value;
    const response = await fetch(`https://todo-api-eight-umber.vercel.app/todo/${todoId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to delete todo: ${response.statusText}`);
    }

    // Revalidate the todos page

    revalidatePath("/Todo/1");
  } catch (error) {
    console.error("Delete error:", error);
    throw error;
  }
}
