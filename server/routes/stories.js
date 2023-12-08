import express from 'express';
import { getStories, getStory, createStory, deleteStory, updateStory, likeStory, getLikedStories, getUserStories } from '../controllers/storyController.js';
import auth from '../middleware/authmiddle.js';

const router = express.Router();


router.get('/likedStories', auth, getLikedStories);
router.get('/userStories', auth, getUserStories);
router.get('/getStoryById/:id', getStory);
router.get('/', getStories);
router.post('/', auth, createStory);
router.delete('/:id', auth, deleteStory);
router.patch('/:id', auth, updateStory);
router.patch('/:id/likeStory', auth, likeStory);

export default router;