import { z } from 'zod'

export const sendEmailSchema = z.object({
  recruiterName: z.string().min(3, 'Mínimo de 3 caracteres'),
  recruiterEmail: z.string().email(),
  message: z.string().optional(),
})
export type SendEmailData = z.infer<typeof sendEmailSchema>
