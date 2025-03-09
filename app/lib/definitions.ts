import { z } from 'zod'
 
export const SignupFormSchema = z.object({
  email: z.string().email({ message: 'Voer een geldig e-mailadres in.' }).trim(),
  password: z
    .string()
})
 
export type FormState =
  | {
      errors?: {
        email?: string[]
        password?: string[]
      }
      message?: string
    }
  | undefined

