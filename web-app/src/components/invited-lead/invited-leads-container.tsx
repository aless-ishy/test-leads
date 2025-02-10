import { ILead } from '../../interfaces/lead-interface';
import Box from '@mui/material/Box';
import { InvitedLeadCard } from './invited-lead-card';
import { containerSxProps } from '../sx-props';

type InvitedLeadsContainerProps = { leads: ILead[] };

export const InvitedLeadsContainer = (props: InvitedLeadsContainerProps) => {
  return (
    <Box sx={containerSxProps}>
      {props.leads.map((lead) => (
        <InvitedLeadCard key={lead.id} lead={lead} />
      ))}
    </Box>
  );
};
