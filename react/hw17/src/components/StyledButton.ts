import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export const StyledButton = styled(Button)(({ theme }) => ({
  padding: '10px 20px',
  borderRadius: '8px',
  transition: 'all 0.3s ease',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.mode === 'light' ? '#ffffff' : '#000000',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    transform: 'translateY(-2px)',
    boxShadow: theme.shadows[4]
  }
}));
