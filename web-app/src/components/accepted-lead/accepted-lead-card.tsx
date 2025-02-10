import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';

import { AcceptedLeadCardContactCardSection } from '@/components/accepted-lead/accepted-lead-contact-card-section';
import { AcceptedLeadCardSummaryCardSection } from '@/components/accepted-lead/accepted-lead-summary-card-section';
import { LeadCardHead } from '@/components/lead-card-head';
import { ILead } from '@/interfaces/lead-interface';

type AcceptedLeadCardCardProps = { lead: ILead };
export function AcceptedLeadCard({ lead }: AcceptedLeadCardCardProps) {
  return (
    <Card>
      <LeadCardHead lead={lead} />
      <Divider />
      <AcceptedLeadCardSummaryCardSection lead={lead} />
      <Divider />
      <AcceptedLeadCardContactCardSection lead={lead} />
    </Card>
  );
}
