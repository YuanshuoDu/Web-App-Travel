import express from 'express';
import { getStories, getStory, createStory, deleteStory, updateStory } from '../controllers/storyController.js';
import authmiddle from "../middleware/authmiddle.js";
const router = express.Router();

router.get('/', getStories);
router.get('/:id', getStory);
router.post('/', createStory);
router.delete('/:id', deleteStory);
router.patch('/:id', updateStory);

export default router;