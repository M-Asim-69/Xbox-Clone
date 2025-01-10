'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function LogOut() {
  cookies().set('access_token', '', { expires: new Date(0) });

  redirect('/');
}
