import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

  container: {
    marginTop: theme.spacing(2),
    justifyContent: 'center',
  },
  storyItem: {
    margin: theme.spacing(2),
  },
  containerProgress: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '70vh',
  }

}));