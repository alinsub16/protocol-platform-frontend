import { Star } from "lucide-react";

interface Props {
  rating?: number;
}

export const RatingStars = ({ rating = 3 }: Props) => {
  return (
    <div className="flex items-center gap-1">
      <Star size={16} className="fill-yellow-400 text-yellow-400" />

      <span className="text-sm">
        {rating.toFixed(1)}
      </span>
    </div>
  );
};