import { useVote } from "@/features/votes/hooks/useVote";

interface Props {
  votableId: number;
  votableType: "thread" | "comment";
  votesCount: number;
}

export const VoteButtons = ({
  votableId,
  votableType,
  votesCount,
}: Props) => {
  const vote = useVote();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() =>
          vote.mutate({
            votable_id: votableId,
            votable_type: votableType,
            value: 1,
          })
        }
        className="px-2 py-1 border rounded hover:bg-gray-100"
      >
        ▲
      </button>

      <span className="font-medium">
        {votesCount}
      </span>

      <button
        onClick={() =>
          vote.mutate({
            votable_id: votableId,
            votable_type: votableType,
            value: -1,
          })
        }
        className="px-2 py-1 border rounded hover:bg-gray-100"
      >
        ▼
      </button>
    </div>
  );
};