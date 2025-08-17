export interface Project {
  title: string
  subtitle: string
  description: string
  slug?: string
  url?: string
  githubUrl?: string
  image: string
  company: string
  organization: string
  year: number
  technologies: string[]
  private: boolean
  featured: boolean
  sequence: number
}

export interface ProjectDocMeta {
  company?: string
  year?: number | string
  technologies?: string[]
  subtitle?: string
  slug?: string
  url?: string
  githubUrl?: string
  image?: string
  organization?: string
}

export interface ProjectDoc {
  id?: string
  title?: string
  description?: string
  body?: unknown
  meta?: ProjectDocMeta
  path?: string
}