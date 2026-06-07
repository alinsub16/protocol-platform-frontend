import { useQuery } from "@tanstack/react-query";
import { ProtocolApi } from "@/features/protocols/api/protocolApi";


export const useProtocol = (id: number) => {
  return useQuery({
    queryKey: ["protocol", id],

    queryFn: () =>
      ProtocolApi.getById(id),

    enabled: !!id,
  });
};