import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
    appBar: {
        display: 'flex',
        flexDirection: 'row',
        //margin: '30px 0',
        justifyContent: 'space-between',
        borderRadius: '30px',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        // backgroundColor: 'transparent', 
        borderRadius: '40px',
        paddingLeft: '20px',
        paddingRight: '20px'
    },
    home: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: '20px',
        paddingRight: '20px',
        height: '65px',
        backgroundColor: '#f5f5f5',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    },
    button: {
        color: 'white',
    },
}));