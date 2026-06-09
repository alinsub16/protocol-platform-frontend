import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ReviewApi } from "@/features/reviews/api/reviewApi";

export const useCreateReview = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ReviewApi.create,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["reviews"],
      });
    },
  });
};