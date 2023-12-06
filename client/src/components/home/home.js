import React, { useEffect, useState } from "react";
import {
  Paper,
  Typography,
  Container,
  Button,
  InputAdornment,
  TextField,
  IconButton,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from "react-redux";
import { getStories } from "../../redux/actions/stories";
import Stories from "../stories/Stories";
import homeStyles from "./styles";
import { useNavigate, useLocation } from "react-router-dom";
import Nav from "../nav";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import backgroundImage from "../../images/background.png";
import { Link } from 'react-router-dom';
import { Pagination, PaginationItem } from '@material-ui/lab';


// To obtain the query string from the url
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  const classes = homeStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [currentId, setCurrentId] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState('all');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    setSearch(searchTerm);
  };

  // Check if the user is authenticated
  const authData = useSelector((state) => state.auth.authData);
  const { stories, isLoading, numPages } = useSelector((state) => state.stories);

  const query = useQuery();
  // Get the page number from the query string or set it to 1
  const page = query.get('page') || 1;

  useEffect(() => {
    if (page) {
      console.log('Page home ' + page);
      dispatch(getStories(page, filter, search));
    }
  }, [dispatch, page, filter, search]);

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
          backgroundSize: 'cover',
          width: '100%',

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
                      Create a story
                    </Button>
                  ) : (
                    <p></p>
                  )}
                </div>
              </Stack>
              <Container>
                <Paper className={classes.searchContainer}>
                  <TextField
                    className={classes.searchInput}
                    variant="standard"
                    placeholder="Search for a story"
                    value={searchTerm}
                    onChange={handleInputChange}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={handleSearch} edge="end">
                            <SearchIcon />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Paper>
                <>
                  <div className={classes.filterFlex}>
                    <Button onClick={() => setFilter('all')} variant="contained" color={filter === 'all' ? 'primary' : 'default'}
                    >All</Button>
                    <Button onClick={() => setFilter('today')} variant="contained" color={filter === 'today' ? 'primary' : 'default'}
                    >Today</Button>
                    <Button onClick={() => setFilter('week')} variant="contained" color={filter === 'week' ? 'primary' : 'default'}
                    >This week</Button>
                    <Button onClick={() => setFilter('month')} variant="contained" color={filter === 'month' ? 'primary' : 'default'}
                    >This month</Button>
                    <Button onClick={() => setFilter('year')} variant="contained" color={filter === 'year' ? 'primary' : 'default'}
                    >This year</Button>
                  </div>
                </>
              </Container>
              <Paper className={classes.pagination} elevation={6}>
                <Pagination
                  classes={{ ul: classes.ul, root: classes.root }}
                  count={numPages}
                  page={Number(page) || 1}
                  variant="outlined"
                  color="primary"
                  renderItem={(item) => (
                    <PaginationItem {...item} component={Link} to={`/stories?page=${item.page}`} />
                  )}
                />
              </Paper>
            </Container>
          </main>
        </Container>
        <Stories setCurrentId={setCurrentId} stories={stories} isLoading={isLoading} />
      </Box>
    </Container>
  );
};

export default Home;
