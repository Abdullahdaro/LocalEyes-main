import { makeStyles } from '@material-ui/core/styles';
  
export default makeStyles((theme) => ({
    formCard: {
        background: '#F5F5F5',
        borderRadius: '15px',
        padding: '0em 2em 2em 2em'
    },
    heading: {
        fontFamily: 'Red Hat Display',
        fontSize: '30px',
        fontWeight: 'bold',
    },
    subHeading: {
        fontFamily: 'Red Hat Display',
        fontSize: '20px',
        fontWeight: 'bold',
        marginTop: '0.5em',
        marginBottom: '0.1em'
    },
    defaultBorder: {
        border: '1px solid #00A2CA',
        borderRadius: '5px',
        padding: '5px',
        width: '80%',
        outline: 'none'
    },
    submitButton: {
        fontFamily: 'Red Hat Display',
        fontSize: '30px',
        fontWeight: 'bold',
        background: '#00A2CA',
        border: 'none',
        borderRadius: '15px',
        width: '100%',
        color: '#FFFFFF',
        padding: '0.25em',
        gridColumn: 'span 4',
        cursor: 'pointer',
        marginTop: '1%',

        "&:hover": {
            background: '#036982',
        }
    },
    span4: {
        gridColumn: 'span 4'
    },
    span2: {
        gridColumn: 'span 2'
    },
    searchBox: {
        width: '100%',
        margin: 'auto',
        borderRadius: '15px',
        padding: '5px',
        display: 'flex',
        marginBottom: '2%',
        background: '#F5F5F7'
    },
    searchField: {
        border: 'none',
        outline: 'none',
        fontFamily: 'Red Hat Display',
        fontSize: '24px',
        width: '100%',
        color: '#7F8086',
        background: '#F5F5F7'
    },
    filterBox: {
        width: '100%',
        marginLeft: 'auto', 
        marginRight: 'auto', 
        borderRadius: '15px',
        padding: '5px',
        display: 'flex',
        background: '#F5F5F7',
        cursor: 'pointer',
        marginTop: '2%',
        marginBottom: '2%'
    },
    filterText: {
        fontFamily: 'Red Hat Display',
        fontSize: '28px',
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'center',
    },
    filterField: {
        width: '100%',
        alignContent: 'center'
    },
    searchIcons: {
        width: '75px',
        float: 'left',
        margin: '0.5em',
    },
    filterIcons: {
        width: '50px',
        float: 'left',
        margin: '0.5em 0.5em 0.5em 1.5em'
    },
    bottomLine: {
        width: '90%',
        margin: 'auto',
        marginTop: '0px',
        borderBottom: '5px solid #00A2CA'
    },
    searchBoxText: {
        ml: 1,
        p: '10px',
        flex: 1,
        width: '100%',
        backgroundColor:'#f5f5f7',
        borderRadius: '5px',
        fontSize: {sm: 16, md: 34, lg: 40, xl: 60},
    }
}));