import Box from '@mui/material/Box';

import { AcceptedLeadCard } from '@/components/accepted-lead/accepted-lead-card';
import { containerSxProps } from '@/components/sx-props';
import { ILead } from '@/interfaces/lead-interface';


type AcceptedLeadsContainerProps = { leads: ILead[] };

export const AcceptedLeadsContainer = (props: AcceptedLeadsContainerProps) => {
  return (
    <Box sx={containerSxProps}>
      {props.leads.map((lead) => (
        <AcceptedLeadCard key={lead.id} lead={lead} />
      ))}
    </Box>
  );
};
