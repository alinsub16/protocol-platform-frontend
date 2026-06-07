import { api } from "@/api/axios";

export const VoteApi = {
  vote: async (payload: {
    votable_id: number;
    votable_type: string;
    value: 1 | -1;
  }) => {
    const res = await api.post("/vote", payload);

    return res.data;
  },
};