import React from 'react';
import useStyles from '../../styles.js';
import HostIcon from '../../images/HostIcon.png'
import TouristIcon from '../../images/TouristIcon.png'
import BusinessIcon from '../../images/BusinessIcon.png'

function FourIconGrid () {
    const classes = useStyles();
    return (
        <>  
            <div className={classes.flexbox}>
                <figure className={classes.figure}>
                    <img src={HostIcon} alt="I'm a Host" className={classes.IconCard}/>
                    <figcaption className={classes.figcaption}>I'm a Host</figcaption>
                </figure>
                <figure className={classes.figure}>
                    <img src={TouristIcon} alt="I'm a Traveler" className={classes.IconCard}/>
                    <figcaption className={classes.figcaption}>I'm a Traveler</figcaption>
                </figure>
                <figure className={classes.figure}>
                    <img src={BusinessIcon} alt="I'm With a Local Business" className={classes.IconCard}/>
                    <figcaption className={classes.figcaption}>I'm With a Local Business</figcaption>
                </figure>
                <figure className={classes.figure}>
                    <img src={HostIcon} alt="I'm With a Hotel" className={classes.IconCard}/>
                    <figcaption className={classes.figcaption}>I'm With a Hotel</figcaption>
                </figure>
            </div>
        </>
    );
}

export default FourIconGrid;