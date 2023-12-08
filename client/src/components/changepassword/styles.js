import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  formContainer: {
    marginTop: theme.spacing(7), // Adjusts the top margin
  },
  form: {
    marginTop: theme.spacing(1), // Adjusts the margin above the form
  },
  submitButton: {
    marginTop: theme.spacing(2), // Margin above the submit button
  },
  cancelButton: {
    marginTop: theme.spacing(2), // Margin above the cancel button
    backgroundColor: theme.palette.grey[500], // Grey color
    "&:hover": {
      backgroundColor: theme.palette.grey[700],
    },
  },
}));
