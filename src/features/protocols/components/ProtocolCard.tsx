import { Link } from "react-router-dom";
import { Protocol } from "@/features/protocols/types/protocolTypes";
import { TagBadge } from "@/components/shared/TagBadge";
import { RatingStars } from "@/components/shared/RatingStars";

interface Props {
  protocol: Protocol;
}

export const ProtocolCard = ({ protocol, }: Props) => {
  return (
    <Link
      to={`/protocols/${protocol.id}`}
      className="
        block
        bg-white
        border
        rounded-xl
        p-5
        hover:shadow-lg
        transition
      "
    >
      <h2 className="font-semibold text-blue-950 text-2xl mb-3">
        {protocol.title}
      </h2>

      <p className="text-slate-600 line-clamp-3 mb-4">
        {protocol.content}
      </p>  

      <div className="flex flex-wrap gap-2 mb-4">
        {protocol.tags?.map((tag) => (
          <TagBadge
            key={tag}
            label={tag}
          />
        ))}
      </div>

      <div className="flex items-center justify-between">
        <RatingStars
          rating={protocol.avg_rating}
        />

        <div className="text-sm text-slate-500">
          {protocol.reviews_count} reviews
        </div>
      </div>
    </Link>
  );
};