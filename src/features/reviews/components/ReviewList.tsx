import { useReviews } from "@/features/reviews/hooks/useReviews";
import { ReviewItem } from "@/features/reviews/components/ReviewItem";

interface Props {
  protocolId: number;
}
export const ReviewList = ({ protocolId, }: Props) => {
    
  const { data, isLoading } = useReviews(protocolId);

  if (isLoading) {
    return <div>Loading reviews...</div>;
  }

  const reviews = data?.data ?? [];

  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <ReviewItem
          key={review.id}
          review={review}
        />
      ))}
    </div>
  );
};