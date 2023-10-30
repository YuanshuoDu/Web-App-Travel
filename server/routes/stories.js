import express from 'express';
import { getStories, createStory } from '../controllers/storyController.js';

const router = express.Router();
router.get('/', getStories);
router.post('/', createStory);

export default router;