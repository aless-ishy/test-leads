import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { AxiosError, isAxiosError } from 'axios';
import * as React from 'react';

import { ServerError } from '@/components/error/server-error';
import { textSxProps } from '@/components/sx-props';
import { LeadContext } from '@/contexts/lead-context';
import { IServerError } from '@/interfaces/error-interface';
import { ILead } from '@/interfaces/lead-interface';
import { acceptLead, declineLead, getLeads } from '@/services/lead-service';


type InvitedLeadCardActionsProps = { lead: ILead };
export function InvitedLeadCardActions({ lead }: InvitedLeadCardActionsProps) {
  const [loadingAccept, setLoadingAccept] = React.useState(false);
  const [loadingDecline, setLoadingDecline] = React.useState(false);
  const [serverError, setServerError] = React.useState('');

  const { selectedTab, setLeads } = React.useContext(LeadContext);

  const handleAccept = () => {
    setLoadingAccept(true);
    acceptLead(lead.id)
      .then(() => getLeads(selectedTab))
      .then((data) => setLeads(data))
      .catch((error: AxiosError<IServerError>) => {
        const errorMessage = isAxiosError(error) ? error.response?.data?.message : '';
        setServerError(errorMessage || 'Erro inesperado.');
      })
      .finally(() => setLoadingAccept(false));
  };

  const handleDecline = () => {
    setLoadingDecline(true);
    declineLead(lead.id)
      .then(() => getLeads(selectedTab))
      .then((data) => setLeads(data))
      .catch((error: AxiosError<IServerError>) => {
        const errorMessage = isAxiosError(error) ? error.response?.data?.message : '';
        setServerError(errorMessage || 'Erro inesperado.');
      })
      .finally(() => setLoadingDecline(false));
  };

  const isLoading = loadingAccept || loadingDecline;
  return (
    <CardActions sx={{ flexWrap: 'wrap' }}>
      {!!serverError && <ServerError message={serverError} />}
      <Button variant="contained" loading={loadingAccept} disabled={isLoading} onClick={handleAccept}>
        Accept
      </Button>
      <Button variant="contained" color="secondary" loading={loadingDecline} disabled={isLoading} onClick={handleDecline}>
        Decline
      </Button>
      <Typography variant="body2" sx={textSxProps}>
        <b>${lead.price?.toLocaleString()}</b> Lead Invitation
      </Typography>
    </CardActions>
  );
}
