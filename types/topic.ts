export interface Link {
  title: string;
  url: string;
}

export interface Topic {
  id: number;
  title: string;
  description: string;
  markdownFile: string;
  links?: Link[];
  category: "design" | "coding" | "both";
}
