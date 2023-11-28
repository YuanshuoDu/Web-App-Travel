import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
    body: {
        backgroundColor: 'rgb(209, 204, 204)',
    },
    templateContainer: {
        margin: '5% 0',
    },
    searchInputContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto',
    },
    searchInput: {
        width: '50%',
        padding: '10px',
        outline: 'none',
    },
    templateContainerInner: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto',
    },
    template: {
        backgroundColor: 'white',
        margin: '30px',
        padding: '0px 20px',
    },
    templateImage: {
        height: '250px',
    },
}));