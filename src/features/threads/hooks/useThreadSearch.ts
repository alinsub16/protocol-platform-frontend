import { useQuery } from "@tanstack/react-query";
import { ThreadApi } from "@/features/threads/api/threadApi";

export const useThreadSearch = (query: string, protocolId?: number) => {
  return useQuery({
    queryKey: ["thread-search", query, protocolId],
    queryFn: () => ThreadApi.search(query, protocolId),
    enabled: query.length > 1,
  });
};