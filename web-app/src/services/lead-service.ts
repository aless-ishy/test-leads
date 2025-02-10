import { ILead } from '@/interfaces/lead-interface';
import { api } from '@/services/api';


export const acceptLead = async (id: number) => {
  await api.post('/api/lead/accept', { id });
};

export const declineLead = async (id: number) => {
  await api.post('/api/lead/decline', { id });
};

export const getLeads = async (type: 'invited' | 'accepted') => {
  const result = await api.get<ILead[]>(`/api/view/leads/${type}`);
  return result.data;
};
