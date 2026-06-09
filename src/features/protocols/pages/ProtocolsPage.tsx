import { useState } from "react";
import { useProtocols } from "@/features/protocols/hooks/useProtocols";
import { ProtocolCard } from "@/features/protocols/components/ProtocolCard";

export const ProtocolsPage = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading } = useProtocols(page);

  const protocols = data?.data ?? [];
  const meta = data?.meta;

  if (isLoading) {
    return (
      <div className="max-w-6xl mx-auto p-5">
        <div>Loading protocols...</div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-5">
      <h1 className="text-3xl font-bold mb-6">
        Community-Powered Protocol & Discussion Platform
      </h1>

      <div className="grid gap-4">
        {protocols.map((protocol: any) => (
          <ProtocolCard key={protocol.id} protocol={protocol} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2 mt-8">
        <button
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
          className="px-4 py-2 border rounded disabled:opacity-50"
        >
          Previous
        </button>

        {Array.from(
          { length: meta?.last_page ?? 1 },
          (_, index) => index + 1
        ).map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => setPage(pageNumber)}
            className={`px-4 py-2 border rounded ${
              page === pageNumber
                ? "bg-black text-white"
                : "bg-white"
            }`}
          >
            {pageNumber}
          </button>
        ))}

        <button
          disabled={page === meta?.last_page}
          onClick={() => setPage((prev) => prev + 1)}
          className="px-4 py-2 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {/* Info */}
      <div className="text-center text-sm text-gray-500 mt-3">
        Showing {meta?.from} - {meta?.to} of {meta?.total} protocols
      </div>
    </div>
  );
};