export interface Thread {
  id: number;

  title: string;

  body: string;

  votes_count: number;

  comments_count: number;

  tags: string[];

  created_at: string;

  author: {
    id: number;
    name: string;
  };

  protocol: {
    id: number;
    title: string;
  };
}
export interface ThreadResponse {
  data: Thread;
}