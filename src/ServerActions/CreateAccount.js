"use server";

import { cookies } from "next/headers";

import { redirect } from "next/navigation";
export async function createAccount(formData) {
    const userName = formData.get("username");
    const email = formData.get("email");
    const pass = formData.get("password");
    let response;
    try {
        response = await fetch(`${process.env.URL}/users/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: userName,
                password: pass,
                email: email,
            }),
        });


    } catch (error) {
        console.error("Error creating account:", error);
        throw error;
    }

    if (response) {
        const data = await response.json();
        const accessToken = data.data.access_token;

        const cookieStore = cookies();
        cookieStore.set('access_token', accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            path: '/',

        });


        redirect('/');
    }

}