import { ILead } from '../../interfaces/lead-interface';
import Box from '@mui/material/Box';
import { AcceptedLeadCard } from './accepted-lead-card';
import { containerSxProps } from '../sx-props';

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
