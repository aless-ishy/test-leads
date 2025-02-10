import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import { grey } from '@mui/material/colors';
import { LeadContext } from './contexts/lead-context';
import { ServerError } from './components/error/server-error';
import { LeadsContainer } from './components/leads-container';

export default function App() {
  const { serverError, selectedTab, loading, leads, setSelectedTab } = React.useContext(LeadContext);

  const handleChange = (_: React.SyntheticEvent, newValue: 'invited' | 'accepted') => setSelectedTab(newValue);

  return (
    <Box sx={{ width: '100%', height: '100%', minHeight: '100vh', display: 'flex', padding: 1, backgroundColor: grey[200], justifyContent: 'center' }}>
      <Box sx={{ maxWidth: '900px', width: '100%', paddingTop: '10vh' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={selectedTab} onChange={handleChange} aria-label="basic tabs example" variant="fullWidth" sx={{ backgroundColor: 'white' }}>
            <Tab label="Invited" id="invited-leads-tab" value={'invited'} sx={{ borderRight: 0.5, borderColor: 'divider' }} disabled={loading} />
            <Tab label="Accepted" id="accepted-leads-tab" value={'accepted'} disabled={loading} />
          </Tabs>
        </Box>
        {serverError ? <ServerError message={serverError} /> : <LeadsContainer leads={leads} />}
      </Box>
    </Box>
  );
}
