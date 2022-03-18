import React, { useState } from 'react';
import propTypes from 'prop-types';
import { CustomedTextField } from '../../../../customComponents';
import SendIcon from '@mui/icons-material/Send';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LinkIcon from '@mui/icons-material/Link';
import CopyAllIcon from '@mui/icons-material/CopyAll';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../../../lib/redux/actions/userActions';

export const StyledInput = ({ text, input , copy = false, isDisabled = false, setCard}) => {
  const dispatch = useDispatch();
  const [inputText, setinputText] = useState('');
  
  const handleChange = (event) => {
    setinputText(event.target.value);
  };
  const sendInfo = () => {
    localStorage.setItem( input, inputText);
    console.log(input, inputText);
    dispatch(userActions.getUserInfoAsync({ input: input, inputText: inputText}))
  };

  return (
    <CustomedTextField
      disabled={isDisabled}
      onClick={
      copy 
        ? () => {navigator.clipboard.writeText('codetribe.com/profile/')}
        : null
      }
      placeholder={text}
      startAdornment={
        <InputAdornment position="start">
          {input === 'email' ? <EmailOutlinedIcon /> : input === 'username' ? <AlternateEmailIcon /> : <LinkIcon />}
        </InputAdornment>
      }
      endAdornment={
        <InputAdornment position="end">
          <IconButton onClick={() => sendInfo() }>
            { !copy ? 
            <SendIcon />
          : <CopyAllIcon />
          }
          </IconButton>
        </InputAdornment>
      }
      value={inputText}
      onChange={handleChange}
    />
)};

StyledInput.propTypes = {
  text: propTypes.string.isRequired,
  input: propTypes.string.isRequired,
  copy: propTypes.bool,
  disabled: propTypes.bool,
  setCard: propTypes.func,
};
