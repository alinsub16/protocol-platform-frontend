import { useQuery } from "@tanstack/react-query";
import { CommentApi } from "@/features/comments/api/commentApi";
import { CommentsResponse } from "@/features/comments/types/commentsTypes";

export const useComments = (
  threadId: number | null,
  options?: { enabled?: boolean }
) => {
  return useQuery<CommentsResponse>({
    queryKey: ["comments", threadId],
    queryFn: async () => {
      const res = await CommentApi.getByThread(threadId!);
      return res.data;
    },
    enabled: options?.enabled ?? !!threadId,
  });
};