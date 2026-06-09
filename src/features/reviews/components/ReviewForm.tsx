import { useState } from "react";
import { useCreateReview } from "@/features/reviews/hooks/useCreateReview";

interface Props {
  protocolId: number;
}

export const ReviewForm = ({ protocolId }: Props) => {
  const createReview = useCreateReview();

  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(5);
  const [error, setError] = useState("");

  const submit = () => {
    setError("");

    createReview.mutate(
      {
        protocol_id: protocolId,
        rating,
        feedback,
      },
      {
        onSuccess: () => {
          setFeedback("");
          setRating(5);
        },
        onError: (err: any) => {
          setError(
            err?.response?.data?.message ||
              "Failed to submit review."
          );
        },
      }
    );
  };

  return (
    <div className="space-y-3">
      {error && (
        <div className="rounded border border-red-300 bg-red-50 p-3 text-red-600">
          {error}
        </div>
      )}

      <textarea
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        className="w-full rounded border p-3"
        placeholder="Write review..."
      />

      <div className="flex gap-3">
        <select
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="rounded border p-2"
        >
          {[5, 4, 3, 2, 1].map((r) => (
            <option key={r} value={r}>
              {r} Stars
            </option>
          ))}
        </select>

        <button
          onClick={submit}
          disabled={createReview.isPending}
          className="rounded bg-black px-4 py-2 text-white disabled:opacity-50"
        >
          {createReview.isPending
            ? "Submitting..."
            : "Submit Review"}
        </button>
      </div>
    </div>
  );
};