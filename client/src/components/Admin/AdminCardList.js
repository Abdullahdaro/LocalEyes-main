import React from 'react';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import Post from './AdminCard';

const AdminCardList = ({ setCurrentId }) => {
    const ResponsiveDiv = styled('div')(({ theme }) => ({
        margin: 'auto',
        [theme.breakpoints.down('md')]: {
            width: '100%'
        },
        [theme.breakpoints.up('md')]: {
            width: '100%'
        },
        [theme.breakpoints.up('lg')]: {
            width: '100%'
        },
    }));
    const {posts} = useSelector((state) => state.posts);

    return (
        !posts?.length ? <CircularProgress /> : (
            <ResponsiveDiv>
                {posts.map((post) => (
                    <Grid key = {post._id} item xs={12} sm={12} lg={12}>
                        <Post post={post} setCurrentId={setCurrentId}/>
                    </Grid>
                ))}
            </ResponsiveDiv>
        )
    );
}

export default AdminCardList;