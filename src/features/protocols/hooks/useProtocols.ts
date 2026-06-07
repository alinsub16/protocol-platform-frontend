import { useQuery } from "@tanstack/react-query";
import { ProtocolApi } from "@/features/protocols/api/protocolApi";

export const useProtocols = (
  search?: string,
  sort?: string
) => {
  return useQuery({
    queryKey: ["protocols", search, sort],

    queryFn: () =>
      ProtocolApi.getAll({
        search,
        sort,
      }),
  });
};