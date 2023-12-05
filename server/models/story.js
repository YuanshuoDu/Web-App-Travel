import mongoose from 'mongoose';

const storySchema = mongoose.Schema({
    creator: String,
    firstName: String,
    title: String,
    country: String,
    city: String,
    message: String,
    tags: [String],
    selectedPicture: String,
    likes: {
        type: [String],
        default: []
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

var Story = mongoose.model('Story', storySchema);

export default Story;