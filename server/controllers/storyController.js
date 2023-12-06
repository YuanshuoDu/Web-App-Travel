import Story from '../models/story.js';
import mongoose from 'mongoose';

export const getStories = async (req, res) => {
    const { page } = req.query;
    try {
        const LIMIT = 8;
        const startIndex = (Number(page) - 1) * LIMIT; 
        const total = await Story.countDocuments({});
        const stories = await Story.find().sort({ _id: -1 }).limit(LIMIT).skip(startIndex);
        res.status(200).json({ data: stories, currentPage: Number(page), numPages: Math.ceil(total / LIMIT) });
    } catch (error) {
        // Not found
        res.status(404).json({ message: error.message });
    }
}

export const getStory = async (req, res) => { 
    const { id } = req.params;

    try {
        const story = await Story.findById(id);
        res.status(200).json(story);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createStory = async (req, res) => {
    const story = req.body;
    const newStory = new Story({ ...story, /*creator: req.userId, */createdAt: new Date().toISOString() })
    console.log("New story: ", newStory);   

    try {
        await newStory.save();
        console.log("StoryController: Story created successfully");
        res.status(201).json(newStory);
    } catch(error) {
        console.log("Error: StoryController: Story not created");
        res.status(409).json({message: error.message});
    }
}

export const deleteStory = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No story with id: ${id}`);

    await Story.findByIdAndDelete(id);

    res.json({ message: "Story deleted successfully." });
}

export const updateStory = async (req, res) => {
    const { id } = req.params;
    const { title, message, tags, country, city, selectedPicture, creatorId, creatorName} = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No story with id: ${id}`);

    const updatedStory = { _id: id, title, message, tags, country, city, selectedPicture, creatorId, creatorName, createdAt: new Date().toISOString() };

    await Story.findByIdAndUpdate(id, updatedStory, { new: true });

    res.json(updatedStory);
}

export const likeStory = async (req, res) => {
    const { id } = req.params;

    if (!req.userId) {
        return res.json({ message: "Unauthenticated" });
    }
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No story with id: ${id}`);

    const stories = await Story.findById(id);

    const index = stories.likes.findIndex((id) => id === String(req.userId));

    if (index === -1) {
        // like the story
        stories.likes.push(req.userId);
    } else {
        // dislike the story
        stories.likes = stories.likes.filter((id) => id !== String(req.userId));
    }

    const updatedStory = await Story.findByIdAndUpdate(id, stories, { new: true });
   
    res.json(updatedStory);
}

