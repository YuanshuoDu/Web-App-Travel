import express from 'express';
import { getStories, getStory, createStory } from '../controllers/storyController.js';

const router = express.Router();
router.get('/', getStories);
router.get('/:id', getStory);
router.post('/', createStory);

export default router;