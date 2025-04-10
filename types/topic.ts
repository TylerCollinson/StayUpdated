export interface Link {
  title: string
  url: string
}

export interface Topic {
  id: string
  title: string
  description: string
  content?: string
  links?: Link[]
  category: "design" | "coding" | "both" // Added category field
}
