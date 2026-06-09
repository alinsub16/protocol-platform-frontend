import { useMutation, useQueryClient } from "@tanstack/react-query";
import { VoteApi } from "@/features/votes/api/voteApi";

export const useVote = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: VoteApi.vote,

    onSuccess: (data) => {
      console.log("Vote success:", data);

      queryClient.invalidateQueries({
        queryKey: ["threads"],
      });

      queryClient.invalidateQueries({
        queryKey: ["thread"],
      });

      queryClient.invalidateQueries({
        queryKey: ["comments"],
      });
    },

    onError: (error: any) => {
      console.error(
        "Vote failed:",
        error?.response?.data || error
      );
    },
  });
};