import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import storyRoutes from './routes/stories.js';
import userRoutes from './routes/userRoutes.js';

const app = express();
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());
app.use('/users', userRoutes)
app.use('/stories', storyRoutes);

const username = encodeURIComponent("test");
const password = encodeURIComponent("yVF6YxZPFBdIMswk");
const uri = `mongodb+srv://${username}:${password}@travelappcluster.1xu2xdn.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp"`;
const port = process.env.PORT || 3000;

// Database connection
mongoose.connect(uri)
    .then(() => app.listen(port, () => console.log(`Server running on port: ${port}`)))
    .catch((error) => console.log(error.message));