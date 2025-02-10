import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { itemSxProps, sectionSxProps, textSxProps } from '@/components/sx-props';
import { ILead } from '@/interfaces/lead-interface';


type AcceptedLeadCardSummaryCardSectionProps = { lead: ILead };
export function AcceptedLeadCardSummaryCardSection({ lead }: AcceptedLeadCardSummaryCardSectionProps) {
  return (
    <CardContent sx={sectionSxProps}>
      <Box sx={itemSxProps}>
        <LocationOnOutlinedIcon color="disabled" />
        <Typography variant="body2" sx={textSxProps}>
          {lead.suburb}
        </Typography>
      </Box>
      <Box sx={itemSxProps}>
        <WorkOutlineOutlinedIcon color="disabled" />
        <Typography variant="body2" sx={textSxProps}>
          {lead.category}
        </Typography>
      </Box>
      <Box sx={itemSxProps}>
        <Typography variant="body2" sx={textSxProps}>
          Job ID: {lead.id}
        </Typography>
      </Box>
      <Box sx={itemSxProps}>
        <Typography variant="body2" sx={textSxProps}>
          ${lead.price?.toLocaleString()} Lead Invitation
        </Typography>
      </Box>
    </CardContent>
  );
}
