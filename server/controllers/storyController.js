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

export const getStory = async (req, res) => { 
    const { id } = req.params;

    try {
        const story = await Story.findById(id);
        console.log(story);
        res.status(200).json(story);
    } catch (error) {
        res.status(404).json({ message: error.message });
        console.log('Not found');
    }
}

export const createStory = async (req, res) => {
    const story = req.body;
    const newStory = new Story({ ...story, creator: req.userId, createdAt: new Date().toISOString() })

    try {
        await newStory.save();
        // Successful creation
        res.status(201).json(newStory);
    } catch(error) {
        res.status(409).json({message: error.message});
    }
}