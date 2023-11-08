import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
    appBar: {
        display: 'flex',
        flexDirection: 'row',
        margin: '30px 0',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: '30px',
    },

    button: {
        color: 'white',
    },

}));