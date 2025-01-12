import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '/src/redux/reducers/AuthSlice';
import { useNavigate } from 'react-router-dom';
import { Typography, Button, TextField, Box } from '@mui/material';
import '../../../styles/style.css'


const Login = () => {



  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {

    let hasError = false;
    const storedUser = JSON.parse(localStorage.getItem('user'));
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

    if (storedUser.username === username && storedUser.password === password) {
      dispatch(loginUser(storedUser));
      let redirectPath = localStorage.getItem('userredirect');
      navigate(redirectPath || '/onlineshop-nini')
    } else {
      setErrorMessage('نام کاربری یا رمز عبور نادرست است');
    }
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
        ورود
      </Typography>
      <TextField
        label="نام کاربری"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
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
          setPassword(e.target.value);
          setErrorMessage('');
          setPasswordError(false);
        }}
        error={passwordError}
        helperText={passwordError && "این فیلد نباید خالی باشد"}
        sx={{
          mb: 2,
          borderRadius: 1,
        }}
      />

      {errorMessage && (
        <Typography color="error" sx={{ mb: 2 ,  fontFamily: 'gandom'}}>
          {errorMessage}
        </Typography>
      )}


      <Button
        size="large"
        variant='contained'
        onClick={handleLogin}
        sx={{
          backgroundColor: 'blue.500',
          color: 'white',
          px: 2,
          borderRadius: 1,
          fontFamily: 'gandom'
        }}
      >
        ورود
      </Button>



    </Box>
  );
};

export default Login;
