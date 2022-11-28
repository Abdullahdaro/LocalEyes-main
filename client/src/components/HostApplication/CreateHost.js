import React, { useState } from 'react';
import useStyles from './HostStyles.js';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { createHost } from '../../actions/hosts';

const CreateHost = () => {
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

    const clear = () => {
        setHostData({
        contactName: '',
        businessName: '',
        email: '',
        mailingAddress: '',
        stage: '',
        update:'',
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createHost(hostData));
        clear();
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
    );
}

export default CreateHost;