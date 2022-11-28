import React from 'react';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import Post from './BusinessCard';

const BusinessCardList = () => {
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
    const { posts } = useSelector((state) => state.posts);

    return (
        !posts?.length ? 
        <div style={{textAlign: 'center'}}>
          <CircularProgress />   
        </div>
        : (
            <ResponsiveDiv>
                {posts.map((post) => (
                    <Grid key={post._id} item xs={12} sm={12} lg={12}>
                        <Post post={post} />
                    </Grid>
                ))}
            </ResponsiveDiv>
        )
    );
}

export default React.memo(BusinessCardList);