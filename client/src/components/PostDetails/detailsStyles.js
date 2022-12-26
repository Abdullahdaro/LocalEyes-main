// import { faRepeat } from '@fortawesome/free-solid-svg-icons';
import { faRepeat } from '@fortawesome/free-solid-svg-icons';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    main: {
        margin: '0 auto',
    },

    imgContainer: {
        margin: 'auto',
        position: 'relative',        
        overflowX: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        maxWidth: '100%',
    },

    img1: {
        display: 'flex',

    },

    img2: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },

    img3: {
        display: 'none',
        [theme.breakpoints.up('lg')]: {
            display: 'flex',
        },
    },


    imgText: {
        position: 'absolute',
        width: '100%',
        color: 'white',
        fontFamily: 'Red Hat Display',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '24px',
        left: '6%',
        bottom: '0%',
        [theme.breakpoints.up('md')]: {
            fontSize: '40px',

        },
    },
    
    backBtn : {
        position: 'absolute',
        top: '5%',
        left: '5%',
        fontFamily: 'Red Hat Display',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '16px',
        color: '#01A0C6',
        backgroundColor: '#FFFFFF',
        borderRadius: '5px',
        padding: '8px 25px',
        transition: '0.3s',
        cursor: 'pointer',
        '&:hover': {
            filter: 'brightness(0.9)',},
        [theme.breakpoints.up('md')]: {
            fontSize: '13px',
            fontWeight: '500',
            color: '#110B79',
            backgroundColor: '#F5F5F7',
        },
    },

    businessInfo: {
        margin: 'auto',
        padding: '0px 15px',
        fontFamily: 'Red Hat Display',
        fontSize: '20px',
        maxWidth: '72rem',
        [theme.breakpoints.up('md')]: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: '100px 150px',
        },
    },

    businessHead: {
        margin: '20px 0px',
        textAlign: 'center',
        justifyContent: 'center',
        gridColumn: '1/ span 1',
    },

    description: {
        margin: '0px',
        fontFamily: 'Red Hat Display',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '20px',
        lineHeight: '53px',
        [theme.breakpoints.up('md')]: {
            fontSize: '40px',
        },
    },

    rating: {
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
    },
    
    btnContainer: {
        textAlign: 'center',
        justifyContent: 'center',
        gridColumn: '1/ span 1',
        gridRow: '2 / span 1',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',  

        [theme.breakpoints.down('md')]: {
            padding: '0px 15px',
        },
    },

    addBtn: {
        gridColumn: '1 / 3',
        padding: '5px',
        borderRadius: '10px',
        margin: '8px 10px 5px 0px',
        fontFamily: 'Red Hat Display',
        fontSize: '20px',
        color: 'white',
        backgroundColor: '#00A2CA',
        "&:hover": {    
            text: "add to mylist",
            color: '#00A2CA',
            backgroundColor: 'white',
            cursor: "pointer"
        },
        "&:active": {    
            color: '#00A2CA',
            backgroundColor: 'white',
        },
        "&:focus": {    
            color: '#00A2CA',
            backgroundColor: 'white',
        },
    },

    businessParagraph: {
        padding: '0px 0px 15px 20px',
        margin: '0px',
        marginLeft: '10px',
        gridRow: '2 / span 1',
    },

    localBusinesses: {
        margin: 'auto',
        justifyContent: 'center',
        maxWidth: '72rem',
    },

    localHeading: {
        fontFamily: 'Red Hat Display',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '24px',
        lineHeight: '53px',
        textAlign: 'center',
        [theme.breakpoints.up('md')]: {
            fontSize: '40px',
        },
    }
}));