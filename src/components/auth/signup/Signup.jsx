import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '/src/redux/reducers/AuthSlice';
import { useNavigate } from 'react-router-dom';
import { Typography, Box, Button, TextField } from '@mui/material';
import '../../../App.css'


const Signup = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignup = () => {

    let hasError = false;
    if (!username) {
      setUsernameError(true);
      hasError = true;
    } else {
      setUsernameError(false);
    }

    if (!password) {
      setPasswordError(true);
      hasError = true;
    } else {
      setPasswordError(false);
    }

    if (hasError) {
      setErrorMessage('باید در فیلد ها چیزی وارد کنید');
      return;
    }

    let redirectPath = localStorage.getItem('userredirect');
    const user = { username, password };
    dispatch(registerUser(user));
    navigate(redirectPath || '/onlineshop-nini')

  };

  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '400px', fontFamily: 'gandom' }}
    >
      <Typography
        component="h1"
        fontFamily={'gandom'}
        sx={{
          textAlign: 'center',
          color: 'black',
          fontSize: '2rem',
          fontWeight: 'bold',
          mb: 2
        }} >
        ثبت نام
      </Typography>
      <TextField
        label="نام کاربری"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value)
          setErrorMessage('');
          setUsernameError(false);
        }}
        error={usernameError} 
        helperText={usernameError && "این فیلد نباید خالی باشد"}
        sx={{
          mb: 2,
          borderRadius: 1,
        }}
      />

      <TextField
        type="password"
        label='رمز عبور'
        value={password}
        onChange={(e) => {
          setPassword(e.target.value)
          setErrorMessage('');
          setPasswordError(false)
        }}
        error={passwordError} 
        helperText={passwordError && "این فیلد نباید خالی باشد"}
        sx={{
          mb: 2,
          borderRadius: 1,
        }}
      />

      {errorMessage && (
        <Typography color="error" sx={{ mb: 2, fontFamily: 'gandom' }}>
          {errorMessage}
        </Typography>)}

      <Button
        size="large"
        variant='contained'
        onClick={handleSignup}
        sx={{
          backgroundColor: 'blue.500',
          color: 'white',
          px: 2,
          borderRadius: 1,
          fontFamily: 'gandom'
        }}
      >
        ثبت نام
      </Button>



    </Box>
  );
};

export default Signup;
