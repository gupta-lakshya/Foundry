export interface Idea {
  id: string;
  title: string;
  description: string;
  status: "Building" | "Under review" | "Completed";
  category: string;
}
