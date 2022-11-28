import React from 'react';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import Host from './Host.js';

const HostList = ({ setCurrentIdHost }) => {
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
    const hosts = useSelector((state) => state.hosts);
    console.log(hosts);

    return (
        !hosts.length ? <CircularProgress /> : (
            <ResponsiveDiv>
                {hosts.map((host) => (
                    <Grid key = {host._id} item xs={12} sm={12} lg={12}>
                        <Host host={host} setCurrentIdHost={setCurrentIdHost}/>
                    </Grid>
                ))}
            </ResponsiveDiv>
        )
    );
}

export default HostList