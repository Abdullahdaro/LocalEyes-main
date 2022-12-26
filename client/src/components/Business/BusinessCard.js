import React, {useState, useEffect} from 'react';
import useStyles from './businessStyles';
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { useMediaQuery, useTheme } from '@material-ui/core'

import Box from '@mui/material/Box';
import { useHistory } from 'react-router-dom';
import cardBackground from '../../images/cardBackground.png';
import { CardActions, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
/* import {savePost} from '../../actions/posts'; */
import BookmarkIcon from '@mui/icons-material/Bookmark';

const BusinessCard = ({ post }) => {
    const user = JSON.parse(localStorage.getItem('profile'));
    const classes = useStyles();
    const theme = useTheme();
    const history = useHistory();
    /* const dispatch = useDispatch(); */
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    /* const handleLike = async () => {
        dispatch(savePost(post._id));
      }; */

    const ResponsiveDiv = styled('div')(({ theme }) => ({
        backgroundColor: '#f2fafc',
        borderRadius: '10px',
        border: '1px solid rgba(1, 160, 198, 1)',
        margin: 'auto',
        marginBottom: '1vh',
        boxSizing: 'border-box',
        [theme.breakpoints.down('md')]: {
            width: '95%',
            height: '90px',
            padding: '5px',
            paddingLeft: '15px' 
        },
        [theme.breakpoints.up('md')]: {
            width: '90%',
            height: '175px',
            padding: '10px',
            paddingLeft: '20px'  
        },
        [theme.breakpoints.up('lg')]: {
            width: '70%',
            height: '200px',
            padding: '10px', 
            paddingLeft: '40px'       
        },
    }));    
    const CardTitle = styled('h1')(({ theme }) => ({
        fontFamily: 'Red Hat Display',
        textDecoration: "none",
        fontWeight: 'Bold',
        padding: '0px',
        margin: '0px',
        "&:hover": {    
            cursor: "pointer",
        },
        [theme.breakpoints.down('md')]: {
            fontSize: "16px",
            marginTop: '5px',
            marginBottom: '3px'
        },
        [theme.breakpoints.up('md')]: {
            fontSize: "32px",
            marginTop: '15px',
            marginBottom: '7px'
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: "36px",
            marginTop: '20px',
            marginBottom: '10px'
        },
    }));
    const SubText = styled('p')(({ theme }) => ({
        fontFamily: 'Red Hat Display',
        textDecoration: "none",
        margin: '0px',
        padding: '0px',
        color: 'rgba(127, 128, 134, 1)',
        marginRight: '10px',
        "&:hover": {    
            cursor: "pointer",
        },
        [theme.breakpoints.down('md')]: {
            fontSize: "10px",
            marginRight: '8px',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: "22px",
            marginRight: '8px',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: "24px",
            marginRight: '10px',
        },
    }));
    const LocationText = styled('p')(({ theme }) => ({
        fontFamily: 'Red Hat Display',
        textDecoration: "none",
        fontWeight: 'bold',
        margin: '0px',
        padding: '0px',
        color: 'rgba(1, 173, 198, 1)',
        zIndex: '3',
        "&:hover": {    
            cursor: "pointer",
        },
        [theme.breakpoints.down('md')]: {
            fontSize: "16px",
            position: 'relative',
            bottom: '75px',
            left: '21px'
        },
        [theme.breakpoints.up('md')]: {
            fontSize: "26px",
            position: 'relative',
            bottom: '140px',
            left: '75px'
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: "28px",
            position: 'relative',
            bottom: '160px',
            left: '95px'
        },
    }));
    const ImageThumbnail = styled('img')(({ theme }) => ({
        textDecoration: "none",
        margin: '0px',
        padding: '0px',
        borderRadius: '5px',
        objectFit: 'cover',
        zIndex: '100',
        "&:hover": {    
            cursor: "pointer",
        },
        [theme.breakpoints.down('md')]: {
            width: '75px', 
            height: '78px'
        },
        [theme.breakpoints.up('md')]: {
            width: '170px', 
            height: '150px'
        },
        [theme.breakpoints.up('lg')]: {
            width: '200px', 
            height: '179px'
        },
    }));
    const BackgroundImage = styled('img')(({ theme }) => ({
        position: 'relative',
        zIndex: '1',
        objectFit: 'cover',
        [theme.breakpoints.down('md')]: {
            height: '87px',
            bottom: '5px',
            right: '15px'
        },
        [theme.breakpoints.up('md')]: {
            height: '172px',
            bottom: '9px',
        },
        [theme.breakpoints.up('lg')]: {
            height: '198px',
            bottom: '10px',
        },
    }));

    const openPost = () => {
        history.push(`/discover/${post._id}`);   
        
    };

    return (
        <>
            <ResponsiveDiv >
                <Grid container>
                    <Grid item xs={6} md={6} lg={6}>
                        <Grid container direction="column" justifyContent="space-evenly" alignItems="flex-start">
                            <Grid item xs={3} md={3} lg={3}>
                                <Box sx={{padding: '0px',marginTop: '0.5em',display: 'flex',alignItems: 'center',}}>
                                    <SubText onClick={openPost}>{post.rating}</SubText>
                                    {isMobile ? (
                                        <>
                                            <Rating name="rating" defaultValue={post.rating} precision={0.5} size="small" readOnly />
                                        </>
                                    )
                                    :
                                    (
                                        <>
                                            <Rating name="rating" defaultValue={post.rating} precision={0.5} size="large" readOnly />
                                        </>
                                    )
                                    }
                                    
                                </Box>
                            </Grid>
                            <Grid item xs={3} md={3} lg={3}>
                                <CardTitle onClick={openPost}>{post.title}</CardTitle>
                            </Grid>
                            <Grid item xs={3} md={3} lg={3}>
                                <SubText className={classes.descriptionText} onClick={openPost}>
                                    {post.description} 
                                </SubText>
                                {/* <CardActions className={classes.CardActions}>
                                        <Button size="small" color="primary" disabled={!user?.result} onClick={handleLike} title="Add to MyList" >
                                            <BookmarkIcon size= "small" />
                                        </Button>
                                </CardActions> */}
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={3} md={3} lg={3} style={{zIndex: '20'}}>
                        <BackgroundImage src={cardBackground} alt="Card Background" onClick={openPost}></BackgroundImage>
                        <LocationText onClick={openPost}>0.1 mi</LocationText>
                    </Grid>
                    <Grid item xs={3} md={3} lg={3} sx={{textAlign: 'right', overflow: 'hidden', maxHeight: '100%', zIndex: '30'}}>
                        <ImageThumbnail src={post.primaryPhoto} alt='Business Thumbnail' onClick={openPost}></ImageThumbnail>
                    </Grid>
                </Grid>
            </ResponsiveDiv>
        </>
    );
}

export default BusinessCard;