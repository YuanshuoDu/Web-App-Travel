import express from 'express';
import { getStories as getStories } from '../controllers/storyController.js';

const router = express.Router();
router.get('/', getStories);

export default router;