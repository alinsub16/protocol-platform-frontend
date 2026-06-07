import { api } from "@/api/axios";

export const CommentApi = {
  getByThread: (threadId: number) =>
    api.get(`/comments`, {
      params: { thread_id: threadId },
    }),

  create: (payload: {
    thread_id: number;
    parent_id?: number | null;
    body: string;
  }) => api.post(`/comments`, payload),
};