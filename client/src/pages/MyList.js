import React, { useState, useEffect } from "react";
import BusinessCardList from '../components/Business/BusinessCardList';
import { getSavedPost } from "../actions/posts";
import { useDispatch, useSelector } from 'react-redux';

import { Link, useParams } from 'react-router-dom'
import Post from '../components/Business/BusinessCard'
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import { styled } from '@mui/material/styles';
import useStyles from '../styles.js';


const MyList = ( ) => {
    const dispatch = useDispatch();
    const {_id} = useParams();
    const { posts, isLoading } = useSelector((state) => state.posts);
    const classes = useStyles();
    
    useEffect(() => {
        dispatch(getSavedPost(_id));
    }, []);

    console.log("hello me", posts)

    if (!posts.length && !isLoading) return (
        <div className={classes.headingText}>
            No Posts
        </div>
    );
    
    const ResponsiveDiv = styled('div')(({ theme }) => ({
        margin: 'auto',
        [theme.breakpoints.down('md')]: {
            width: '90%'
        },
        [theme.breakpoints.up('md')]: {
            width: '90%'
        },
        [theme.breakpoints.up('lg')]: {
            width: '90%'
        },
    }));

    return (
        <>
        <div className={classes.headingText}>
            My List 
        </div>
        {!posts?.length ? 
        <div style={{textAlign: 'center'}}>
            <CircularProgress />   
        </div>
        : (
            <ResponsiveDiv>
                {posts?.map((post) => (
                    <Grid key={post._id} item xs={12} sm={12} lg={12}>
                        <Post post={post} />
                    </Grid>
                ))}
            </ResponsiveDiv>
            )}
    </>
)}
export default MyList;

// 1- check the back end code if its correct to use to save and unsave the post 
// 2- check if the back end code works to fetch the posts that the user liked. 
// 3- check the front end if the post is getting liked 
// 4- check how to fetch the posts of my lists in the my list page. 
// 5- which code i should use to fetch the data. 