import Story from '../models/story.js';
import mongoose from 'mongoose';

export const getStories = async (req, res) => {
    try {
        const stories = await Story.find();
        res.status(200).json(stories);
    } catch(error) {
        // Not found
        res.status(404).json({message: error.message});
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
    const newStory = new Story({ ...story, creator: "Test"/*req.userId*/, createdAt: new Date().toISOString() })

    try {
        await newStory.save();
        // Successful creation
        res.status(201).json(newStory);
    } catch(error) {
        res.status(409).json({message: error.message});
    }
}

export const deleteStory = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No story with id: ${id}`);

    await Story.findByIdAndRemove(id);

    res.json({ message: "Story deleted successfully." });
}

export const updateStory = async (req, res) => {
    const { id } = req.params;
    const { title, message, tags, country, city, selectedPicture} = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No story with id: ${id}`);

    const updatedStory = { _id: id, title, message, tags, country, city, selectedPicture };

    await Story.findByIdAndUpdate(id, updatedStory, { new: true });

    res.json(updatedStory);
}