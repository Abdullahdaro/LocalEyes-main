import React from 'react';
import Rating from '@mui/material/Rating';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { GiTrashCan, GiPencil } from 'react-icons/gi';
import useStyles from './AdminStyle';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../actions/posts';


const AdminCard = ({ post, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const ResponsiveDiv = styled('div')(({ theme }) => ({
        backgroundColor: '#f2fafc',
        padding: '0.5%',
        borderRadius: '10px',
        border: '1px solid rgba(1, 160, 198, 1)',
        margin: 'auto',
        position: 'relative',
        marginTop: '1%',
        overflow: 'hidden',
        [theme.breakpoints.down('md')]: {
            width: '90%'
        },
        [theme.breakpoints.up('md')]: {
            width: '90%'
        },
        [theme.breakpoints.up('lg')]: {
            width: '90%',
        },
    }));
    const CardTitle = styled('h1')(({ theme }) => ({
        fontFamily: 'Red Hat Display',
        textDecoration: "none",
        fontWeight: 'Bold',
        margin: '0em',
        marginTop: '0.25em',
        padding: '0px',
        [theme.breakpoints.down('md')]: {
            fontSize: "24px",
        },
        [theme.breakpoints.up('md')]: {
            fontSize: "30px",
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: "36px",
        },
    }));
    return (
        <>
            <ResponsiveDiv>
                <Grid container>
                    <Grid item xs={6} md={6} lg={6}>
                        <Rating name="rating" defaultValue={post.rating} precision={0.5} size="medium" readOnly/>
                        <CardTitle>{post.title}</CardTitle>
                        <p>{post.description}</p>
                    </Grid>
                    <Grid item xs={3} md={3} lg={3} sx={{textAlign: 'right'}}>
                        <GiTrashCan className={classes.icon} onClick={() => dispatch(deletePost(post._id))}/>
                        <br></br>
                        <GiPencil className={classes.icon} onClick={() => setCurrentId(post._id)}/>
                    </Grid>
                    <Grid item xs={3} md={3} lg={3} style={{height: '160px'}}>
                        <img src={post.primaryPhoto} alt='Business Thumbnail' style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '15px'}}></img>
                    </Grid>
                </Grid>
            </ResponsiveDiv>
        </>
    );
}

export default AdminCard;