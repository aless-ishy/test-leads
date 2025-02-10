import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import * as React from 'react';

import { AcceptedLeadsContainer } from '@/components/accepted-lead/accepted-leads-container';
import { InvitedLeadsContainer } from '@/components/invited-lead/invited-leads-container';
import { containerLoadingSxProps } from '@/components/sx-props';
import { LeadContext } from '@/contexts/lead-context';
import { ILead } from '@/interfaces/lead-interface';

type LeadsContainerProps = { leads: ILead[] };

export const LeadsContainer = (props: LeadsContainerProps) => {
  const { leads } = props;
  const { loading, selectedTab } = React.useContext(LeadContext);
  
  return (
    <>
      <Box role="tabpanel" hidden={selectedTab !== 'invited'} id="invited-leads-tabpanel" aria-labelledby="invited-leads-tab">
        {loading ? (
          <Box sx={containerLoadingSxProps}>
            <CircularProgress />
          </Box>
        ) : (
          <InvitedLeadsContainer leads={leads} />
        )}
      </Box>
      <Box role="tabpanel" hidden={selectedTab !== 'accepted'} id="accepted-leads-tabpanel" aria-labelledby="accepted-leads-tab">
        {loading ? (
          <Box sx={containerLoadingSxProps}>
            <CircularProgress />
          </Box>
        ) : (
          <AcceptedLeadsContainer leads={leads} />
        )}
      </Box>
    </>
  );
};
