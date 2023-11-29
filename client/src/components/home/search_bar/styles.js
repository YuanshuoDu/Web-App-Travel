import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    /*body: {
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
    },*/
    searchContainer: {
        display: 'flex',
        alignItems: 'center',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: '#fff',
        padding: theme.spacing(1),
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(2),
        borderRadius: '30px',

    },
    searchInput: {
        flex: 1,
        '& .MuiInput-underline:before': {
            borderBottom: 'none', // Remove the underline
        },
        '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
            borderBottom: 'none', // Remove the underline when hovering
        },



    },
}));