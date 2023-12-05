// settingsStyle.js
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  accountsettings: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
  },
  mainhead1: {
    padding: '10px 20px',
    [theme.breakpoints.down('800px')]: {
      fontSize: '20px',
    },
  },
  form: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    padding: '10px 20px',
    [theme.breakpoints.down('800px')]: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    width: '45%',
    margin: '10px',
    [theme.breakpoints.down('800px')]: {
      width: '97%',
    },
  },
  label: {
    fontSize: '1.2rem',
    fontWeight: 300,
    marginBottom: '5px',
    [theme.breakpoints.down('800px')]: {
      fontSize: '16px',
    },
  },
  input: {
    padding: '10px 20px',
    border: '1px solid rgb(207, 207, 207)',
    borderRadius: '5px',
    outline: 'none',
    '&:focus': {
      border: `1px solid ${theme.palette.primary.main}`, // Using theme color
    },
  },
  mainbutton1: {
    // Define styles for mainbutton1 here if needed
  },
}));


