import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  picture: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
    paddingTop: '70.0%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '20px',
    height: '100%',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  tags: {
    display: 'flex',
    justifyContent: 'start',
    margin: '15px',
  },
  chip: {
    margin: ' 0 5px 0 0',
  },
  title: {
    padding: '0 15px',
  },
  likeButton: {
    padding: '10px 15px 10px 12px',
    display: 'flex',
  },
  link: {
    textDecoration: 'none',
  },
});