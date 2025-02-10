import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { fullWidthItemSxProps, itemSxProps, sectionSxProps, textSxProps } from '@/components/sx-props';
import { ILead } from '@/interfaces/lead-interface';

type AcceptedLeadCardContactCardSectionProps = { lead: ILead };
export function AcceptedLeadCardContactCardSection({ lead }: AcceptedLeadCardContactCardSectionProps) {
  return (
    <CardContent sx={sectionSxProps}>
      <Box sx={itemSxProps}>
        <LocalPhoneOutlinedIcon color="disabled" />
        <Typography variant="body2" color="primary">
          {lead.contact?.phone_number}
        </Typography>
      </Box>
      <Box sx={itemSxProps}>
        <EmailOutlinedIcon color="disabled" />
        <Typography variant="body2" color="primary">
          {lead.contact?.email}
        </Typography>
      </Box>
      <Box sx={fullWidthItemSxProps}>
        <Typography variant="body2" sx={textSxProps}>
          {lead.description}
        </Typography>
      </Box>
    </CardContent>
  );
}
