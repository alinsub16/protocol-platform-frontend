import { useQuery } from "@tanstack/react-query";
import { ThreadApi } from "@/features/threads/api/threadApi";

export const useThreads = (protocolId: number) => {
  return useQuery({
    queryKey: ["threads", protocolId],
    queryFn: () => ThreadApi.getByProtocol(protocolId),
    enabled: !!protocolId,
  });
};