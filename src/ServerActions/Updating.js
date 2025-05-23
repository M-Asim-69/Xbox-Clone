"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function Updated(formData) {
  const id = formData?.get("id");
  const title = formData?.get("title");
  const description = formData?.get("description");
  let response;
  const cookieStore = cookies();
  const token = cookieStore?.get("access_token")?.value;

  if (!id || !title || !description || !token) {
    console.error("Missing required fields or token");
    return;
  }
  try {
   response = await fetch(`${process.env.URL}/todo/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title,
        description,
      }),
    });
    if (!response.ok) {
      console.error("Failed to update todo. Status:", response.status);
    } else {
      console.log("Todo updated successfully!");
    }
    
  } catch (error) {
    console.error("Error updating todo:", error);
  }
  if (response) {
    redirect(`/Todo/1`)
  }
}
