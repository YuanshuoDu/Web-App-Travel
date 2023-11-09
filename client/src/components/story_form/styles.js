
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    display: 'flex',
    flexDirection: 'row',
    margin: '30px 0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  container: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    borderRadius: 15,
    padding: theme.spacing(5),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  createStory: {
    margin: '20px 10px 20px 10px'
  },
  message: {
    width: '100%',
    margin: '15px 40px 0px 40px',
  },
  tags: {
    padding: '5px 40px 0px 40px', 
    width: '100%'
  },
  fileInput: {
    width: '100%',
    margin: '15px 8px 0px 8px',
  },
  selectFileText: {
    fontSize: '12px', // Adjust the font size as needed
  },
  submitButton: {
    margin: '30px 8px 10px 8px',
    color: 'white',
  },
  cancelButton: {
    margin: '0px 8px 20px 8px',
    color: 'white',
  },
  loadingPaper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '15px',
    height: '60vh',
  },
}));