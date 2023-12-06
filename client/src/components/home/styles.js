import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    // appBar: {
    //     display: 'flex',
    //     flexDirection: 'row',
    //     margin: '30px 0',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     borderRadius: 15,
    // },

    button: {
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '10px 0 40px 0px',
    },
    pagination: {
        borderRadius: 4,
        marginTop: '2rem',
        padding: '6px',
    },

    ul: {
        justifyContent: 'space-around',
    },
    root: {
        borderRadius: '40px',
    },
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
    filterFlex: {
        display: 'flex',
        justifyContent: 'center',
        gap: '10px', // Adjust the gap (separation) between buttons
        marginTop: '10px', // Adjust top margin as needed
        color: 'white',
    },

}));