import { useNavigate } from "react-router-dom";
import { VoteButtons } from "@/features/votes/components/VoteButtons";

export const ThreadCard = ({ thread }: any) => {
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`/threads/${thread.id}`);
  };

  return (
    <div className="border rounded-lg p-4 hover:bg-gray-50 transition">
      
      {/* Title ONLY is clickable */}
      <h3
        onClick={goToDetail}
        className="font-semibold text-blue-950 text-lg cursor-pointer hover:underline"
      >
        {thread.title}
      </h3>

      <p className="text-sm text-gray-600 line-clamp-2 mt-1">
        {thread.body}
      </p>

      <span className="mt-4 block">-dad {thread.user_name}</span>

      <div className="flex w-full justify-between items-center mt-3">
        
        <div className="flex gap-4 text-xs text-gray-500">
          <span>💬 {thread.comments_count}</span>
        </div>

        {/* IMPORTANT: stopPropagation handled inside VoteButtons */}
        <div onClick={(e) => e.stopPropagation()}>
          <VoteButtons
            votableId={thread.id}
            votableType="thread"
            votesCount={thread.votes_count}
          />
        </div>
      </div>
    </div>
  );
};