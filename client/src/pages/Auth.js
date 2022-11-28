import React, {useState, useEffect} from 'react'
import {Avatar, Button, Paper, Grid, Typography,Container, TextField} from '@material-ui/core';
import useStyles from '../styles.js';
import Authinput from './Authinput.js';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { GoogleLogin } from '@react-oauth/google';
import AuthIcon from './AuthIcon.js';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { signin, signup } from '../actions/auth'

const initialState = { firstName: '' , lastName: '', email: '' , password:'', confirmPassword:'' }

const Auth = () => {
    const classes= useStyles();
    const [showpassword, setShowpassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const history = useHistory();
    
    const handleShowPassword = () => setShowpassword((prevShowPassword) => !prevShowPassword )
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(isSignup) {
            dispatch(signup(formData, history))
        } else {
            dispatch(signin(formData, history))
        }
    };
    
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
    };

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
        setShowpassword(false);
    };
    
    const googleSuccess = async (res) => {
        const result = jwt_decode(res?.credential); 
        const token = (res.credential);

        try {
            dispatch({type: 'AUTH', data: {result, token}})

            history.push('/')
        } catch (error) {
            console.log(error)
        }
    };

    const googleFailure = (error) => { 
        console.log(error)
        console.log('Google Sign In was unsuccefully. Try Again Later')
    }

  return (
    <Container component="main" maxWidth='sm'>
        <Paper className={classes.paper} elevation={3}>
            <Avatar >
                <LockOutlinedIcon />
            </Avatar>
            <Typography>
                {isSignup ? 'Sign Up' : 'Sign In'}
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    {
                        isSignup && (
                            <>
                                <Authinput name="firstName" label="First Name" handleChange={handleChange} autoFocus half variant="outlined"/>
                                <Authinput name="lastName" label="Last Name" handleChange={handleChange} half variant="outlined"/>
                            </>
                        )}
                        <Authinput name="email" label="Email address" handleChange={handleChange} type='email' />
                        <Authinput name="password" label="Password" handleChange={handleChange} type={showpassword ? 'text' : 'password'} handleShowPassword={handleShowPassword}/>
                        { isSignup && <Authinput name="passwordconfirm" label="Repeat Password" handleChange={handleChange} type='password'/>}
                </Grid>
                <Button type='submit' fullWidth variant="contained" color='primary' className={classes.submit} style={{fontSize: '28px'}}>
                    {isSignup ? 'Sign Up' : 'Sign In'}
                </Button> 
                <GoogleLogin 
                    clientId='312355431173-1nnnil8qaajb9is78c6s4h00n3eokcr8.apps.googleusercontent.com'
                    render={(renderProps) => (
                        <Button className={classes.googleButton} color='primary' fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<AuthIcon />} varient='containe'>
                            Google Sign In
                        </Button>
                    )} 
                    onSuccess={googleSuccess}
                    onFailur={googleFailure}
                    cookiePolicy="single_host_origin"
                    isSignedIn={true}
                    />
                <Grid container justifyContent='flex-end'>
                    <Grid item>
                        <Button onClick={switchMode} style={{fontSize: '15px'}}>
                            { isSignup ? 'Already have an account? Sign In' : "Dont't have an account? Sign up"}
                        </Button>
                    </Grid>
                </Grid>    
            </form>
        </Paper>
    </Container>
  )
}

export default Auth