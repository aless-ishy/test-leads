import Typography from '@mui/material/Typography';
import { fullWidthItemSxProps } from '../sx-props';
import Box from '@mui/material/Box';
import ErrorIcon from '@mui/icons-material/Error';

type ServerErrorProps = { message: string };
export const ServerError = (props: ServerErrorProps) => {
  return (
    <Box sx={fullWidthItemSxProps} padding={1}>
      <ErrorIcon color="error" />
      <Typography variant="body2" color="error">
        {props.message}
      </Typography>
    </Box>
  );
};
