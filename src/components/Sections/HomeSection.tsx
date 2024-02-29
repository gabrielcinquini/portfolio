'use client'

import { ArrowRight, Notebook } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

import arrowDownSection from '@/assets/ArrowDownSection.svg'
import codeTyping from '@/assets/CodeTyping.svg'

import { Button } from '../Button'
import { Typography } from '../Typography'

export default function HomeSection() {
  return (
    <section className="relative flex w-full items-center justify-between px-28 max-md:px-10">
      <div className="flex flex-col justify-center gap-8 lg:w-1/2">
        <Typography.Title variant="gradient" size="2xl">
          Olá, Sou Gabriel
        </Typography.Title>
        <div className="grid gap-4">
          <Typography.Subtitle>
            <TypeAnimation
              sequence={[
                'Desenvolvedor web',
                1000,
                'Estudante de Engenharia da Computação',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </Typography.Subtitle>
          <Typography.Paragraph textColor="secondary">
            Estudante no 9º período de Bacharelado em Engenharia da Computação,
            com interesse no desenvolvimento frontend. Procuro uma oportunidade
            de estágio remoto onde posso aplicar meu conhecimento em tecnologias
            como React, Next.js, JavaScript e TypeScript
          </Typography.Paragraph>
        </div>
        <div className="flex gap-4">
          <Button variant="secondary" asChild>
            <a href="#sobre">
              <Notebook />
              <Typography.Paragraph className="font-medium">
                Meu resumo
              </Typography.Paragraph>
            </a>
          </Button>
          <Button>
            <a href="#contato">
              <Typography.Paragraph className="font-medium">
                Entre em contato
              </Typography.Paragraph>
            </a>
            <ArrowRight />
          </Button>
        </div>
      </div>

      <div className="flex justify-end max-lg:hidden lg:w-1/2">
        <Image src={codeTyping} alt="Code Image" width={550} />
      </div>

      <Image
        src={arrowDownSection}
        alt=""
        className="absolute -bottom-1/4 right-1/3 max-lg:hidden"
      />
    </section>
  )
}
