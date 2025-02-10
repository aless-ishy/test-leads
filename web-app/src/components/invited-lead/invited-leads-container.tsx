import Box from '@mui/material/Box';

import { InvitedLeadCard } from '@/components/invited-lead/invited-lead-card';
import { containerSxProps } from '@/components/sx-props';
import { ILead } from '@/interfaces/lead-interface';

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
