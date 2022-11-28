import { makeStyles } from '@material-ui/core/styles';
  
export default makeStyles((theme) => ({
    '@global': {
        '*::-webkit-scrollbar': {
          width: '0.75rem',
          borderRadius: '15px'
        },
        '*::-webkit-scrollbar-track': {
          '-webkit-box-shadow': '#00FFFFFF'
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(1, 160, 198, 1)',
          borderRadius: '25px'
        },
        '*::-webkit-scrollbar-thumb:hover': {
            background: '#10bfeb',
          }
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(2),
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(4, 0, 2),
    },
    googleButton: {
        marginBottom: theme.spacing(2),
    },
    root: {
        flexGrow: 1 
    },
    customizeToolbar: {
        minHeight: 100,
        marginRight: theme.spacing(2)
    },
    link: {
        fontFamily: 'Red Hat Display',
        textDecoration: "none",
        color: "#000000",
        fontSize: "15px",
        fontWeight: 'Bold',
        marginLeft: theme.spacing(5),
        marginRight: theme.spacing(5),
        padding: '5px',
        "&:hover": {    
            color: "#01A0C6",
        },
        "&:active": {
            color: "#01A0C6",
        }
    },
    button: {
        fontFamily: 'Red Hat Display',
        textDecoration: "none",
        color: "#000000",
        fontSize: "20px",
        fontWeight: 'Bold',
        marginLeft: theme.spacing(5),
        marginRight: theme.spacing(5),
        padding: '10px',
        "&:hover": {    
            color: "#01A0C6",
        },
        "&:active": {
            color: "#01A0C6",
        }
    },
    buttonNavbar: {
        fontFamily: 'Red Hat Display',
        textDecoration: "none",
        color: "#000000",
        fontSize: "20px",
        fontWeight: 'Bold',
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        padding: '10px',
        "&:hover": {    
            color: "#01A0C6",
        },
        "&:active": {
            color: "#01A0C6",
        }
    },
    menuIcon: {
        marginLeft: theme.spacing(2),
        fontSize: '40px'
    },
    logo: {
        marginLeft: '14%',
        maxWidth: 288,
        flexGrow: 1
    },
    logoMobile: {
        marginLeft: theme.spacing(2),
        maxWidth: 150,
        flexGrow: 1
    },
    navbarButtons: {
        marginLeft: "auto",
        width: 'fit-content',
        blockSize: 'fit-content',
        display: 'flex',
        /* flexWrap: 'warp' */
    },
    img: {
        height: 'auto',
        objectFit: "none"
    },
    container: {
        position: 'relative',
        width: '100%',
        overflowX: 'hidden'
    },
    discoverButton: {
        fontFamily: 'Red Hat Display',
        textDecoration: "none",
        position: 'absolute',
        top: '60%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        '-ms-transform': 'translate(-50%, -50%)',
        color: "#00A2CA",
        padding: '10px',
        width: '40%',
        height: '7%',
        fontSize: '2vw',
        fontWeight: 'bold',
        border: 'none',
        backgroundColor: '#FFFFFF',
        borderRadius: '5px',
        cursor: 'pointer'
    },
    discoverButtonMobile: {
        fontFamily: 'Red Hat Display',
        textDecoration: "none",
        position: 'absolute',
        top: '60%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        '-ms-transform': 'translate(-50%, -50%)',
        color: "#00A2CA",
        padding: '10px',
        width: '80%',
        height: '7%',
        fontSize: '4vw',
        fontWeight: 'bold',
        border: 'none',
        backgroundColor: '#FFFFFF',
        borderRadius: '5px',
        cursor: 'pointer'
    },
    flexbox: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '5%',
        marginBottom: '5%',
    },
    figure: {
        width: '20rem',
        height: '15rem',
        padding: '10px',
        borderRadius: '25px',
        margin: '1% 1%',
        cursor: 'pointer',
        backgroundColor: '#F5F5F7',
        figure: "inline-block"
    },
    figcaption: {
        fontFamily: 'Red Hat Display',
        textAlign: 'center',
        padding: '5px',
        fontSize: '24px',
        fontWeight: 'bold'
    },
    resizeFigure: {
        width: '40%',
        height: '15rem',
        padding: '50px',
        margin: '1% 1%',
        figure: "inline-block"
    },
    IconCard: {
        height: '200px',
        maxHeight: '200px',
        display: 'block',
        margin: 'auto'
    },
    videoPlayerBox: {
        position: 'relative',
        paddingTop: '56.25%',
        width: '90%',
        margin: 'auto'
    },
    videoPlayer: {
        position: 'absolute',
        top: '0px',
        left: '0px',
        width: '100%',
        height: '100%',
    },
    headingStyled: {
        paddingTop: '0px',
        marginLeft: '12%',
        fontFamily: 'Red Hat Display',
        fontSize: '64px',
        fontWeight: 'bold'
    },
    paragraphText: {
        fontFamily: 'Red Hat Display',
        fontSize: '32px',
        fontWeight: 400,
        lineHeight: '42px',
        width: '75%',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    footerBox: {
        marginTop: '100px'
    },
    centerText: {
        fontFamily: 'Red Hat Display',
        textDecoration: "none",
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        '-ms-transform': 'translate(-50%, -50%)',
        color: "#FFFFFF",
        padding: '10px',
        height: '7%',
        fontSize: '7vw',
        fontWeight: 'bold',
        border: 'none',
        textShadow: '2px 2px 8px #000000'
    },
    customerFlexbox: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '5% 20%',
    },
    border1: {
        width: '50%',
        marginBottom: '4em'
    },
    customerIcon: {
        fontSize: 200,
        color: '#00A2CA',
        width: "40%"
    },
    formText: {
        boxSizing: 'border-box',
        width: '100%',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #01A0C6',
        background: '#F5F5F7',
        marginBottom: '2%',
    },
    loginCard: {
        background: 'radial-gradient(circle, rgba(7,38,121,1) 0%, rgba(1,160,198,1) 100%)',
        borderRadius: '15px',
        margin: 'auto',
        width: '40%',
        padding: '1em',
        marginTop: '3em',
        justifyContent: 'center',
        alignItems: 'center',
    },
    adminGrid: {
        width: '95vw',
        margin: 'auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
    },
    editGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridColumn: 'span 2',
        background: '#F5F5F5',
        borderRadius: '15px',
        padding: '0em 2em 2em 2em',
        marginBottom: '2em'
    },
    headingText: {
        fontFamily: 'Red Hat Display',
        fontSize: '48px',
        textAlign: 'center',
        marginTop: '5rem',
        fontWeight: 'bold'
    },
    pText: {
        fontFamily: 'Red Hat Display',
        fontSize: '24px'
    },
    reviewCard: {
        backgroundColor: 'rgba(1, 160, 198, 0.05)',
        borderRadius: '15px',
        paddingTop: '5%',
        paddingBottom: '5%',
    },
    reviewText: {
        fontFamily: 'Red Hat Display',
        fontSize: '24px',
        width: '70%',
        margin: 'auto',
        textAlign: 'center',
    },
    reviewHeading: {
        fontFamily: 'Red Hat Display',
        fontSize: '30px',
        fontWeight: 'bold',
        margin: 'auto',
        textAlign: 'center',
        marginTop: '5%'
    },
    submitButton: {
        backgroundColor: 'rgba(1, 160, 198, 1)',
        color: 'rgba(255, 255, 255, 1)',
        borderRadius: '15px',
        width: '100%',
        border: 'none',
        minHeight: '3.5rem',
        fontSize: '24px',
        marginTop: '1%',
        margin: 'auto',
    }
}));