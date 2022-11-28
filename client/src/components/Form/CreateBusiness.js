import React, { useState, useEffect } from 'react';
import useStyles from './formStyles.js';
import TextField from '@mui/material/TextField';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';



const CreateBusiness = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({
        title: '',
        label: '',
        address: '',
        description: '',
        primaryPhoto: '',
        secondaryPhoto: '',
        thirdPhoto: '',
        fourthPhoto: '',
        fifthPhoto: '',
        sixthPhoto: '',
        seventhPhoto: '',
        locationLongitude: '',
        locationLatitude:'',
        phoneNumber: '',
        website: '',
        instagramLink: '',
        discountCode: '',
        reviewLink: '',
        rating: '',
        tags: '',
        active: '',
        customURL: '',
    });
    const classes = useStyles();
    const post = useSelector((state) => currentId ? state.posts.posts.find((p) => p._id === currentId) : null);
    const dispatch = useDispatch();
    
    useEffect(() => {
        if(post) setPostData(post)
    }, [post])

    const handleSubmit = (e) => {
        e.preventDefault();

        if(currentId) {
            dispatch(updatePost(currentId,postData));
        } 
        else {
            dispatch(createPost(postData));
            
        }
        clear();
    }

    const clear = () => {
        setCurrentId(null);
        setPostData({        
        title: '',
        label: '',
        address: '',
        description: '',
        primaryPhoto: '',
        secondaryPhoto: '',
        thirdPhoto: '',
        fourthPhoto: '',
        fifthPhoto: '',
        sixthPhoto: '',
        seventhPhoto: '',
        locationLongitude: '',
        locationLatitude:'',
        phoneNumber: '',
        website: '',
        instagramLink: '',
        discountCode: '',
        reviewLink: '',
        rating: '',
        tags: '',
        active: '',
        customURL: ''
    });
    }
    return (
        <>
            <form className={classes.formCard} onSubmit={handleSubmit}>
                <Grid container columnSpacing={0.5} rowSpacing={0.25}>
                    <Grid item xs={12} md={12} lg={12}>
                        <h1 className={classes.heading}>{currentId ? 'Editing' : 'Add New'} Business</h1>
                    </Grid>
                    <Grid item xs={9} md={9} lg={9}>
                        <TextField required fullWidth margin="normal" label="Business Name" name="Business Name" variant="outlined" value={postData.title || ''} onChange={(e) => setPostData({ ...postData, title: e.target.value})}/>
                    </Grid>
                    <Grid item xs={3} md={3} lg={3}>
                        <TextField required fullWidth margin="normal" label="Label" name="Label" variant="outlined" value={postData.label || ''} onChange={(e) => setPostData({ ...postData, label: e.target.value})}/>
                    </Grid>
                    <Grid item xs={9} md={9} lg={9}>
                        <TextField required fullWidth margin="normal" label="Address, City, State and Zip" name="Address" variant="outlined" value={postData.address || ''} onChange={(e) => setPostData({ ...postData, address: e.target.value})}/>
                    </Grid>
                    <Grid item xs={3} md={3} lg={3}>
                        <TextField required fullWidth margin="normal" label="Custom URL (Do not include any spaces)" name="customURL" variant="outlined" value={postData.customURL || ''} onChange={(e) => setPostData({ ...postData, customURL: e.target.value})}/>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                        <TextField required fullWidth multiline maxRows={3} minRows={3} margin="normal" label="Description" name="description" variant="outlined" value={postData.description || ''} onChange={(e) => setPostData({ ...postData, description: e.target.value})}/>
                    </Grid>
                    <Grid item xs={6} md={6} lg={6}>
                        <TextField fullWidth margin="normal" label="Location Longitude" name="Location Longitude" variant="outlined" value={postData.locationLongitude || ''} onChange={(e) => setPostData({ ...postData, locationLongitude: e.target.value})}/>
                    </Grid>
                    <Grid item xs={6} md={6} lg={6}>
                        <TextField fullWidth margin="normal" label="Location Latitude" name="Location Latitude" variant="outlined" value={postData.locationLatitude || ''} onChange={(e) => setPostData({ ...postData, locationLatitude: e.target.value})}/>
                    </Grid>
                    <Grid item xs={3} md={3} lg={3}>
                        <TextField fullWidth margin="normal" label="Phone Number" name="Phone Number" variant="outlined" value={postData.phoneNumber || ''} onChange={(e) => setPostData({ ...postData, phoneNumber: e.target.value})}/>
                    </Grid>
                    <Grid item xs={3} md={3} lg={3}>
                        <TextField fullWidth margin="normal" label="Website URL" name="Website URL" variant="outlined" value={postData.website || ''} onChange={(e) => setPostData({ ...postData, website: e.target.value})}/>
                    </Grid>
                    <Grid item xs={3} md={3} lg={3}>
                        <TextField fullWidth margin="normal" label="Instagram URL" name="Instagram URL" variant="outlined" value={postData.instagramLink || ''} onChange={(e) => setPostData({ ...postData, instagramLink: e.target.value})}/>
                    </Grid>
                    <Grid item xs={3} md={3} lg={3}>
                        <TextField fullWidth margin="normal" label="Review Link" name="Review Link" variant="outlined" value={postData.reviewLink || ''} onChange={(e) => setPostData({ ...postData, reviewLink: e.target.value})}/>
                    </Grid>
                    <Grid item xs={3} md={3} lg={3}>
                        <TextField fullWidth margin="normal" label="Discount Code" name="Discount Code" variant="outlined" value={postData.discountCode || ''} onChange={(e) => setPostData({ ...postData, discountCode: e.target.value})}/>
                    </Grid>
                    <Grid item xs={3} md={3} lg={3}>
                        <TextField required fullWidth margin="normal" label="Rating" name="Rating" variant="outlined" value={postData.rating || ''} onChange={(e) => setPostData({ ...postData, rating: e.target.value})}/>
                    </Grid>
                    <Grid item xs={3} md={3} lg={3}>
                        <TextField required fullWidth margin="normal" label="Tags" name="Tags" variant="outlined" value={postData.tags || ''} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}/>
                    </Grid>
                    <Grid item xs={3} md={3} lg={3}>
                        <FormControlLabel control={<Checkbox defaultChecked value={postData.active || ''} onChange={(e) => setPostData({ ...postData, active:e.target.value})}/>} label="Active" />
                    </Grid>
                    <Grid item xs={3} md={3} lg={3}>
                        <FileBase
                            type="file"
                            multiple={false} 
                            onDone={({base64}) => setPostData({...postData, primaryPhoto: base64})}
                        />
                    </Grid>
                    <Grid item xs={3} md={3} lg={3}>
                        <FileBase
                            type="file"
                            multiple={false} 
                            onDone={({base64}) => setPostData({...postData, secondaryPhoto: base64})}
                        />
                    </Grid>
                    <Grid item xs={3} md={3} lg={3}>
                        <FileBase
                            type="file"
                            multiple={false} 
                            onDone={({base64}) => setPostData({...postData, thirdPhoto: base64})}
                        />
                    </Grid>
                    <Grid item xs={3} md={3} lg={3}>
                        <FileBase
                            type="file"
                            multiple={false} 
                            onDone={({base64}) => setPostData({...postData, fourthPhoto: base64})}
                        />
                    </Grid>
                    <Grid item xs={3} md={3} lg={3}>
                        <FileBase
                            type="file"
                            multiple={false} 
                            onDone={({base64}) => setPostData({...postData, fifthPhoto: base64})}
                        />
                    </Grid>
                    <Grid item xs={3} md={3} lg={3}>
                        <FileBase
                            type="file"
                            multiple={false} 
                            onDone={({base64}) => setPostData({...postData, sixthPhoto: base64})}
                        />
                    </Grid>
                    <Grid item xs={3} md={3} lg={3}>
                        <FileBase
                            type="file"
                            multiple={false} 
                            onDone={({base64}) => setPostData({...postData, seventhPhoto: base64})}
                        />
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                        <button type="submit" className={classes.submitButton} >Enter</button> 
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                        <button onClick={clear} className={classes.submitButton} >Clear Form</button>  
                    </Grid>
                </Grid>

            </form>
        </>  
    );
} 

export default CreateBusiness;