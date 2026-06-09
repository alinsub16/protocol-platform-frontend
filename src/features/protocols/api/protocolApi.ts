import { api } from "@/api/axios";

export interface ProtocolFilters {
  search?: string;
  sort?: string;
}

export const ProtocolApi = {
  
  getAll: async (page = 1) => {
    const { data } = await api.get(`/protocols?page=${page}`);
    return data;
  },

  search: async (query: string) => {
    const response = await api.get(`/search/protocols?q=${query}`);
    return response.data;
  },

  getById: async (id: number) => {
    const response = await api.get(`/protocols/${id}`);
    return response.data;
  },

  create: async (payload: { title: string; content: string; tags: string[]; user_id: number; }) => {
    const response = await api.post("/protocols", payload);

    return response.data;
  },
};