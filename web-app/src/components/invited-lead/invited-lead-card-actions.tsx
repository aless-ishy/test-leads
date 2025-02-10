import Typography from '@mui/material/Typography';
import { ILead } from '../../interfaces/lead-interface';
import CardActions from '@mui/material/CardActions';
import * as React from 'react';
import { acceptLead, declineLead, getLeads } from '../../services/lead-service';
import Button from '@mui/material/Button';
import { textSxProps } from '../sx-props';
import { ServerError } from '../error/server-error';
import { LeadContext } from '../../contexts/lead-context';

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
      .catch(() => {
        setServerError('Erro inesperado.');
      })
      .finally(() => setLoadingAccept(false));
  };

  const handleDecline = () => {
    setLoadingDecline(true);
    declineLead(lead.id)
    .then(() => getLeads(selectedTab))
    .then((data) => setLeads(data))
    .catch(() => {
      setServerError('Erro inesperado.');
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
