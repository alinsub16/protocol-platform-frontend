import { useState } from "react";
import { useThreads } from "@/features/threads/hooks/useThreads";
import { useThreadSearch } from "@/features/threads/hooks/useThreadSearch";
import { ThreadCard } from "@/features/threads/components/ThreadCard";
import { SearchInput } from "@/components/shared/SearchInput";

export const ThreadList = ({ protocolId }: { protocolId: number }) => {
  const [search, setSearch] = useState("");

  const trimmedSearch = search.trim();
  const isSearching = trimmedSearch.length >= 2;

  // Always call both hooks (React Query will cache anyway)
  const {
    data: normalData,
    isLoading,
    error,
  } = useThreads(protocolId);

  const {
    data: searchData,
    isLoading: searchLoading,
  } = useThreadSearch(
    isSearching ? trimmedSearch : "",
    protocolId
  );

  // 🔥 STRICT SOURCE SWITCH (prevents mixing data)
  const threads = isSearching
    ? searchData?.data ?? []
    : normalData?.data ?? [];

  const loading = isSearching ? searchLoading : isLoading;

  return (
    <div>
      {/* SEARCH INPUT */}
      <SearchInput
        placeholder="Search discussions..."
        onSearch={setSearch}
      />

      {/* SEARCH CONTEXT */}
      {isSearching && (
        <div className="text-xs text-gray-400 mb-3">
          Search results for "{trimmedSearch}"
        </div>
      )}

      {/* LOADING */}
      {loading && (
        <div className="text-gray-500">
          {isSearching ? "Searching threads..." : "Loading threads..."}
        </div>
      )}

      {/* ERROR */}
      {!isSearching && error && (
        <div className="text-red-500">
          Failed to load threads
        </div>
      )}

      {/* LIST */}
      <div className="space-y-3">
        {!loading && threads.length === 0 ? (
          <div className="text-gray-500 text-center py-4">
            {isSearching ? "No results found" : "No threads yet"}
          </div>
        ) : (
          threads.map((thread: any) => (
            <ThreadCard key={thread.id} thread={thread} />
          ))
        )}
      </div>
    </div>
  );
};