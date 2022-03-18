import React from 'react';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectUserInfo } from '../../lib/redux/selectors';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import SendIcon from '@mui/icons-material/Send';
import { CustomedCard, CustomedTextField } from '../../customComponents';
import { StyledInput } from './elements';

export const Step2_1 = ({ setCard , inputType}) => {
  const userData = useSelector(selectUserInfo);
  console.log(userData);
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
          {
            inputType 
            ? <StyledInput text={userData.email} input='email' setCard={setCard}/>
            : <StyledInput text={userData.username} input='username' setCard={setCard}/>
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
        </Grid>
      </CardContent>
    </CustomedCard>
)};

Step2_1.propTypes = {
  setCard: propTypes.func,
  inputType: propTypes. bool.isRequired,
};
