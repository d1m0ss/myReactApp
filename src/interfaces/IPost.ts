export interface IPost {
  id: number;
  title: string;
  type?: "large" | "medium" | "small";
  text?: string;
  date: string;
  image: string;
  linkPath?: string;
  lesson_num?: number;
  description?: string;
  author?: number;
}
