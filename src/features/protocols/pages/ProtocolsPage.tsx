import { useState } from "react";
import { useProtocols } from "@/features/protocols/hooks/useProtocols";
import { useProtocolSearch } from "@/features/protocols/hooks/useProtocolSearch";
import { ProtocolCard } from "@/features/protocols/components/ProtocolCard";
import { SearchInput } from "@/components/shared/SearchInput";

export const ProtocolsPage = () => {
  const [search, setSearch] = useState("");

  const { data: normalData, isLoading } = useProtocols();
  const { data: searchData, isLoading: searchLoading } =
    useProtocolSearch(search);

  const protocols = search
    ? searchData?.data ?? []
    : normalData?.data ?? [];

  return (
    <div className="max-w-6xl mx-auto p-5">
      <h1 className="text-3xl font-bold mb-6">Community-Powered Protocol & Discussion Platform</h1>

      {/* ✅ reusable component */}
      <SearchInput
        placeholder="Search protocols..."
        onSearch={setSearch}
      />

      {searchLoading && (
        <div className="text-sm text-gray-400 mb-3">
          Searching...
        </div>
      )}

      <div className="grid gap-4">
        {protocols.length === 0 ? (
          <div className="text-gray-500">No protocols found</div>
        ) : (
          protocols.map((protocol: any) => (
            <ProtocolCard key={protocol.id} protocol={protocol} />
          ))
        )}
      </div>
    </div>
  );
};