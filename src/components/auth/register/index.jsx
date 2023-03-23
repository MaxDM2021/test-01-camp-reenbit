// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { authOperations } from '../../redux/auth';

import { TextField, Button, Typography } from '@mui/material';

const RegisterPage = () => {



    return (
        
                  <>
            <Typography variant="h2" fontFamily='Poppins' textAlign='center'>Registration</Typography>
            <Typography variant="body1" marginBottom={3} fontFamily='Poppins' textAlign='center'> Enter your registration data</Typography>;
            <TextField  fullWidth={true} margin='normal' label="Name" variant="outlined" placeholder='Enter your name' />
            <TextField  fullWidth={true} margin='normal' label="Email" variant="outlined" placeholder='Enter your email' />
            <TextField  type='password' fullWidth={true} margin='normal' label="Password" variant="outlined" placeholder='Enter your password' />
            <TextField type='password' fullWidth={true} margin='normal' label="Password" variant="outlined" placeholder='Repeat your password' />
            <Button sx={{fontFamily:'Poppins', marginTop: 2, marginBottom: 2, width: '60%'}} variant="contained">Registration</Button>
            <Typography variant="body1" sx={{fontFamily: 'Poppins'}} > Have got you acoount? <span className="incitingText">Login</span> </Typography>;
        </>
        
    );
};


export default RegisterPage;