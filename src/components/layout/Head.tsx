import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProtocolSearch } from "@/features/protocols/hooks/useProtocolSearch";

const Head: React.FC = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const { data, isLoading } = useProtocolSearch(search);

  const results = data?.data ?? [];

  return (
    <header className="relative w-full border-b p-4">
      <div className="max-w-6xl mx-auto">
        <input
          type="text"
          placeholder="Search protocols..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-full border px-4 py-2 focus:outline-none focus:ring"
        />

        {search.trim() && (
          <div className="absolute left-4 right-4 mt-2 bg-white border rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
            {isLoading ? (
              <div className="p-4 text-sm text-gray-500">
                Searching...
              </div>
            ) : results.length > 0 ? (
              results.map((protocol: any) => (
                <button
                  key={protocol.id}
                  onClick={() => {
                    navigate(`/protocols/${protocol.id}`);
                    setSearch("");
                  }}
                  className="w-full text-left p-4 hover:bg-gray-100 border-b last:border-b-0"
                >
                  <div className="font-medium">
                    {protocol.title}
                  </div>

                  {protocol.description && (
                    <div className="text-sm text-gray-500 line-clamp-2">
                      {protocol.description}
                    </div>
                  )}
                </button>
              ))
            ) : (
              <div className="p-4 text-sm text-gray-500">
                No protocols found
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Head;