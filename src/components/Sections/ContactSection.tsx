import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { ArrowRight, GithubIcon, LinkedinIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { SendEmailData, sendEmailSchema } from '@/validations/email-validation'

import { Button } from '../Button'
import ErrorMessage from '../ErrorMessage'
import { Input } from '../Input'
import { Typography } from '../Typography'

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SendEmailData>({
    resolver: zodResolver(sendEmailSchema),
  })

  async function handleSendEmail({
    recruiterName,
    recruiterEmail,
    message,
  }: SendEmailData) {
    toast.promise(
      async () => {
        const response = await axios.post('/api/send', {
          recruiterName,
          recruiterEmail,
          message,
        })
        return response.data
      },
      {
        loading: 'Enviando email...',
        success: `E-mail enviado com sucesso!`,
        error: 'Falha ao enviar o email',
      },
    )
  }

  return (
    <section
      id="contato"
      className="gap-36 bg-surface-primary p-20 max-lg:px-6 max-lg:py-12 sm:mx-10 sm:rounded-2xl md:flex"
    >
      <div className="flex flex-col gap-16 max-md:mb-12 md:w-1/2">
        <Image
          src="https://github.com/gabrielcinquini.png/"
          alt=""
          width={200}
          height={200}
          className="rounded-full"
        />
        <div className="flex flex-col gap-4">
          <header>
            <Typography.Title>Contato</Typography.Title>
            <Typography.Subtitle className="mt-2">
              Gostou do meu trabalho? Me envie uma mensagem
            </Typography.Subtitle>
          </header>
          <main>
            <Typography.Paragraph textColor="secondary">
              Estou sempre disponível para uma conversa, me envie uma mensagem
              utilizando os campos na direita ou fale comigo nas redes sociais.
            </Typography.Paragraph>
          </main>
          <footer className="flex gap-2">
            <Button asChild variant="icon">
              <a href="https://github.com/gabrielcinquini/">
                <GithubIcon />
              </a>
            </Button>
            <Button asChild variant="icon">
              <a href="https://www.linkedin.com/in/gabriel-cinquini/">
                <LinkedinIcon />
              </a>
            </Button>
          </footer>
        </div>
      </div>
      <form
        onSubmit={handleSubmit(handleSendEmail)}
        className="flex flex-col gap-4 md:w-1/2"
      >
        <div>
          <Input placeholder="Nome" {...register('recruiterName')} />
          {errors.recruiterName?.message && (
            <ErrorMessage text={errors.recruiterName.message} />
          )}
        </div>
        <div>
          <Input
            placeholder="E-mail"
            type="email"
            {...register('recruiterEmail')}
          />
          {errors.recruiterEmail?.message && (
            <ErrorMessage text={errors.recruiterEmail.message} />
          )}
        </div>
        <div>
          <textarea
            placeholder="Sua mensagem"
            className="h-40 w-full rounded-lg bg-surface-background px-4 py-3 text-primary"
            {...register('message')}
          />
          {errors.message?.message && (
            <ErrorMessage text={errors.message.message} />
          )}
        </div>
        <Button type="submit" disabled={isSubmitting} className="mt-4 w-fit">
          Me envie uma mensagem <ArrowRight />
        </Button>
      </form>
    </section>
  )
}
