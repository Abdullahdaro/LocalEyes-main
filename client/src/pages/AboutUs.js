import React from 'react';
import AboutUsBackground from '../images/AboutUs.jpg';
import useStyles from '../styles.js';
import ReactPlayer from 'react-player/youtube'
import FourIconGrid from '../components/Layout/FourIconGrid';
import { styled } from '@mui/material/styles';



function AboutUs() {
    const classes = useStyles();
    const VideoBox = styled('div')(({theme}) => ({
        position: 'relative',
        paddingTop: '56.25%',
        margin: 'auto',
        [theme.breakpoints.down('md')]: {
            width: '90%'
        },
        [theme.breakpoints.up('md')]: {
            width: '80%'
        },
        [theme.breakpoints.up('lg')]: {
            width: '70%',
        },
    }))
    return (
        <>
            <div className={classes.container}>
                <img src={AboutUsBackground} alt="Home Page" width="100%" height="auto"></img>
                <h1 className={classes.centerText}>About Us</h1>
            </div>
            <h1 className={classes.headingText}>What is LocalEyes?</h1>
            <VideoBox>
                <ReactPlayer className={classes.videoPlayer} url='https://www.youtube.com/watch?v=NpxiGG5dq08' width="100%" height="100%"/>
            </VideoBox>
            <p className={classes.paragraphText}>
            LocalEyes serves as the bridge between tourists and high quality local businesses. 
            LocalEyes works with a large portfolio of local hotels and vacation rental hosts to show tourists the best restaurants, 
            retailers and attractions to check out during their trip.
            </p> 
            <h1 className={classes.headingText}>Who Are You?</h1>
            <FourIconGrid />
        </>
    );
}
    
export default AboutUs;