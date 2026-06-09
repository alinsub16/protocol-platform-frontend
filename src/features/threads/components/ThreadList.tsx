import { useThreads } from "@/features/threads/hooks/useThreads";
import { ThreadCard } from "@/features/threads/components/ThreadCard";

interface ThreadListProps {
  protocolId: number;
}

export const ThreadList = ({ protocolId, }: ThreadListProps) => {
  const {
    data,
    isLoading,
    error,
  } = useThreads(protocolId);

  const threads = data?.data ?? [];

  if (isLoading) {
    return (
      <div className="text-gray-500">
        Loading threads...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500">
        Failed to load threads
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {threads.length === 0 ? (
        <div className="text-gray-500 text-center py-4">
          No threads yet
        </div>
      ) : (
        threads.map((thread: any) => (
          <ThreadCard
            key={thread.id}
            thread={thread}
          />
        ))
      )}
    </div>
  );
};