import React, { useState }  from 'react';
import { useLocation } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import LoginPage from './login';
import RegisterPage from './register';
import './style.scss';
import { Box } from '@mui/material';
// import {axios} from 'axios';
import  { instance } from 'components/utils/axios/index';

const AuthRootComponent = () => {
  // const dispatch = useDispatch();
  // const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const location = useLocation();



    const handleSubmit = async (e) => {
      e.preventDefault()
     const userData = {
      email,
      password
     }
     const user = await instance.post('/users/login' , userData)
     console.log("user: ", user)
  }


  return (
    <div className="root">
      <form className="form" onSubmit={handleSubmit}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          maxWidth={640}
          margin="auto"
          padding={5}
          borderRadius={5}
          boxShadow={'5px 5px 10px #ccc'}
        >
          {location.pathname === '/login' ? 
            <LoginPage setEmail={setEmail} setPassword={setPassword}/>
           : location.pathname === '/register' ? 
            <RegisterPage />
           : null}
          ;
        </Box>
      </form>
    </div>
  );
};

export default AuthRootComponent;
