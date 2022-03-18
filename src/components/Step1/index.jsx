import React from 'react';
import propTypes from 'prop-types';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import { CustomedCard, CustomedTextField } from '../../customComponents';
import { StyledInput } from './elements';

export const Step1 = ({ setCard }) => {
  return (
    <CustomedCard sx={{ minWidth: 120 }}>
      <CardContent>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h6" component="div" >
            ADD A FRIEND
          </Typography>
          <Typography variant="caption" component="div">
            How do you wanna invite?
          </Typography>
          <StyledInput text='FRIEND`S EMAIL' input='email' setCard={setCard} required/>
          <StyledInput text='USERNAME' input='username' setCard={setCard}/>
          <StyledInput isDisabled text='codetribe.com/profile/' input='link' copy/>
          <Typography variant="body2">
          TIP: Copy the link above and send 
            <br />
            {'it to your friends.'}
          </Typography>
        </Grid>
      </CardContent>
    </CustomedCard>
)};

Step1.propTypes = {
  setCard: propTypes.func,
};
