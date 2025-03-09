"use server";
import { SignupFormSchema, FormState } from '@/app/lib/definitions'
import { createSession, destroySession } from '@/app/lib/session'
import properties from '../properties';
import { redirect } from 'next/navigation';

export async function signup(state: FormState, formData: FormData) {
  var bcrypt = require('bcryptjs');
  // Validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  })
 
  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  // 2. Prepare data for insertion into database
  const {email, password } = validatedFields.data
  // e.g. Hash the user's password before storing it
  const user = {
    email: email,
    password: password
  }
  const product = {
    articleCode: "articleCode",
  };
  const data = await fetch(properties.devUsersUrl,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
  console.log(data.status);
  const response = await data.json();
  console.log("response " + response);
  if (data.status === 200) {
    console.log(response[0].email);
    await createSession(response[0].email);
    redirect('/')
  }
  


}

export async function logout(){
  await destroySession();
  redirect('/login')
}