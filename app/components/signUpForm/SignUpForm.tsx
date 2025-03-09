'use client'
import { signup } from '@/app/actions/auth'
import { useActionState } from 'react'
 
export default function SignupForm() {
  const [state, action, pending] = useActionState(signup, undefined)
 
  return (
    <div className='className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
        <form action={action} className='space-y-6' >
    
          <div>
            <label htmlFor="email" className='block text-sm/6 font-medium text-gray-900'>Email</label>
            <input id="email" name="email" placeholder="Email" className='mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6' />
          </div>
          {state?.errors?.email && <p>{state.errors.email}</p>}
    
          <div>
            <label htmlFor="password" className='block text-sm/6 font-medium text-gray-900'>Password</label>
            <input id="password" name="password" type="password" className='mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6' />
          </div>
          {state !== undefined && <p>Onjuist wachtwoord</p>}
          {state?.errors && (
            <div>
              <p>Password must:</p>
              <ul>
                {state.errors?.password?.map((error) => (
                  <li key={error}>- {error}</li>
                ))}
              </ul>
            </div>
          )}
          <button disabled={pending} type="submit" className="flex w-full justify-center rounded-md bg-yellow-500 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500">
            Log in
          </button>
        </form>
      </div>
    </div>
  )
}