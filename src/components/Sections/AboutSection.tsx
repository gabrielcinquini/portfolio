import Image from 'next/image'
import React from 'react'

import GuyTypingImage from '@/assets/GuyTyping.png'
import JavascriptIcon from '@/assets/JavaScript.svg'
import ReactIcon from '@/assets/React.svg'
import TailwindIcon from '@/assets/Tailwind.svg'
import TypescriptIcon from '@/assets/Typescript.svg'

import { Typography } from '../Typography'

export default function AboutSection() {
  return (
    <section
      id="sobre"
      className="mx-10 mt-40 flex justify-between rounded-2xl bg-surface-primary p-20 max-lg:mt-16 max-lg:flex-col max-lg:p-4"
    >
      <Image
        src={GuyTypingImage}
        alt=""
        className="object-cover max-lg:flex max-lg:w-full lg:w-1/2"
      />
      <div className="flex w-1/2 flex-col gap-8 max-lg:w-fit">
        <div className="flex gap-6 max-lg:mt-4 max-lg:items-center max-lg:justify-center">
          <Image src={ReactIcon} alt="" />
          <Image src={JavascriptIcon} alt="" />
          <Image src={TypescriptIcon} alt="" />
          <Image src={TailwindIcon} alt="" />
        </div>
        <div className="max-lg:mt-8">
          <header className="mb-4 flex flex-col gap-2">
            <Typography.Title>Sobre mim</Typography.Title>
            <Typography.Subtitle>
              Sou um desenvolvedor web em busca da minha primeira oportunidade
              de estágio
            </Typography.Subtitle>
          </header>
          <Typography.Paragraph textColor="secondary">
            Apesar de estar cursando engenharia, fui introduzido a algumas
            disciplinas de programação que despertaram meu interesse. No
            entanto, foi ao explorar a área de desenvolvimento web, por meio de
            um amigo, que encontrei minha verdadeira paixão. Já que minha
            formação em engenharia não prioriza o desenvolvimento web, optei por
            estudar essa área por conta própria. A cada dia me envolvo mais com
            os desafios e as possibilidades que ela oferece. Descobrir maneiras
            de aprimorar a estrutura do código e desenvolver novas lógicas tem
            sido uma jornada fascinante e gratificante.
          </Typography.Paragraph>
        </div>
      </div>
    </section>
  )
}
