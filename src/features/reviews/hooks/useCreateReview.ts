import { useMutation, useQueryClient, } from "@tanstack/react-query";

import { ReviewApi } from "@/features/reviews/api/reviewApi";

export const useCreateReview = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ReviewApi.create,

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: [
          "reviews",
          variables.protocol_id,
        ],
      });
    },
  });
};