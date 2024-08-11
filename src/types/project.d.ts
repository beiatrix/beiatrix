export interface Project {
  title: string
  subtitle: string
  description: string
  slug?: string
  url?: string
  githubUrl?: string
  image: string
  year: number | string
  company?: string
  technologies: string[]
  content: string
  featured: boolean
  private: boolean
}
