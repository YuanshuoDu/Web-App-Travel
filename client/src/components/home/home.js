import React, { useEffect, useState } from "react";
import {
  Typography,
  Container,
  Button,
  Paper
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { useDispatch, useSelector } from "react-redux";
import { getStories } from "../../redux/actions/stories";
import Stories from "../stories/Stories";
import homeStyles from "./styles";
import { useNavigate, useLocation } from "react-router-dom";
import Nav from "../nav";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import backgroundImage from "../../images/background.png";
import { LOGOUT } from "../../redux/const/actionsTypes";
import { connect } from "react-redux";
import SearchBar from '../home/search_bar/search_bar.js';
import FilterButtons from '../home/filter_buttons/filter_buttons';
import Pagination from '../Pagination';

// to obtain the query string from the url
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  const classes = homeStyles();
  const [currentId, setCurrentId] = useState(0);
  //const [stories, setStories] = useState([]);
  //const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([])
  const [selectedFilter, setSelectedFilter] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // check if the user is authenticated
  const authData = useSelector((state) => state.auth.authData);

  const { stories, isLoading } = useSelector((state) => state.stories);

  const query = useQuery();
  // get the page number from the query string or set it to 1
  const page = query.get('page') || 1;

  /*useEffect(() => {
    dispatch(getStories());
  }, [dispatch]);*/

  useEffect(() => {
    //console.log('stories home ' + stories.isArray);
    //console.log('isLoading home ' + isLoading);
    setSearchResults(stories);
    //console.log('searchResults home ' + searchResults.isArray);
  }, [stories]);

  const handleClick = (event) => {
    setSelectedFilter(event.target.value);
  };

  const openCreateStoryScreen = () => navigate("/createStory");

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          ml: 0,
          mr: 0,
          pt: 8,
          pb: 6,
          background: `url(${backgroundImage})`,
          backgroundSize: "cover",
          maxWidth: "100%",
        }}
      >
        <Container maxWidth="lg">
          <Nav />
          <main>
            <div style={{ marginTop: "60px" }} />
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                gutterBottom
              >
                Welcome to Stories
              </Typography>
              {
                <Typography variant="h5" align="center" color="black" paragraph>
                  Your passport to a world of adventure and inspiration
                </Typography>
              }

              <Stack
                direction="row"
                spacing={2}
                justifyContent="center"
              >

                <div>
                  {authData ? (
                    <Button
                      className={classes.button}
                      variant="contained"
                      color="primary"
                      startIcon={<AddIcon />}
                      onClick={openCreateStoryScreen}
                    >
                      Create Story
                    </Button>
                  ) : (
                    <p></p>
                  )}
                </div>
              </Stack>

              <SearchBar stories={stories} setSearchResults={setSearchResults} />
              <FilterButtons handleClick={handleClick} />

              <Paper className={classes.pagination} elevation={6}>
                <Pagination page={page} />
              </Paper>
            </Container>
          </main>
        </Container>
        <Stories setCurrentId={setCurrentId} searchResults={searchResults} isLoading={isLoading} />
      </Box>
    </Container>
  );
};

export default Home;
