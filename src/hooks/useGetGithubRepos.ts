import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export interface IGitRepo {
  id: number
  name: string
  html_url: string
  language: string
  created_at: Date
  updated_at: Date
}

export const useGithubRepos = () => {
  const { data: gitRepos = [], ...query } = useQuery({
    queryKey: ['gitRepos'],
    queryFn: async () => {
      const response = await axios<IGitRepo[]>(
        'https://api.github.com/users/gabrielcinquini/repos',
      )
      return response.data
    },
  })

  return { gitRepos, ...query }
}
