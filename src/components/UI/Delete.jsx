"use server";

import Form from "next/form";
import { Deleted } from "@/ServerActions/Deleted";

function Delete({ id }) {

  return (
    <div>
      <Form action={Deleted}>
        <input type="hidden" name="id" value={id} />
        <button className="bg-red-600 py-2 shadow-lg rounded-lg px-4">
          Delete
        </button>
      </Form>
    </div>
  );
}

export default Delete;
