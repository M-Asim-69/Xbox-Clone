'use server'

import { cookies } from 'next/headers'; // This is the function to interact with cookies
import { redirect } from "next/navigation";

export async function Login(formData) {
    const userName = formData.get('username');
    const pass = formData.get('password');
    let response;
    try {
         response = await fetch(`${process.env.URL}/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: userName,
                password: pass,
            }),
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to login');
        }
    } catch (error) {
        console.error('Login error:', error.message || error);
    }


    if (response) {
        const data = await response.json();
        const accessToken = data.data.access_token; 

        // Store the token in a cookie
        const cookieStore = cookies();
        cookieStore.set('access_token', accessToken, { 
            httpOnly: true, 
            secure: process.env.NODE_ENV === 'production', 
            path: '/', 
           
        });

        
        redirect('/');
    }
}
