import { Review } from "@/features/reviews/types/reviewTypes";

interface Props {
  review: Review;
}

export const ReviewItem = ({
  review,
}: Props) => {
  return (
    <div className="border rounded-lg p-4">
      <div className="flex text-left justify-between">
        <span className="font-medium">
          {review.user.name}
        </span>

        <span>
          ⭐ {review.rating}/5
        </span>
      </div>

      <p className="mt-2 text-left text-gray-700">
        {review.feedback}
      </p>
    </div>
  );
};