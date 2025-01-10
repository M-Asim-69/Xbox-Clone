'use server';

import { cookies } from 'next/headers'; 
import { redirect } from 'next/navigation';


export async function AddTodo(formData) {
    const Title = formData.get("title");
    const Des = formData.get("description");

    let response;
    const cookieStore = await cookies();
    const token =  cookieStore?.get('access_token').value;


    if (!token) {
        console.error("No token found. User is not authenticated.");
        redirect("/Login"); 
    }

    try {
         response = await fetch(`http://localhost:4000/todo/testing`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`, 
            },
            body: JSON.stringify({
                title: Title,
                description: Des,
            }),
        });
    } catch (error) {
        console.error("An error occurred while adding the todo:", error);
    }
    if (response) {
        redirect('/Todo/1')
    }

}
