export interface Review {
  id: number;
  rating: number;
  feedback: string;
  created_at: string;

  user: {
    id: number;
    name: string;
  };
}

export interface ReviewsResponse {
  data: Review[];
}