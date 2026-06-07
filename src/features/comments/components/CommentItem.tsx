import { useState } from "react";
import { CommentNode } from "@/features/comments/utils/buildTree";

interface Props {
  comment: CommentNode;
  onReply: (parentId: number, text: string) => void;
}

export const CommentItem = ({ comment, onReply, }: Props) => {
  const [replyOpen, setReplyOpen] = useState(false);
  const [text, setText] = useState("");

  return (
    <div className="border-l pl-4 mt-4">
      {/* Comment Body */}
      <div className="bg-gray-50 p-3 rounded-lg">
        <p className="text-sm text-gray-800">{comment.body}</p>

        <button
          onClick={() => setReplyOpen(!replyOpen)}
          className="text-xs mt-2 text-blue-950 cursor-pointer "
        >
          Reply
        </button>
      </div>

      {/* Reply Box */}
      {replyOpen && (
        <div className="mt-2 space-y-2">
          <textarea
            value={text}
            onChange={(e) =>
              setText(e.target.value)
            }
            className="w-full border p-2 rounded"
            placeholder="Write reply..."
          />

          <button
            onClick={() => {
              onReply(comment.id, text);
              setText("");
              setReplyOpen(false);
            }}
            className="bg-black text-white px-3 py-1 rounded"
          >
            Send
          </button>
        </div>
      )}

      {/* Recursive Replies */}
      <div className="ml-4">
        {comment.replies.map((reply) => (
          <CommentItem
            key={reply.id}
            comment={reply}
            onReply={onReply}
          />
        ))}
      </div>
    </div>
  );
};