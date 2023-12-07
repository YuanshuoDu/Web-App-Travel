import React, { useEffect, useState } from 'react';
import { Paper, Typography, CircularProgress, Divider, Chip, Card, CardActions, IconButton, Container } from '@material-ui/core/';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import { useParams} from 'react-router-dom';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import { getStory, deleteStory } from '../../redux/actions/stories';
import useStyles from './styles';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import backgroundImage from '../../images/background.png';
import Nav from "../nav"
import { likeStory } from '../../api';
import { Button } from '@material-ui/core';


const StoryDetail = () => {
  const { selectedStory, stories, isLoading } = useSelector((state) => state.stories);
  const [likes, setLikes] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();
  const navigate = useNavigate();
  const { id } = useParams();

  const user = JSON.parse(localStorage.getItem('user_info'));
  const userId = user?.result.googleId || user?.result?._id;
  var hasLikedStory = false;


  useEffect(() => {
    dispatch(getStory(id));
  }, [id]);

  useEffect(() => {
    if (selectedStory) {
      setLikes(selectedStory.likes ?? 0);
      hasLikedStory = selectedStory.likes.find((like) => like === userId);
    }
  }, [selectedStory]);

  const [anchorEl, setAnchorEl] = useState(null);

  const authData = useSelector((state) => state.auth.authData);

  const handleLike = () => {
    dispatch(likeStory(selectedStory._id));

    if (hasLikedStory) {
      setLikes(selectedStory.likes.filter((id) => id !== userId));
    } else {
      setLikes([...selectedStory.likes, userId]);
    }
  };

  const Likes = () => {
    if (selectedStory.likes.length > 0) {
      return selectedStory.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
        ? (
          <><FavoriteIcon fontSize="small" />&nbsp;{selectedStory.likes.length > 2 ? `You and ${selectedStory.likes.length - 1} others` : `${selectedStory.likes.length} like${selectedStory.likes.length > 1 ? 's' : ''}`}</>
        ) : (
          <><FavoriteBorderOutlinedIcon fontSize="small" />&nbsp;{selectedStory.likes.length} {selectedStory.likes.length === 1 ? 'Like' : 'Likes'}</>
        );
    }

    return <><FavoriteBorderOutlinedIcon fontSize="small" />&nbsp;Like</>;
  };

  function checkIfUserIsCreator() {
    if (authData) {
      if (user.result._id === selectedStory.creatorId) {
        console.log("User is creator");
        return true;
      } else {
        console.log("User is NOT creator");
        return false;
      }
    } else {
      console.log("User hasn't logged in");
      return false;
    }
  }

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = (id) => {
    if (checkIfUserIsCreator()) {
      navigate(`/editStory/${id}`);
    } else {
      alert('Error: you can only edit your own stories!');
    }
  }

  const handleDelete = (id) => {
    if (checkIfUserIsCreator()) {
      // User has logged in to delete a story
      try {
        dispatch(deleteStory(id));
        alert('Story deleted successfully.');
        navigate(-1);
      } catch (error) {
        alert(`Error: couldn't delete the story.`);
      }
    } else {
      // User has not logged in to popup an alert
      alert('Error: you can only delete your own stories!');
    }
  }


  function TagList({ tags }) {
    return (
      tags.map((tag, index) => (
        <Chip key={index} className={classes.chip} label={tag} color="default" component="h2" variant="outlined" />
      ))
    );
  }

  if (isLoading || !selectedStory) {
    return (
      <div style={{ backgroundImage: `url(${backgroundImage})` }}>
        <Container maxWidth="xl">
          <Container maxWidth="lg">
            <Nav />
            <div style={{ marginTop: '60px' }} />
            <Paper elevation={6} className={classes.loadingPaper}>
              <CircularProgress size="3em" />
            </Paper>
            <Divider style={{ margin: '40px' }} />
          </Container>
        </Container>
      </div>
    );
  }

  return (
    <div style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Container maxWidth="xl">
        <Container maxWidth="lg">
          <Nav />
          <main>
            <div style={{ marginTop: '60px' }} />
            <Card className={classes.storyPaper} elevation={6}>
              <div className={classes.card}>
                <div className={classes.textSection}>
                  <div className={classes.titleRow}>
                    <Typography variant="h4" component="h2">{selectedStory.title || ""}</Typography>
                    <IconButton
                      className={classes.optionsButton}
                      aria-controls="card-options"
                      aria-haspopup="true"
                      onClick={handleMenuClick}
                    >
                      <MoreVertIcon />
                    </IconButton>
                    <Menu
                      id="card-options"
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                    >
                      <MenuItem onClick={() => handleEdit(selectedStory._id)}>Edit story</MenuItem>
                      <MenuItem onClick={() => handleDelete(selectedStory._id)}>Delete story</MenuItem>
                    </Menu>
                  </div>
                  <div className={classes.creationInfo}>
                    <Typography variant="body1">
                      Created by: {selectedStory.creatorName || "Anonymous"}
                    </Typography>
                    <Typography variant="body2">{moment(selectedStory.createdAt || Date()).fromNow()}</Typography>
                  </div>
                  <TagList tags={selectedStory.tags || []} />
                  <Typography gutterBottom variant="body1" component="p">{selectedStory.message || ""}</Typography>
                  <CardActions className={classes.likeButton} >
                    <Button size="small" color="primary" disabled={!user?.result} onClick={handleLike}>
                      <Likes />
                    </Button>
                  </CardActions>
                  <Divider style={{ margin: '20px' }} />
                </div>
                <div className={classes.imageSection}>
                  <img className={classes.picture} src={selectedStory.selectedPicture || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={selectedStory.title || ""} />
                </div>
              </div>
            </Card>
            <Divider style={{ margin: '40px' }} />
          </main>
        </Container>
      </Container>
    </div>
  );
};

export default StoryDetail;