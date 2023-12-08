import React, { useEffect, useState } from "react";
import {
  Typography,
  Container,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getLikedStories } from "../../redux/actions/stories";
import Stories from "../stories/Stories";
import Nav from "../nav";
import Box from "@mui/material/Box";
import backgroundImage from "../../images/background.png";
import { Alert, AlertTitle } from '@mui/material';
import Login from "../login";

const LikedStories = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const { likedStories, isLoading } = useSelector((state) => state.stories);
  const user = JSON.parse(localStorage.getItem('user_info'));

  useEffect(() => {
    if (user?.result?._id) {
      console.log("User id in LikedStories: ", user?.result?._id);
      dispatch(getLikedStories());
    }
  }, [dispatch]);

  if (!user?.result?.firstName) {
    return (
        <div>
            <Alert severity="warning">
                <AlertTitle>Info</AlertTitle>
                Please <strong>log in</strong> to access this page - check it out!
            </Alert>
            <Login />
        </div>)
};

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