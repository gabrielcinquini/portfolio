'use client'

import { ArrowRight } from 'lucide-react'
import React from 'react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { useGithubRepos } from '@/hooks/useGetGithubRepos'

import { Button } from '../Button'
import ProjectCard from '../ProjectCard'
import { Typography } from '../Typography'
import { Skeleton } from '../ui/skeleton'

export default function ProjectsSection() {
  const { gitRepos, isLoading } = useGithubRepos()

  return (
    <section
      id="projetos"
      className="mt-10 flex flex-col items-center gap-10 px-20 py-28 max-sm:px-14"
    >
      <header className="grid items-center justify-center gap-2">
        <Typography.Title className="flex items-center justify-center">
          Projetos
        </Typography.Title>
        <Typography.Subtitle className="text-center">
          Aqui estão os meus projetos do github
        </Typography.Subtitle>
      </header>
      {isLoading ? (
        <div className="grid w-full gap-2 max-lg:grid-cols-2 max-sm:grid-cols-1 lg:grid-cols-[repeat(auto-fit,minmax(15rem,1fr))]">
          <Skeleton className="h-80 rounded-2xl bg-surface-primary max-lg:hidden" />
          <Skeleton className="h-80 rounded-2xl bg-surface-primary max-sm:hidden" />
          <Skeleton className="h-80 rounded-2xl bg-surface-primary" />
        </div>
      ) : (
        <Carousel
          opts={{
            align: 'start',
          }}
          className="max-w-1/2 w-5/6 text-primary"
        >
          <CarouselContent>
            {gitRepos.map(
              (repo) =>
                repo.language && (
                  <CarouselItem
                    key={repo.id}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <ProjectCard
                      name={repo.name}
                      created_at={repo.created_at}
                      updated_at={repo.updated_at}
                      language={repo.language}
                      html_url={repo.html_url}
                    />
                  </CarouselItem>
                ),
            )}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      )}
      <Button
        variant="secondary"
        className="flex w-fit items-center font-medium"
        asChild
      >
        <a href="https://github.com/gabrielcinquini?tab=repositories">
          Ver todos
          <ArrowRight />
        </a>
      </Button>
    </section>
  )
}
