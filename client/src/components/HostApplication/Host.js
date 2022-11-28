import React from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { useDispatch } from 'react-redux';
import { GiTrashCan, GiPencil } from 'react-icons/gi';
import { deleteHost } from '../../actions/hosts.js'
import useStyles from '../Admin/AdminStyle.js';

const Host = ({ host, setCurrentIdHost }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    
    const ResponsiveDiv = styled('div')(({ theme }) => ({
        backgroundColor: '#f2fafc',
        borderRadius: '10px',
        border: '1px solid rgba(1, 160, 198, 1)',
        margin: 'auto',
        marginBottom: '1vh',
        [theme.breakpoints.down('md')]: {
            width: '90%',
        },
        [theme.breakpoints.up('md')]: {
            width: '90%',
        },
        [theme.breakpoints.up('lg')]: {
            width: '90%',
        },
    }));    
    const CardTitle = styled('h1')(({ theme }) => ({
        fontFamily: 'Red Hat Display',
        textDecoration: "none",
        fontWeight: 'Bold',
        margin: '0px',
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
    const SubText = styled('p')(({ theme }) => ({
        fontFamily: 'Red Hat Display',
        textDecoration: "none",
        margin: '0px',
        padding: '0px',
        color: 'rgba(127, 128, 134, 1)',
        overflow: 'hidden',
        textOverflow: 'elipses',
        maxHeight: '150px',
        [theme.breakpoints.down('md')]: {
            fontSize: "14px",
        },
        [theme.breakpoints.up('md')]: {
            fontSize: "20px",
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: "26px",
        },
    }));


    return (
        <ResponsiveDiv>
            <Grid container>
                <Grid item xs={5} md={5} lg={5}>
                    <CardTitle>{host.contactName}</CardTitle>
                    <SubText>{host.businessName}</SubText>
                    <SubText>{host.email}</SubText>
                    <SubText>{host.mailingAddress}</SubText>
                </Grid>
                <Grid item xs={2} md={2} lg={2}  sx={{textAlign: 'center'}}>
                    <GiTrashCan className={classes.icon} onClick={() => dispatch(deleteHost(host._id))}/>
                    <br></br>
                    <GiPencil className={classes.icon} onClick={() => setCurrentIdHost(host._id)}/>
                </Grid>
                <Grid item xs={5} md={5} lg={5}>
                    <SubText>test</SubText>
                    <SubText>test</SubText>
                </Grid>
            </Grid>
        </ResponsiveDiv>
    )
}

export default Host;