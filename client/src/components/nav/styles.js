import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
    appBar: {
        display: 'flex',
        flexDirection: 'row',
        margin: '30px 0',
        justifyContent: 'center',
        alignItems: 'center',

        borderRadius: '30px',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        // backgroundColor: 'transparent', 
        borderRadius: '40px',
        padding: '20px'
    },

    button: {
        color: 'white',
    },

}));