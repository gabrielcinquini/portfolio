import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

import { sendEmailSchema } from '@/validations/email-validation'

import { EmailTemplate } from '../../../components/EmailTemplate'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const parsedBody = await sendEmailSchema.safeParse(body)
    if (!parsedBody.success) throw new Error(JSON.stringify(parsedBody.error))

    const { recruiterName, recruiterEmail, message } = parsedBody.data

    const { error } = await resend.emails.send({
      from: process.env.EMAIL_SENDER,
      to: process.env.PERSONAL_EMAIL,
      subject: 'Gostei do seu trabalho!',
      react: EmailTemplate({ recruiterName, recruiterEmail, message }),
      text: '',
    })

    if (error) throw new Error(JSON.stringify(error))

    return NextResponse.json({ message: 'E-mail enviado com sucesso!' })
  } catch (error) {
    return NextResponse.json({ error })
  }
}
