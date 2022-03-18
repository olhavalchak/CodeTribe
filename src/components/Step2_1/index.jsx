import React, { useState } from 'react';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectUserInfo } from '../../lib/redux/selectors';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Fab from '@mui/material/Fab';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import SendIcon from '@mui/icons-material/Send';
import { CustomedCard, CustomedTextField } from '../../customComponents';
import { StyledInput } from './elements';

export const Step2_1 = ({ setCard, inputType, card }) => {
  const userData = useSelector(selectUserInfo);
  const [email, setEmail] = useState(localStorage.getItem('email'));

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
          {
            card !== 4
              ? <>
                <Typography variant="caption" component="div">
                  How do you wanna invite?
                </Typography>
                {
                  inputType
                    ? <StyledInput text={userData.email} input='email' setCard={setCard} />
                    : <StyledInput text={userData.username} input='username' setCard={setCard} />
                }
                <Typography variant="body2">
                  Wanna add a note?
                </Typography>
                <CustomedTextField fullWidth size='medium'
                  placeholder='Hey, this is a super fun
                  coding app'
                />
                <Button
                  onClick={() => setCard(5)}
                  sx={{ borderRadius: '100px' }}
                  color='info'
                  variant="contained"
                  endIcon={<SendIcon />}
                  fullWidth
                >
                  SEND
                </Button>
              </>
              : <>
                <Typography variant="caption" component="div">
                  A user with this email has not joined yet.
                </Typography>
                <CustomedTextField fullWidth value={email} onChange={(event) => setEmail(event.target.value)} />
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
                </Grid></>
          }

        </Grid>
      </CardContent>
    </CustomedCard>
  )
};

Step2_1.propTypes = {
  setCard: propTypes.func,
  card: propTypes.number.isRequired,
  inputType: propTypes.bool.isRequired,
};
