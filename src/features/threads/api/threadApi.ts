import { api } from "@/api/axios";

export const ThreadApi = {
  getByProtocol: async (protocolId: number) => {
    const res = await api.get(`/protocols/${protocolId}/threads`);
    return res.data;
  },

  search: async (query: string, protocolId?: number) => {
    const res = await api.get( `/search/threads?q=${query}` );
    return res.data;
  },

  getById: async (id: number) => {
    const res = await api.get(`/threads/${id}`);
    return res.data;
  },

  getComments: async (threadId: number) => {
    const res = await api.get(`/comments`, {
      params: { thread_id: threadId },
    });
    return res.data;
  },

  createThread: async (payload: any) => {
    const res = await api.post(`/threads`, payload);
    return res.data;
  },
};