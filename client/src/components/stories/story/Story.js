import React from 'react';
import { ButtonBase, Typography, Card, CardActions, CardContent, CardMedia, Chip, IconButton } from '@material-ui/core/';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import moment from 'moment';
//import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';

import storyStyles from './styles';

const Story = ({ story, setCurrentId }) => {
    //const dispatch = useDispatch();
    const classes = storyStyles();
    const navigate = useNavigate();
    const formatTags = story.tags.map(tag => `#${tag}`);
    var userLikePost = false;

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
                    <Typography variant="h6">{story.creator}</Typography>
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
                    <Typography variant="body2">{story.likeCount}</Typography>
                </CardActions>
            </Card>
        </Link>
    );
}

export default Story;