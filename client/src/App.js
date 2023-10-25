import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/home/home';
import CreateStory from './components/story_form/story_form';

const App = () => {

  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/stories" element={<HomePage/>} />
          <Route path="/createStory" element={<CreateStory/>} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;