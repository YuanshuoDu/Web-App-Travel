import React, { useState } from 'react';
import { Typography, Card, CardActions, CardContent, CardMedia, Chip, IconButton } from '@material-ui/core/';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@material-ui/core';


import storyStyles from './styles';
import { likeStory } from '../../../api';

const Story = ({ story, setCurrentId }) => {
    const dispatch = useDispatch();
    const classes = storyStyles();
    const navigate = useNavigate();
    const formatTags = story.tags.map(tag => `#${tag}`);
    const [likes, setLikes] = useState(story?.likes);

    // var userLikePost = false;
    const user = JSON.parse(localStorage.getItem('user_info'));

    const userId = user?.result.googleId || user?.result?._id;
    const hasLikedStory = story.likes.find((like) => like === userId);

    const handleLike = () => {
        dispatch(likeStory(story._id));
    
        if (hasLikedStory) {
          setLikes(story.likes.filter((id) => id !== userId));
        } else {
          setLikes([...story.likes, userId]);
        }
      };

    const Likes = () => {
        if (story.likes.length > 0) {

            //console.log("story likes: ", story.likes);
            //console.log( "story", story);
          return story.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
            ? (
              <><FavoriteIcon fontSize="small" />&nbsp;{story.likes.length > 2 ? `You and ${story.likes.length - 1} others` : `${story.likes.length} like${story.likes.length > 1 ? 's' : ''}` }</>
            ) : (
              <><FavoriteBorderOutlinedIcon fontSize="small" />&nbsp;{story.likes.length} {story.likes.length === 1 ? 'Like' : 'Likes'}</>
            );
        }
    
        return <><FavoriteBorderOutlinedIcon fontSize="small" />&nbsp;Like</>;
      };


    // var handleButtonClick = () => {
    //     if (userLikePost) {
    //         userLikePost = false;
    //     } else {
    //         userLikePost = true;
    //     }
    // };

    return (

            <Card className={classes.card}>
                <Link to={`/stories/${story._id}`}  className={classes.link}>

                <CardMedia className={classes.picture} image={story.selectedPicture || 'https://sanantoniosports.org/wp-content/uploads/2022/07/placeholder-image.jpeg'} title={story.title} />
                <div className={classes.overlay}>
                    <Typography variant="h6">{story.creatorName ?? 'Anonymous'}</Typography>
                    <Typography variant="body2">{moment(story.createdAt).fromNow()}</Typography>
                </div>
                <div className={classes.tags}>
                    {formatTags.map((tag) => (
                        <Chip className={classes.chip} label={tag} color="default" component="h2" />
                    ))}
                </div>
                <Typography className={classes.title} color="textPrimary"  variant="h5">{story.title}</Typography>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">{story.message}</Typography>
                </CardContent>
                </Link>
                <CardActions className={classes.likeButton}>
        
                    <Button size="small" color="primary" disabled={!user?.result} onClick={handleLike}>
                    <Likes />
                    </Button>
                    {/* <Typography variant="body2">{story.likeCount}</Typography> */}
                </CardActions>
            </Card>
                        // {/* </Link> */}

    );
}

export default Story;



            // {/* {userLikePost ?
            //             (
            //                 <IconButton size="small" onClick={handleButtonClick}>
            //                     <FavoriteIcon color="error" />
            //                 </IconButton>
            //             ) :
            //             (
            //                 <IconButton size="small" onClick={handleButtonClick}>
            //                     <FavoriteBorderOutlinedIcon />
            //                 </IconButton>
            //             )
            //         } */}