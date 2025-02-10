import Box from '@mui/material/Box';
import { ILead } from '../interfaces/lead-interface';
import { LeadContext } from '../contexts/lead-context';
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { InvitedLeadsContainer } from './invited-lead/invited-leads-container';
import { AcceptedLeadsContainer } from './accepted-lead/accepted-leads-container';
import { containerLoadingSxProps } from './sx-props';

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
