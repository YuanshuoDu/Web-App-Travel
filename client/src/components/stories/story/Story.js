import React from 'react';
import { ButtonBase, Typography, Card, CardActions, CardContent, CardMedia, Chip, IconButton } from '@material-ui/core/';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpAltOutlined from '@mui/icons-material/ThumbUpAltOutlined';
import { Button } from '@material-ui/core';


import storyStyles from './styles';
import { likeStory } from '../../../api';

const Story = ({ story, setCurrentId }) => {
    const dispatch = useDispatch();
    const classes = storyStyles();
    const navigate = useNavigate();
    const formatTags = story.tags.map(tag => `#${tag}`);
    var userLikePost = false;
    const user = JSON.parse(localStorage.getItem('user_info'));

    // const Likes = () => {
    //     if (story.likes.length > 0) {
    //       return story.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
    //         ? (
    //           <><ThumbUpAltIcon fontSize="small" />&nbsp;{story.likes.length > 2 ? `You and ${story.likes.length - 1} others` : `${story.likes.length} like${story.likes.length > 1 ? 's' : ''}` }</>
    //         ) : (
    //           <><ThumbUpAltOutlined fontSize="small" />&nbsp;{story.likes.length} {story.likes.length === 1 ? 'Like' : 'Likes'}</>
    //         );
    //     }
    
    //     return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
    //   };


    var handleButtonClick = () => {
        if (userLikePost) {
            userLikePost = false;
        } else {
            userLikePost = true;
        }
    };

    return (
        <Link to={`/stories/${story._id}`}  className={classes.link}>
            <Card className={classes.card}>
              
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
                <Typography className={classes.title} variant="h5">{story.title}</Typography>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">{story.message}</Typography>
                </CardContent>
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
                    {/* <Button size="small" color="primary" disabled={!user?.result} onClick={() => dispatch(likeStory(story._id))}>
                    <Likes />
                    </Button> */}
                    <Typography variant="body2">{story.likeCount}</Typography>
                </CardActions>
            </Card>
        </Link>
    );
}

export default Story;