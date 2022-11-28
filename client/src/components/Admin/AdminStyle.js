import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    h1: {
        fontFamily: 'Red Hat Display',
        textDecoration: "none",
        fontSize: "22px",
        fontWeight: 'Bold',
    },
    icon: {
        padding: '10px',
        fontSize: '45px', 
        cursor: 'pointer', 
        color: 'rgba(1, 160, 198, 1)',

        "&:hover": {
            color: '#036982',
        }
    },
    overlay: {
        position: 'absolute',
        height: '97%',
        width: 'auto',
        top: '1%',
        left: '45%',
        overflow: 'hidden'
    }
}))