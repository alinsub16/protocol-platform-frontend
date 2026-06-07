import { useMutation, useQueryClient, } from "@tanstack/react-query";
import { VoteApi } from "@/features/votes/api/voteApi";

export const useVote = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: VoteApi.vote,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["thread"],
      });

      queryClient.invalidateQueries({
        queryKey: ["threads"],
      });

      queryClient.invalidateQueries({
        queryKey: ["comments"],
      });
    },
  });
};