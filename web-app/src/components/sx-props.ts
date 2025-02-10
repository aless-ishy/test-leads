import { SxProps } from '@mui/material/styles';

export const containerSxProps: SxProps = { width: '100%', display: 'flex', flexDirection: 'column', rowGap: 2, paddingY: 2 };

export const containerLoadingSxProps: SxProps = { display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 3 };

export const sectionSxProps: SxProps = { display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' };

export const itemSxProps: SxProps = { display: 'flex', alignItems: 'center', gap: 1 };

export const fullWidthItemSxProps: SxProps = { display: 'flex', width: '100%', gap: 1, alignItems: 'center' };

export const textSxProps: SxProps = { color: 'text.secondary' };
