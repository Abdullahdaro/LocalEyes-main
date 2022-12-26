import React, { useEffect, useState } from 'react';
import useStyles from '../components/Admin/AdminStyle';
import CreateBusiness from '../components/Form/CreateBusiness'
import AdminCardList from '../components/Admin/AdminCardList'
import { useDispatch } from 'react-redux';
import { getPosts } from '../actions/posts';
import Grid from '@mui/material/Grid';



function Admin () {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    const user = JSON.parse(localStorage.getItem('profile'));   
    const arr = ['quinn.croes@gmail.com', 'tanner.hill@localeyes.guide', 'logan@localeyes.guide', 'joseph@localeyes.guide']

    useEffect(() =>{
        dispatch(getPosts());
    }, [currentId, dispatch]);

    if (user != null){
        if (arr.includes(user.result.email)) {
            return (
                <>
                    <div>
                        <h1 className={classes.h1}>Admin Dashboard</h1>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6} lg={6}>
                                <CreateBusiness currentId={currentId} setCurrentId={setCurrentId}/>
                            </Grid>
                            <Grid item xs={12} md={6} lg={6}>
                                <AdminCardList setCurrentId={setCurrentId}/>
                            </Grid>
                            <Grid item xs={12} md={12} lg={12}>
                            </Grid>
                        </Grid>
                    </div>
                </>
        );}

    }
    return (
        <>
            <h1>404</h1>
        </>
    );
}

export default Admin;