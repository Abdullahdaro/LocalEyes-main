import React, { useEffect, useState } from 'react';
import useStyles from './HostStyles';
import { useDispatch } from 'react-redux';
import { getHosts } from '../../actions/hosts.js';
import HostList from './HostList.js';
import Grid from '@mui/material/Grid';
import EditHost from './EditHost.js';

function EditAndHostList () {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [currentIdHost, setCurrentIdHost] = useState(null);

    useEffect(() =>{
        dispatch(getHosts());
    }, [currentIdHost, dispatch])

    return (
        <>
        <Grid container>
            <Grid item xs={6} md={6} lg={6}>
                <EditHost currentIdHost={currentIdHost} setCurrentIdHost={setCurrentIdHost}/>
            </Grid>
            <Grid item xs={6} md={6} lg={6}>
                <HostList setCurrentIdHost={setCurrentIdHost}/>
            </Grid>
        </Grid>
        </>
    )
}

export default EditAndHostList;