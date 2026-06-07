import { useParams } from "react-router-dom";
import { useProtocol } from "../hooks/useProtocol";
import { TagBadge } from "@/components/shared/TagBadge";
import { RatingStars } from "@/components/shared/RatingStars";
import { useState } from "react";
import { ThreadList } from "@/features/threads/components/ThreadList";
import { ReviewForm } from "@/features/reviews/components/ReviewForm";
import { ReviewList } from "@/features/reviews/components/ReviewList";

export const ProtocolDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const protocolId = Number(id);

  const { data, isLoading, error } = useProtocol(protocolId);

  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(5);

  if (isLoading) {
    return (
      <div className="max-w-5xl mx-auto p-6">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-1/2" />
          <div className="h-4 bg-gray-200 rounded w-full" />
          <div className="h-4 bg-gray-200 rounded w-5/6" />
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="max-w-5xl mx-auto p-6 text-red-500">
        Failed to load protocol.
      </div>
    );
  }

  const protocol = data.data;

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-10">
      {/* =========================
          PROTOCOL HEADER
      ========================= */}
      <div className="bg-white border rounded-xl p-6 shadow-sm">
        <h1 className="text-3xl text-blue-950 font-bold mb-3">
          {protocol.title}
        </h1>

        <div className="flex items-center gap-3 mb-4">
          <RatingStars rating={protocol.avg_rating || 0} />

          <span className="text-sm text-gray-500">
            {protocol.reviews_count} reviews
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {protocol.tags?.map((tag: string) => (
            <TagBadge key={tag} label={tag} />
          ))}
        </div>

        {/* Content */}
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {protocol.content}
        </p>
      </div>

      {/* =========================
          REVIEWS SECTION
      ========================= */}
      <div className="bg-white border rounded-xl p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-blue-950  mb-4">
          Reviews
        </h2>

        <ReviewForm protocolId={protocolId} />

        <div className="mt-6">
          <ReviewList protocolId={protocolId} />
        </div>
      </div>

      {/* =========================
          THREADS SECTION
      ========================= */}
      <div className="bg-white border rounded-xl p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-blue-950  mb-4">
          Discussions
        </h2>
        <ThreadList protocolId={protocolId} />
      </div>
    </div>
  );
};