import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  loadingPaper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '15px',
    height: '60vh',
  },
  optionsButton: {
    position: 'absolute', 
    top: '40px', 
    right: '20px' 
  },
  
  card: {
    display: 'flex',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
  },
  storyPaper: {
    padding: '20px',
    margin: '20px 0 0 0',
    borderRadius: '20px'
  },
  textSection: {
    flex: 1,
    borderRadius: '20px',
    margin: '10px',
  },
  creationInfo: {
    margin: '7px 0px 7px 0px',
  },
  chip: {
    margin: '15px 5px 10px 0',
  },
  likeButton: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  
  imageSection: {
    marginLeft: '20px',
    marginRight: '20px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginRight: 0,
    },

  },
  picture: {
    objectFit: 'cover',
    width: '100%',
    borderRadius: '15px',
    maxHeight: '400px',
  },

}));