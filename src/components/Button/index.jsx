import React from 'react';
import propTypes from 'prop-types';
import AddIcon from '@mui/icons-material/Add';
import { pink } from '@mui/material/colors';
import { CustomedButton } from '../../customComponents';


export const StartButton = ({ setCard }) => (
    <CustomedButton
      variant="contained"
      color="secondary"
      startIcon={<AddIcon sx={{ color: pink[500] }}/>}
      onClick={() => setCard(1)}
    >
      A FRIEND
    </CustomedButton>
);

StartButton.propTypes = {
  setCard: propTypes.func,
};
