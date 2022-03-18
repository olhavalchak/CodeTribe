import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export const CustomedButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  color: '#A6A6A6',
  fontWeight: '700',
  border: '2px solid #A6A6A6',
  backgroundColor: '#fff',
  '&:hover': {
    backgroundColor: '#fff',
    borderColor: '#505050',
    boxShadow: 'none',
  },
});
