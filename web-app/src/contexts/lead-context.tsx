import { AxiosError, isAxiosError } from 'axios';
import * as React from 'react';

import { IServerError } from '@/interfaces/error-interface';
import { ILead } from '@/interfaces/lead-interface';
import { getLeads } from '@/services/lead-service';

type LeadContextValues = {
  selectedTab: 'invited' | 'accepted';
  leads: ILead[];
  loading: boolean;
  serverError: string;
  setLeads: React.Dispatch<React.SetStateAction<ILead[]>>;
  setSelectedTab: React.Dispatch<React.SetStateAction<'invited' | 'accepted'>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setServerError: React.Dispatch<React.SetStateAction<string>>;
};

export const LeadContext = React.createContext<LeadContextValues>({
  selectedTab: 'invited',
  leads: [],
  loading: false,
  serverError: '',
  setLeads: () => {},
  setSelectedTab: () => {},
  setLoading: () => {},
  setServerError: () => {}
});

type LeadContextProviderProps = { children: React.ReactNode };
export const LeadContextProvider = ({ children }: LeadContextProviderProps) => {
  const [selectedTab, setSelectedTab] = React.useState<'invited' | 'accepted'>('invited');
  const [leads, setLeads] = React.useState<ILead[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [serverError, setServerError] = React.useState('');

  React.useEffect(() => {
    setLoading(true);
    getLeads(selectedTab)
      .then((data) => {
        setServerError('');
        setLeads(data);
      })
      .catch((error: AxiosError<IServerError>) => {
        const errorMessage = isAxiosError(error) ? error.response?.data?.message : '';
        setServerError(errorMessage || 'Erro inesperado.');
      })
      .finally(() => setLoading(false));
  }, [selectedTab]);

  return (
    <LeadContext.Provider value={{ selectedTab, leads, loading, serverError, setLeads, setSelectedTab, setLoading, setServerError }}>
      {children}
    </LeadContext.Provider>
  );
};
