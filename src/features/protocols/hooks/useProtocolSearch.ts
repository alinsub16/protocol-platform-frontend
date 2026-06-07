import { useQuery } from "@tanstack/react-query";
import { ProtocolApi } from "@/features/protocols/api/protocolApi";

export const useProtocolSearch = (query: string) => {
  return useQuery({
    queryKey: ["protocol-search", query],
    queryFn: () => ProtocolApi.search(query),
    enabled: query.length > 1,
  });
};