import React, { useState, useEffect } from 'react';
import useStyles from './HostStyles.js';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { createHost, updateHost } from '../../actions/hosts.js';
import { useSelector } from 'react-redux';

const EditHost = ({ currentIdHost, setCurrentIdHost }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [hostData, setHostData] = useState({
        contactName: '',
        businessName: '',
        email: '',
        mailingAddress: '',
        stage: '',
        update:'',       
    });
    
    const host = useSelector((state) => currentIdHost ? state.hosts.find((p) => p._id === currentIdHost) : null);

    useEffect(() => {
        if(host) setHostData(host)
    }, [host])

    const handleSubmit = (e) => {
        e.preventDefault();

        if(currentIdHost) {
            dispatch(updateHost(currentIdHost, hostData));
        }
        else {
            dispatch(createHost(hostData));
        }
        clear();
    }

    const clear = () => {
        setCurrentIdHost(null);
        setHostData({
        contactName: '',
        businessName: '',
        email: '',
        mailingAddress: '',
        stage: '',
        update:'',   
        });
    }

    return (
        <>
            <form className={classes.formCard} onSubmit={handleSubmit}>
                <TextField sx={{ width: 1}} required margin="normal" label="Contact Name" name="contactName" variant="outlined" value={hostData.contactName || ''} onChange={(e) => setHostData({ ...hostData, contactName: e.target.value})}></TextField>
                <TextField sx={{ width: 1}} required margin="normal" label="Business Name" name="businessName" variant="outlined" value={hostData.businessName || ''} onChange={(e) => setHostData({ ...hostData, businessName: e.target.value})}></TextField>
                <TextField sx={{ width: 1}} required margin="normal" label="Email" name="email" variant="outlined" value={hostData.email || ''} onChange={(e) => setHostData({ ...hostData, email: e.target.value})}></TextField>
                <TextField sx={{ width: 1}} required margin="normal" label="Mailing Address" name="mailingAddress" variant="outlined" value={hostData.mailingAddress || ''} onChange={(e) => setHostData({ ...hostData, mailingAddress: e.target.value})}></TextField> 
                <button type="submit" className={classes.submitButton}>Submit</button>        
            </form>
        </>
    )
}

export default EditHost;