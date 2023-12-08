import React, { useState } from "react";
import { TextField, Button, Typography, Container } from "@mui/material";
import { useDispatch } from "react-redux";
import { changePassword } from "../../redux/actions/auth"; // This action needs to be created
import { Alert, AlertTitle } from "@mui/material";
import Login from "../login";
import Nav from "../nav";
import Box from "@mui/material/Box";
import backgroundImage from "../../images/background.png";
import { useNavigate } from "react-router-dom";
import changePasswordFormStyles from "./styles";

function ChangePassword() {
  const [password, setPassword] = useState({
    oldPassword: "",
    newPassword: "",
  });
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user_info"));
  const navigate = useNavigate();
  const classes = changePasswordFormStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user?.result?._id) {
      dispatch(changePassword({ ...password, userId: user.result._id }));
      alert("Password changed successfully!");
    } else {
      alert("User not found!");
    }
  };

  const handleChange = (e) => {
    setPassword({ ...password, [e.target.name]: e.target.value });
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  if (!user?.result?.firstName) {
    return (
      <div>
        <Alert severity="warning">
          <AlertTitle>Info</AlertTitle>
          Please <strong>log in</strong> to access this page - check it out!
        </Alert>
        <Login />
      </div>
    );
  }

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
            <Typography component="h1" variant="h2" align="center" gutterBottom>
              Change Password
            </Typography>
            <div style={{ marginTop: "60px" }} />
            <div style={{ marginTop: "60px" }} />
            <Container component="main" maxWidth="xs">
              <form onSubmit={handleSubmit}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="oldPassword"
                  label="Old Password"
                  type="password"
                  id="oldPassword"
                  value={password.oldPassword}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="newPassword"
                  label="New Password"
                  type="password"
                  id="newPassword"
                  value={password.newPassword}
                  onChange={handleChange}
                />
                <div style={{ marginTop: "20px" }} />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submitButton}
                >
                  Change Password
                </Button>

                <div style={{ marginTop: "20px" }} />
                <Button
                  className={classes.cancelButton}
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                  onClick={handleGoBack}
                >
                  Cancel
                </Button>
              </form>
            </Container>
          </main>
        </Container>
      </Box>
    </Container>

    // <Container component="main" maxWidth="xs">
    //     <Typography component="h1" variant="h5">
    //         Change Password
    //     </Typography>
    //     <form onSubmit={handleSubmit}>
    //         <TextField
    //             variant="outlined"
    //             margin="normal"
    //             required
    //             fullWidth
    //             name="oldPassword"
    //             label="Old Password"
    //             type="password"
    //             id="oldPassword"
    //             value={password.oldPassword}
    //             onChange={handleChange}
    //         />
    //         <TextField
    //             variant="outlined"
    //             margin="normal"
    //             required
    //             fullWidth
    //             name="newPassword"
    //             label="New Password"
    //             type="password"
    //             id="newPassword"
    //             value={password.newPassword}
    //             onChange={handleChange}
    //         />
    //         <Button
    //             type="submit"
    //             fullWidth
    //             variant="contained"
    //             color="primary"
    //         >
    //             Change Password
    //         </Button>
    //     </form>
    // </Container>
  );
}

export default ChangePassword;
