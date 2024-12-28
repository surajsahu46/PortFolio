export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

export interface Article {
  id: number;
  title: string;
  description: string;
  date: string;
  readTime: string;
  link: string;
}

export interface Tool {
  id: number;
  name: string;
  icon: string;
  category: string;
  description?: string;
}

export interface Certificate {
  id: number;
  name: string;
  issuer: string;
  date: string;
  link: string;
}