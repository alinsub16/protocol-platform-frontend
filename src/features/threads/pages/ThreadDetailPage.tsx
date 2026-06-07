import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { ThreadApi } from "@/features/threads/api/threadApi";
import { useComments } from "@/features/comments/hooks/useComments";
import { useCreateComment } from "@/features/comments/hooks/useCreateComment";
import { CommentItem } from "@/features/comments/components/CommentItem";
import { ThreadResponse } from "@/features/threads/types/threadsTypes";

export const ThreadDetailPage = () => {
  const { id } = useParams();

  const threadId = id ? parseInt(id, 10) : null;

  const [comment, setComment] = useState("");

  const createComment = useCreateComment();

  //  THREAD QUERY (SAFE)
  const {
    data: threadData,
    isLoading: threadLoading,
  } = useQuery<ThreadResponse>({
    queryKey: ["thread", threadId],
    queryFn: () => ThreadApi.getById(threadId!),
    enabled: !!threadId,
  });


 const { data: commentsData, isLoading: commentsLoading } =
  useComments(threadId);

  if (!threadId) {
    return <div>Invalid thread ID</div>;
  }

  if (threadLoading) {
    return <div>Loading thread...</div>;
  }

  if (!threadData) {
    return <div>Thread not found</div>;
  }

  const thread = threadData.data;
  const comments = commentsData?.data ?? [];

  const handleReply = (parentId: number, text: string) => {
    createComment.mutate({
      thread_id: threadId,
      parent_id: parentId, 
      body: text,
    });
  };

  const handleCreateRootComment = () => {
    if (!comment.trim()) return;

    createComment.mutate({
      thread_id: threadId,
      parent_id: null,
      body: comment,
    });

    setComment("");
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      
      {/* THREAD */}
      <div className="mb-8 bg-white p-4">
        <h1 className="text-2xl text-blue-950 font-bold">{thread.title}</h1>

        <p className="text-gray-700 mt-3">{thread.body}</p>
      </div>

      {/* CREATE COMMENT */}
      <div className="mb-6">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full border p-3 rounded"
          placeholder="Write a comment..."
        />

        <button
          onClick={handleCreateRootComment}
          className="mt-2 bg-black text-white px-4 py-2 rounded"
        >
          Comment
        </button>
      </div>

      {/* COMMENTS */}
      <div>
        {commentsLoading ? (
          <div>Loading comments...</div>
        ) : (
          comments.map((comment) => (
            <CommentItem
              key={comment.id}
              comment={comment}
              onReply={handleReply}
            />
          ))
        )}
      </div>
    </div>
  );
};