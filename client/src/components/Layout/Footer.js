import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import localeyeslogo from '../../images/localeyeslogodark.png';
import Instagram from '../../images/Instagram.png';
import Facebook from '../../images/Facebook.png';
import Twitter from '../../images/Twitter.png';
import useStyles from '../../styles.js';

function Footer() {
    const classes = useStyles();

    return (
        <>
            <footer>
                <Box>
                    <Container maxWidth="lg" className={classes.footerBox}>
                        <Grid container spacing={5}>
                            <Grid item xs={4} sm={6}>
                                <img src={localeyeslogo} alt="LocalEyes Logo" width="150rem"></img>
                            </Grid>
                            <Grid item xs={8} sm={6} style={{justiftContent: 'right', textAlign: 'right'}}>
                                <img src={Instagram} alt="Instagram Link" style={{marginRight: '20px',cursor: 'pointer'}}></img>
                                <img src={Facebook} alt="Facebook Link" style={{marginRight: '20px',cursor: 'pointer'}}></img>
                                <img src={Twitter} alt="Twitter Link" style={{marginRight: '20px',cursor: 'pointer'}}></img>
                            </Grid>
                            <Grid item xs={12} sm={12} style={{borderBottom: '3px solid #00A2CA', margin: '0px', padding: '0px'}}></Grid>
                            <Grid item xs={6} sm={6} style={{ fontFamily: 'Red Hat Display', fontWeight: 'bold'}}>© 2021 LocalEyes LLC. All rights reserved.</Grid>
                            <Grid item xs={6} sm={6} style={{ fontFamily: 'Red Hat Display', fontWeight: 'bold', justiftContent: 'right', textAlign: 'right', color: "#110B79", cursor: 'pointer'}}>Contact Us</Grid>
                        </Grid>
                    </Container>
                </Box>
            </footer>
        </>
    );
}

export default Footer; 