import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CommentApi } from "@/features/comments/api/commentApi";

export const useCreateComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: CommentApi.create,

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["comments", variables.thread_id],
      });
    },
  });
};