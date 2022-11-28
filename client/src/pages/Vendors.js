import React from 'react';
import useStyles from '../styles.js';
import Slider from "react-slick";
import { styled } from '@mui/material/styles';
import { useTheme } from '@material-ui/core'
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';

import vendor from '../images/VendorBackground.jpg';
import partnerList from '../images/partnerList.png'
import happyMan from '../images/happyMan.png'
import questionMan from '../images/questionMan.png'
import JaydeeReview from '../images/JaydeeReview.jpg'
import RussellReview from '../images/RussellReview.jpg'
import StephenReview from '../images/StephenReview.jpg'
import SarahReview from '../images/SarahReview.jpg'

function Vendors () {
    const theme = useTheme();
    const classes = useStyles();
    const ResponsiveDiv = styled('div')(({ theme }) => ({
        margin: 'auto',
        textAlign: 'center',
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
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: 0,
        autoplay: true}
    return (
        <>
            <div className={classes.container}>
                <img src={vendor} alt="Hosts" width="100%" height="100%"></img>
                <h1 className={classes.centerText}>Vendors</h1>
            </div>

            <ResponsiveDiv>
                <h1 className={classes.headingText}>Connect with thousands of travelers.</h1>
                <img src={partnerList} alt="List of Partners" style={{width: '50%', height: 'auto',display: 'block',margin: 'auto'}}></img>
                <h1 className={classes.headingText}>+ many more top locations</h1> 
                <p className={classes.pText}>
                    By placing an easily scannable QR code display in hundreds of hotel 
                    rooms and vacation rentals in your area, LocalEyes connects 
                    thousands of tourists with great local businesses every month.
                </p>
                <p className={classes.pText}>
                    Apply now to be featured on LocalEyes’ exclusive list.
                </p>
            </ResponsiveDiv>
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
                    <h1 className={classes.headingText}>Attract Tourists</h1>
                    <p className={classes.pText}>
                    LocalEyes connects high quality local businesses with a 
                    large portfolio of local hotels and vacation rentals. 
                    Thousands of tourists every month use LocalEyes to find a 
                    high quality local experience in your area.
                    </p>
                </Grid>
                <Grid item xs={12} md={12} lg={6}>
                    <img src={happyMan} alt='Emoji man smiling' className={classes.IconCard}/>
                </Grid>
                <Grid item xs={12} md={12} lg={6}>
                    <h1 className={classes.headingText}>Build Your Brand</h1>
                    <p className={classes.pText}>
                    LocalEyes’ featured vendors are viewed as the best of the best. 
                    Apply today and build your brand as one of the greatest local 
                    businesses in your area.
                    </p>
                </Grid>
            </Grid>
            <h1 className={classes.headingText}> 
                What Do Vendors Say About Us?
            </h1>
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
                        <Avatar alt="Russell Review" src={RussellReview} sx={{ width: '10%', height: '10%', margin:'auto', marginBottom: '5%'}}/>
                        <p className={classes.reviewText}>
                            "I get multiple calls and messages per week when my units are booked about where to eat
                            or where to buy something. I put my LocalEyes display by the door so they can get all
                            those answers as soon as they walk in."
                        </p>
                        <p className={classes.reviewHeading}>
                            Russell
                        </p>
                        <p className={classes.reviewText}>
                            Host
                        </p>
                    </div>
                    <div className={classes.reviewCard}>
                        <Avatar alt="Stephen Review" src={StephenReview} sx={{ width: '10%', height: '10%', margin:'auto', marginBottom: '5%'}}/>
                        <p className={classes.reviewText}>
                            "This is so much better than the other ways I've tried to give recommendations
                            to my guests. It's fun, modern, and my guests really like it."
                        </p>
                        <p className={classes.reviewHeading}>
                            Stephen
                        </p>
                        <p className={classes.reviewText}>
                            Host
                        </p>
                    </div>
                    <div className={classes.reviewCard}>
                        <Avatar alt="Sarah Review" src={SarahReview} sx={{ width: '10%', height: '10%', margin:'auto', marginBottom: '5%'}}/>
                        <p className={classes.reviewText}>
                            "I love LocalEyes. It's just awesome."
                        </p>
                        <p className={classes.reviewHeading}>
                            Sarah
                        </p>
                        <p className={classes.reviewText}>
                            Host
                        </p>
                    </div>
                </Slider>
            </ResponsiveDiv>
            <h1 className={classes.headingText}> 
                Apply!
            </h1>
            <ResponsiveDiv>
                <form style={{width: '80%', margin: "auto"}}>
                    <TextField required color="primary" margin="normal" id="outlined-basic" label="Contact Name" variant="outlined" sx={{width: '100%', backgroundColor: 'rgba(245, 245, 247, 1)'}}/>
                    <TextField required margin="normal" id="outlined-basic" label="Business Name" variant="outlined" sx={{width: '100%', backgroundColor: 'rgba(245, 245, 247, 1)'}}/>
                    <TextField required margin="normal" id="outlined-basic" label="Email" variant="outlined" sx={{width: '100%', backgroundColor: 'rgba(245, 245, 247, 1)'}}/>
                    <TextField required margin="normal" id="outlined-basic" label="Mailing Address" variant="outlined" sx={{width: '100%', backgroundColor: 'rgba(245, 245, 247, 1)'}}/>
                    <button type="submit" className={classes.submitButton}>Submit</button>
                </form>
            </ResponsiveDiv>
        </>
    );
}

export default Vendors;