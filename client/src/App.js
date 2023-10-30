import React from 'react';
import { Container } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from "./components/login";
import Signup from "./components/signup";
import HomePage from './components/home/home';
import CreateStory from './components/story_form/story_form';


const App = () => {

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
      <BrowserRouter>
        <Container maxWidth="xl">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/stories" element={<HomePage />} />
            <Route path="/createStory" element={<CreateStory />} />

            {/* <Route path="/profile" element={<Profile/>}/>
          <Route path="/forgotpassowrd" element={<Forgotpassord/>}/> */}
          </Routes>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;