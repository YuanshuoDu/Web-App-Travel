import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

  container: {
    marginTop: theme.spacing(2),
    justifyContent: 'center',
  },

  containerProgress: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '30vh',
  },
  storyItem: {
    margin: theme.spacing(3),
  },

}));