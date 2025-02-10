import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import { blue, green, grey, orange, purple, red, yellow } from '@mui/material/colors';

import { ILead } from '@/interfaces/lead-interface';

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const rightZeros = (value: number, minSize: number) => {
  const parsedValue = value.toString();
  if (parsedValue.length >= minSize) return parsedValue;
  const zerosQuantity = minSize - parsedValue.length;
  return new Array(zerosQuantity).fill('0').join('') + parsedValue;
};

const formatDate = (isoDate: string) => {
  if (!isoDate) return '';
  const date = new Date(isoDate);
  if (Number.isNaN(+date)) return '';

  const fullYear = date.getFullYear();
  const month = months[date.getMonth()];
  const day = date.getDate();
  const minutes = date.getMinutes();

  let hour = date.getHours();
  const suffix = hour < 12 ? 'am' : 'pm';
  if (hour > 12) hour = hour - 12;

  return `${month} ${day} ${fullYear} @ ${rightZeros(hour, 2)}:${rightZeros(minutes, 2)} ${suffix}`;
};

const colorsIndex: number[] = [400, 500, 600, 900];
const colors: { [key: number]: string }[] = [red, blue, green, orange, purple, yellow, grey];

const getColor = (name: string) => {
  if (!name) return colors[0][colorsIndex[0]];
  const firstLetter = name.charCodeAt(0);
  return colors[name.length % colors.length]?.[colorsIndex[firstLetter % colorsIndex.length]] || red[500];
};

type LeadCardHeadProps = { lead: ILead };
export function LeadCardHead({ lead }: LeadCardHeadProps) {
  return (
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: getColor(lead.contact?.first_name) }} aria-label="recipe">
          {lead.contact?.first_name?.slice(0, 1) || '?'}
        </Avatar>
      }
      title={lead.contact?.first_name || 'Unknown'}
      subheader={formatDate(lead.created_date)}
    />
  );
}
