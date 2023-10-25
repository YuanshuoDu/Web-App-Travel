import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
    appBar: {
        display: 'flex',
        flexDirection: 'row',
        margin: '30px 0',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
    },
    title: {
        color: 'rgba(0,1,1,1)',
    },
    button: {
        color: 'white',
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
}));