import React, { useEffect } from 'react';
import { Paper, Typography, CircularProgress, Divider, Chip, Card, CardActions, IconButton } from '@material-ui/core/';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useParams, useHistory, Link } from 'react-router-dom';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import { getStory } from '../../redux/actions/stories';
import useStyles from './styles';

const StoryDetail = () => {
  const { story } = useSelector((state) => state.stories);
  const dispatch = useDispatch();
  const classes = useStyles();
  const { id } = useParams();
  var userLikePost = false;

    var handleButtonClick = () => {
        if (userLikePost) {
            userLikePost = false;
        } else {
            userLikePost = true;
        }
    };

  useEffect(() => {
    dispatch(getStory(id));
  }, [id]);


  //if (!story) return null;


  if (!story) {
    return (
      <Paper elevation={6} className={classes.loadingPaper}>
        <CircularProgress size="3em" />
      </Paper>
    );
  }

  function TagList({ tags }) {
    return (
      tags.map((tag, index) => (
        <Chip key={index} className={classes.chip} label={tag} color="default" component="h2" variant="outlined" />
      ))
    );
  }

  return (
    <Card className={classes.storyPaper} elevation={6}>
      <div className={classes.card}>
        <div className={classes.textSection}>

          <Typography variant="h4" component="h2">{story.title}</Typography>
          <div className={classes.creationInfo}>
            <Typography variant="body1">
              Created by: {story.creator}
            </Typography>
            <Typography variant="body2">{moment(story.createdAt).fromNow()}</Typography>
          </div>
          <TagList tags={story.tags} />
          <Typography gutterBottom variant="body1" component="p">{story.message}</Typography>
          <CardActions className={classes.likeButton}>
                    {userLikePost ?
                        (
                            <IconButton size="small" onClick={handleButtonClick}>
                                <FavoriteIcon color="error" />
                            </IconButton>
                        ) :
                        (
                            <IconButton size="small" onClick={handleButtonClick}>
                                <FavoriteBorderOutlinedIcon />
                            </IconButton>
                        )
                    }
                    <Typography variant="body2">{story.likeCount}</Typography>
                </CardActions>
          <Divider style={{ margin: '20px' }} />
        </div>
        <div className={classes.imageSection}>
          <img className={classes.picture} src={story.selectedPicture || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={story.title} />
        </div>

       
      </div>
    </Card>
  );
};

export default StoryDetail;