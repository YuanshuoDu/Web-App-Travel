import React, { useEffect, useState } from "react";
import {
  AppBar,
  Typography,
  Container,
  Grid,
  Grow,
  Button,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { useDispatch, useSelector } from "react-redux";
import { getLikedStories } from "../../redux/actions/stories";
import Stories from "../stories/Stories";
import homeStyles from "./styles";
import { useNavigate } from "react-router-dom";
import Nav from "../nav";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import backgroundImage from "../../images/background.png";
import useStyles from './styles';
import { useParams, useHistory, Link } from 'react-router-dom';


const LikedStories = () => {
  //const classes = useStyles();
  const [currentId, setCurrentId] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authData = useSelector((state) => state.auth.authData);
  const { likedStories, isLoading } = useSelector((state) => state.stories);
  const user = JSON.parse(localStorage.getItem('user_info'));

  useEffect(() => {
    if (user?.result?._id) {
      dispatch(getLikedStories());
    }
  }, [dispatch]);

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
              <Typography component="h1" variant="h2" align="center" gutterBottom>
                Stories you liked
              </Typography>

              <Stories setCurrentId={setCurrentId} stories={likedStories} isLoading={isLoading} />
            </Container>
          </main>
        </Container>
      </Box>
    </Container>
  );
};

export default LikedStories;