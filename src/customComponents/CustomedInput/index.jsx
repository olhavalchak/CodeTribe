import * as React from 'react';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

export const CustomedTextField = styled(InputBase)({
  boxShadow: 'none',
  textAlign:'center',
  textTransform: 'none',
  color: '#364954',
  border: '1px solid #A6A6A6',
  backgroundColor: '#fff',
  borderRadius: '100px',
  outline: 'none',
  padding: '5px',
  marginBottom: '5px',
});
