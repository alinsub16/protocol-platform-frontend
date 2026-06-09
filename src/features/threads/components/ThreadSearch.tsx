import { useState } from "react";
import { SearchInput } from "@/components/shared/SearchInput";
import { useThreadSearch } from "@/features/threads/hooks/useThreadSearch";
import { useNavigate } from "react-router-dom";

interface ThreadSearchProps {
  protocolId: number;
}

export const ThreadSearch = ({
  protocolId,
}: ThreadSearchProps) => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const trimmedSearch = search.trim();
  const isSearching = trimmedSearch.length >= 2;

  const { data, isLoading } = useThreadSearch(
    isSearching ? trimmedSearch : "",
    protocolId
  );

  const results = data?.data ?? [];

  return (
    <div className="mb-6">
      <SearchInput
        placeholder="Search discussions..."
        onSearch={setSearch}
      />

      {isSearching && (
        <div className="mt-3 border rounded-lg bg-white shadow-sm">
          {isLoading ? (
            <div className="p-4 text-gray-500">
              Searching...
            </div>
          ) : results.length === 0 ? (
            <div className="p-4 text-gray-500">
              No results found
            </div>
          ) : (
            <div className="space-y-2 p-3">
              {results.map((thread: any) => (
                <div
                  key={thread.id}
                  onClick={() => {
                    navigate(`/threads/${thread.id}`);
                    setSearch("");
                  }}
                  className="cursor-pointer rounded-md border p-4 hover:bg-gray-100"
                >
                  <h2 className="text-lg font-semibold">
                    {thread.title}
                  </h2>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};