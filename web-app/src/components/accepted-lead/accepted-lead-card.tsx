import Card from '@mui/material/Card';
import { ILead } from '../../interfaces/lead-interface';
import Divider from '@mui/material/Divider';
import { AcceptedLeadCardContactCardSection } from './accepted-lead-contact-card-section';
import { LeadCardHead } from '../lead-card-head';
import { AcceptedLeadCardSummaryCardSection } from './accepted-lead-summary-card-section';

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
