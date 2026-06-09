import { useQuery } from "@tanstack/react-query";
import { ProtocolApi } from "@/features/protocols/api/protocolApi";

export const useProtocols = (page: number) => {
  return useQuery({
    queryKey: ["protocols", page],
    queryFn: () => ProtocolApi.getAll(page),
  });
};