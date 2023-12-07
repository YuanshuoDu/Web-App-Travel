import React from 'react';
import { Container } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Routes, Route, Redirect } from 'react-router-dom'

import Login from "./components/login";
import Signup from "./components/signup";
import HomePage from './components/home/home';
import StoryForm from './components/story_form/story_form';
import StoryDetail from './components/story_detail/story_detail';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loadUser } from './redux/actions/auth';
import LikedStories from './components/liked_stories/likedStories';
import UserStories from './components/user_stories/user_stories';


const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  const theme = createTheme({
    palette: {
      primary: {
        main: '#E7AC72', // Orange
      },
      black: {
        main: '#141414',
      },
      white: {
        main: '#FFFFFF',
      },
      grey: {
        main: '#575757',
      },

    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/stories" element={<HomePage />} />
          <Route path="/createStory" element={<StoryForm />} />
          <Route path="/editStory/:id" element={<StoryForm />} />
          <Route path="/stories/:id" element={<StoryDetail />} />
          <Route path="/likedStories" element={<LikedStories />} />
          <Route path="/userStories" element={<UserStories />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
};

export default App;