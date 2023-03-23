import React, { Fragment } from 'react';
import { TextField, Button, Typography } from '@mui/material';

// import { IPropsLogin} from "common/types/auth/index"

const LoginPage = (props) => {

const {setPassword, setEmail} = props;

    return (
        <>
            <Typography variant="h2" fontFamily='Poppins' textAlign='center'>Login</Typography>
            <Typography variant="body1" marginBottom={3} fontFamily='Poppins' textAlign='center'> Enter your email and password</Typography>;
            <TextField  fullWidth={true} margin='normal' label="Email" variant="outlined" placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)}/>
            <TextField type='password' fullWidth={true} margin='normal' label="Password" variant="outlined" placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)}/>
            <Button type='submit' sx={{fontFamily:'Poppins', marginTop: 2, marginBottom: 2, width: '60%'}} variant="contained">LogIN</Button>
            <Typography variant="body1" sx={{fontFamily: 'Poppins'}} > Haven't got you acoount? <span className='incitingText'>Registration</span> password </Typography>;
        </>
    );
};


export default LoginPage;


