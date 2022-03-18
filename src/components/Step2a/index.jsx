import React, { useState } from 'react';
import propTypes from 'prop-types';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import SendIcon from '@mui/icons-material/Send';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { CustomedCard, CustomedTextField } from '../../customComponents';

export const Step2a = ({ setCard }) => {
  const[email, setEmail] = useState(localStorage.getItem('email'));
  console.log(email);
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
            A user with this email has not joined yet.
          </Typography>
          <CustomedTextField fullWidth value={email} onChange={(event) => setEmail(event.target.value)}/>
          <Typography variant="body2">
            Wanna add a note? 
          </Typography>
          <CustomedTextField fullWidth size='medium'
          placeholder='Hey, this is a super fun
            coding app'
          />
            <Grid sx={{ mt: 0.2 }} container spacing={2}>
              <Grid item>
                <Fab variant='extended' size='small' >
                  <ArrowBackIosNewIcon />
                </Fab>
              </Grid>
              <Grid item>
                <Button
                  onClick={() => setCard(5)}
                  sx={{ borderRadius: '100px' }}
                  color='info'
                  variant="contained"
                  endIcon={<SendIcon />}
                >
                  EMAIL INVITE
                </Button>
              </Grid>
            </Grid>
        </Grid>
      </CardContent>
    </CustomedCard>
)};

Step2a.propTypes = {
  setCard: propTypes.func,
};
