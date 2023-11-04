import express from 'express';
import { getStories, getStory, createStory, deleteStory } from '../controllers/storyController.js';

const router = express.Router();

router.get('/', getStories);
router.get('/:id', getStory);
router.post('/', createStory);
router.delete('/:id', deleteStory);

export default router;