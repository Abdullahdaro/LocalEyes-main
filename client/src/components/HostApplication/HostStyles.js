import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme) => ({
    heading: {
        fontFamily: 'Red Hat Display',
        fontSize: '30px',
        fontWeight: 'bold',
    },
    formCard: {
        borderRadius: '15px',
        padding: '2em'
    },
    submitButton: {
        fontFamily: 'Red Hat Display',
        fontSize: '30px',
        fontWeight: 'bold',
        background: '#00A2CA',
        border: 'none',
        borderRadius: '15px',
        minWidth: '100%',
        color: '#FFFFFF',
        padding: '0.25em',
        gridColumn: 'span 4',
        cursor: 'pointer',
        marginTop: '1%',

        "&:hover": {
            background: '#036982',
        }
    },
}));