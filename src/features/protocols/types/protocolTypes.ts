export interface Protocol {
  id: number;
  user_id: number;
  title: string;
  content: string;
  tags: string[];
  avg_rating: number;
  votes_count: number;
  reviews_count: number;
  created_at: string;
  updated_at: string;
}