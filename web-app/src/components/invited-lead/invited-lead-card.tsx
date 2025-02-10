import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { ILead } from '../../interfaces/lead-interface';
import Divider from '@mui/material/Divider';
import { InvitedLeadCardSummaryCardSection } from './invited-lead-summary-card-section';
import { InvitedLeadCardActions } from './invited-lead-card-actions';
import { LeadCardHead } from '../lead-card-head';
import { textSxProps } from '../sx-props';

type InvitedLeadCardCardProps = { lead: ILead };
export function InvitedLeadCard({ lead }: InvitedLeadCardCardProps) {
  return (
    <Card>
      <LeadCardHead lead={lead} />
      <Divider />
      <InvitedLeadCardSummaryCardSection lead={lead} />
      <Divider />
      <CardContent>
        <Typography variant="body2" sx={textSxProps}>
          {lead.description}
        </Typography>
      </CardContent>
      <Divider />
      <InvitedLeadCardActions lead={lead} />
    </Card>
  );
}
