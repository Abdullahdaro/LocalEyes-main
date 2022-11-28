import { makeStyles } from '@material-ui/core/styles';
  
export default makeStyles((theme) => ({
    card: {
        background: 'radial-gradient(circle, rgba(1,160,198,0.04525560224089631) 76%, rgba(245,245,247,0.8855917366946778) 100%);',
        width: '50%',
        maxHeight: '200px',
        margin: 'auto',
        padding: '1em',
        border: '0.5px solid #01A0C6',
        borderRadius: '10px',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridTemplateRows: 'repeat(4, 1fr)'
    },
    cardTitle: {
        fontFamily: 'Red Hat Display',
        fontSize: '36px',
        fontWeight: 'bold',
        gridColumn: 'span 3',
        padding: '0px',
        margin: '0.25em'
    },
    cardDescription: {
        fontFamily: 'Red Hat Display',
        fontSize: '24px',
        gridColumn: 'span 3',
        color: '#7F8086',
        padding: '0px',
        margin: '0.25em'
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'space-between',
      },
    h1: {
        fontFamily: 'Red Hat Display',
        textDecoration: "none",
        fontSize: "22px",
        fontWeight: 'Bold',
        margin: '0px',
        border: '1px solid black',
        padding: '0px'
    },
    descriptionText: {
        fontFamily: 'Red Hat Display',
        textDecoration: "none",
        fontSize: "15px",
    },
    ul: {
        justifyContent: 'space-around'
    }
}));