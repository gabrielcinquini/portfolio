import Image from 'next/image'
import React from 'react'

import Typescript from '@/assets/Typescript.svg'
import { IGitRepo } from '@/hooks/useGetGithubRepos'
import { capitalizeDate } from '@/utils'

import { Typography } from './Typography'

type ProjectProps = Omit<IGitRepo, 'id'>

export default function ProjectCard({
  name,
  html_url: htmlUrl,
  language,
  created_at: createdAt,
  updated_at: updatedAt,
}: ProjectProps) {
  return (
    <a
      href={htmlUrl}
      className="flex h-64 flex-col justify-between gap-4 rounded-2xl bg-surface-primary p-6 duration-200 hover:bg-surface-primary/70"
    >
      <header className="flex flex-col items-center justify-center gap-4">
        <Typography.Reading>{name}</Typography.Reading>
      </header>
      <footer className="flex w-full items-center justify-between">
        <Typography.Paragraph size="sm" textColor="secondary">
          {capitalizeDate(createdAt)} - {capitalizeDate(updatedAt)}
        </Typography.Paragraph>{' '}
        {language.toLocaleLowerCase() === 'typescript' && (
          <Image src={Typescript} alt="" />
        )}
      </footer>
    </a>
  )
}
