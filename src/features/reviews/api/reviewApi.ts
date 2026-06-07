import { api } from "@/api/axios";

export const ReviewApi = {
  getByProtocol: async (protocolId: number) => {
    const res = await api.get( `/protocols/${protocolId}/reviews` );
    return res.data;
  },

  create: async (payload: {
    protocol_id: number;
    rating: number;
    feedback: string;
  }) => { const res = await api.post( "/reviews", payload );

    return res.data;
  },

  update: async (
    reviewId: number,
    payload: {
      rating: number;
      feedback: string;
    }
  ) => { const res = await api.put( `/reviews/${reviewId}`, payload );

    return res.data;
  },

  delete: async (reviewId: number) => {
    const res = await api.delete( `/reviews/${reviewId}` );

    return res.data;
  },
};