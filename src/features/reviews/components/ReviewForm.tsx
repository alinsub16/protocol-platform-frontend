import { useState } from "react";
import { useCreateReview } from "@/features/reviews/hooks/useCreateReview";

interface Props {
  protocolId: number;
}

export const ReviewForm = ({
  protocolId,
}: Props) => {
  const createReview =
    useCreateReview();

  const [feedback, setFeedback] =
    useState("");

  const [rating, setRating] =
    useState(5);

  const submit = () => {
    createReview.mutate({
      protocol_id: protocolId,
      rating,
      feedback,
    });

    setFeedback("");
    setRating(5);
  };

  return (
    <div className="space-y-3">
      <textarea
        value={feedback}
        onChange={(e) =>
          setFeedback(e.target.value)
        }
        className="w-full border rounded p-3"
        placeholder="Write review..."
      />

      <div className="flex gap-3">
        <select
          value={rating}
          onChange={(e) =>
            setRating(Number(e.target.value))
          }
          className="border rounded p-2"
        >
          {[5, 4, 3, 2, 1].map((r) => (
            <option
              key={r}
              value={r}
            >
              {r} Stars
            </option>
          ))}
        </select>

        <button
          onClick={submit}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Submit Review
        </button>
      </div>
    </div>
  );
};