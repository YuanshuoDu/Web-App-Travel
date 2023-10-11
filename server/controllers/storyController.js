import Story from '../models/story.js';

export const getStories = async (req, res) => {
    try {
        const stories = await Story.find();
        res.status(200).json(stories);
    } catch(error) {
        // Not found
        res.status(404).json({message: error.message});
    }
}

export const createStory = async (req, res) => {
    const story = req.body;
    const newStory = new Story(story);

    try {
        await newStory.save();
        // Successful creation
        res.status(201).json(newStory);
    } catch(error) {
        res.status(409).json({message: error.message});
    }
}