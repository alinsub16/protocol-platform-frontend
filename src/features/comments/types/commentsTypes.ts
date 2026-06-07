export interface Comment {
  id: number;
  body: string;

  thread_id: number;

  parent_id: number | null;

  votes_count: number;

  created_at: string;

  author: {
    id: number;
    name: string;
  };

  replies: Comment[];
}

export interface CommentsResponse {
  data: Comment[];
}