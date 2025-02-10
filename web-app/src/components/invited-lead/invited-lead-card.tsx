import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { InvitedLeadCardActions } from '@/components/invited-lead/invited-lead-card-actions';
import { InvitedLeadCardSummaryCardSection } from '@/components/invited-lead/invited-lead-summary-card-section';
import { LeadCardHead } from '@/components/lead-card-head';
import { textSxProps } from '@/components/sx-props';
import { ILead } from '@/interfaces/lead-interface';

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
