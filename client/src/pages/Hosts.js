import React from 'react';
import useStyles from '../styles.js';
import Slider from "react-slick";
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { useTheme } from '@material-ui/core'
import "@fontsource/red-hat-display/300.css"
import Avatar from '@mui/material/Avatar';
import CreateHost from '../components/HostApplication/CreateHost.js'

import HostImage from '../images/HostBackground.jpg';
import happyMan from '../images/happyMan.png';
import questionMan from '../images/questionMan.png';
import AJreview from '../images/AJreview.jpeg';
import JaydeeReview from '../images/JaydeeReview.jpg';
import JimmyReview from '../images/JimmyReview.jpeg';


function Hosts () {
    const theme = useTheme();
    const classes = useStyles();
    const ResponsiveDiv = styled('div')(({ theme }) => ({
        margin: 'auto',
        [theme.breakpoints.down('md')]: {
            width: '90%'
        },
        [theme.breakpoints.up('md')]: {
            width: '90%'
        },
        [theme.breakpoints.up('lg')]: {
            width: '60%'
        },
    }));
    var settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: 0,
        autoplay: true}
    return (
        <>
            <div className={classes.container}>
                <img src={HostImage} alt="Hosts" width="100%"></img>
                <h1 className={classes.centerText}>Hosts</h1>
            </div>

            <Grid container spacing={3} sx=
                {{
                margin: 'auto',  
                marginBottom: '5%',      
                [theme.breakpoints.down('md')]: {
                    width: '90%'
                },
                [theme.breakpoints.up('md')]: {
                    width: '75%'
                },
                [theme.breakpoints.up('lg')]: {
                    width: '60%'
                }
                }}>
                <Grid item xs={12} md={12} lg={6}>
                    <img src={questionMan} alt='Man questioning' className={classes.IconCard}/>
                </Grid>
                <Grid item xs={12} md={12} lg={6}>
                    <h1 className={classes.headingText}>Peace of Mind</h1>
                    <p className={classes.pText}>
                    LocalEyes shows your guests the best local restaurants, 
                    retailers and attractions, so you don’t have to! 
                    Alleviate some of that host stress by letting LocalEyes 
                    take care of your guests for you!
                    </p> 
                </Grid>
                <Grid item xs={12} md={12} lg={6}>
                    <img src={happyMan} alt='Emoji man smiling' className={classes.IconCard}/>
                </Grid>
                <Grid item xs={12} md={12} lg={6}>
                    <h1 className={classes.headingText}>Guest Satisfaction</h1>
                    <p className={classes.pText}>
                    When guests connect with high quality local businesses, 
                    they are more likely to leave 5 star reviews and return 
                    to your property for another vacation!
                    </p>
                </Grid>
            </Grid>
            
            <h1 className={classes.headingText}>What Do Hosts Say About Us?</h1>
            <ResponsiveDiv>
                <Slider {...settings}>
                    <div className={classes.reviewCard}>
                        <Avatar alt="Jaydee Review" src={JaydeeReview} sx={{ width: '10%', height: '10%', margin:'auto', marginBottom: '5%'}}/>
                        <p className={classes.reviewText}>
                            "Seriously, why has nobody else done this? I get so many calls all the time about
                            where the best
                            local sposts are and it drives me crazy. This is perfect for guests."
                        </p>
                        <p className={classes.reviewHeading}>
                            Jaydee
                        </p>
                        <p className={classes.reviewText}>
                            Host
                        </p>
                    </div>
                    <div className={classes.reviewCard}>
                        <Avatar alt="AJ Review" src={AJreview} sx={{ width: '10%', height: '10%', margin:'auto', marginBottom: '5%'}}/>
                        <p className={classes.reviewText}>
                            "What I like about LocalEyes is that they reach a market that is otherwise too 
                            difficult or expensive to reach. Visitors are always 
                            tricky to advertise to, but Localeyes is able to reach thousands of them every month."
                        </p>
                        <p className={classes.reviewHeading}>
                            Jimmy
                        </p>
                        <p className={classes.reviewText}>
                            Local Business Owner
                        </p>
                    </div>
                    <div className={classes.reviewCard}>
                        <Avatar alt="Jimmy Review" src={JimmyReview} sx={{ width: '10%', height: '10%', margin:'auto', marginBottom: '5%'}}/>
                        <p className={classes.reviewText}>
                            "I can always count on LocalEyes to direct me to some exceptional local spots. 
                            It's so much easier than trying to ask around and do a bunch of research."
                        </p>
                        <p className={classes.reviewHeading}>
                            AJ
                        </p>
                        <p className={classes.reviewText}>
                            Traveler
                        </p>
                    </div>
                </Slider>
            </ResponsiveDiv>

            <h1 className={classes.headingText}> 
                Get My Free Display
            </h1>
            <ResponsiveDiv>
                <CreateHost/>
            </ResponsiveDiv>

        </>
    );
}

export default Hosts;