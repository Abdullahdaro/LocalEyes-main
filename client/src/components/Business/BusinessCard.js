import React from 'react';
import useStyles from './businessStyles';
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { useMediaQuery, useTheme } from '@material-ui/core'

import {useDispatch} from 'react-redux'
import { likePost } from '../../actions/posts';
import Box from '@mui/material/Box';
import { useHistory } from 'react-router-dom';
import cardBackground from '../../images/cardBackground.png';
import { CardActions, Button } from '@mui/material';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

const BusinessCard = ({ post }) => {
    const classes = useStyles();
    const theme = useTheme();
    const history = useHistory();
    const dispatch = useDispatch();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
            width: '55%',
            height: '210px',
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
        history.push(`/discover/${post.customURL}`);   
        
    };

    return (
        <>
            <ResponsiveDiv onClick={openPost}>
                <Grid container>
                    <Grid item xs={6} md={6} lg={6}>
                        <Grid container direction="column" justifyContent="space-evenly" alignItems="flex-start">
                            <Grid item xs={3} md={3} lg={3}>
                                <Box sx={{padding: '0px',marginTop: '0.5em',display: 'flex',alignItems: 'center',}}>
                                    <SubText>{post.rating}</SubText>
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
                                <CardTitle>{post.title}</CardTitle>
                            </Grid>
                            <Grid item xs={3} md={3} lg={3}>
                                <SubText className={classes.descriptionText}>{post.description}</SubText>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={3} md={3} lg={3} style={{zIndex: '20'}}>
                        <BackgroundImage src={cardBackground} alt="Card Background"></BackgroundImage>
                        <LocationText>0.1 mi</LocationText>
                    </Grid>
                    <Grid item xs={3} md={3} lg={3} sx={{textAlign: 'right', overflow: 'hidden', maxHeight: '100%', zIndex: '30'}}>
                        <ImageThumbnail src={post.primaryPhoto} alt='Business Thumbnail'></ImageThumbnail>
                    </Grid>
                </Grid>
            </ResponsiveDiv>
           {/*  <CardActions className={classes.CardActions}>
                                                <Button size='small' color='primary' onClick={() => dispatch(likePost(post._id))}>
                                                    <ThumbUpAltIcon size='small'></ThumbUpAltIcon>
                                                    Add to my list 
                                                    {post.likeCount}
                                                </Button>
                                            </CardActions> */}
            
        </>
    );
}

export default BusinessCard;