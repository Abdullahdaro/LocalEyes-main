import React from 'react';
import ReactPlayer from 'react-player/youtube'
import { Link } from 'react-router-dom';
import HomePageBackgroundDesktop from '../images/DiscoverDesktop.png';
import useStyles from '../styles.js';
import FourIconGrid from '../components/Layout/FourIconGrid';
import { styled } from '@mui/material/styles';

function HomePage() {
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
                <img src={HomePageBackgroundDesktop} alt="Home Page" width="100%" height="100%"></img>
                <Link to='/discover'>
                <button className={classes.discoverButton}>Discover Local Businesses</button>
                </Link>
            </div>
            <FourIconGrid />
            <p className={classes.headingText}>What is LocalEyes?</p>
            <VideoBox>
                <ReactPlayer className={classes.videoPlayer} url='https://www.youtube.com/watch?v=NpxiGG5dq08' width="100%" height="100%"/>
            </VideoBox>
            <p className={classes.paragraphText}>
            LocalEyes serves as the bridge between tourists and high quality local businesses. 
            LocalEyes works with a large portfolio of local hotels and vacation rental hosts to show tourists the best restaurants, 
            retailers and attractions to check out during their trip.
            </p> 
        </>
    );
}
    
export default HomePage;