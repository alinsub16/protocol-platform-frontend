import { useQuery } from "@tanstack/react-query";
import { ReviewApi } from "@/features/reviews/api/reviewApi";
import { ReviewsResponse } from "@/features/reviews/types/reviewTypes";

export const useReviews = (
  protocolId: number
) => {
  return useQuery<ReviewsResponse>({
    queryKey: ["reviews", protocolId],
    queryFn: () =>
      ReviewApi.getByProtocol(protocolId),
    enabled: !!protocolId,
  });
};