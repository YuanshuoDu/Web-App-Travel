/*import React from 'react';
import settingsStyle from './settingsStyle.js'; // Import the styles
import { TextField, Button } from '@mui/material';
import Drawer from "./drawer";
import Box from "@mui/material/Box";

const AccountSettings = () => {
  const classes = settingsStyle();

  return (
    <>
      <Box sx={{ display: 'flex' }}><Drawer />
      </Box>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>


        <div className={classes.accountsettings}>
          <h1 className={classes.mainhead1}>Personal Information</h1>

          <div className={classes.form}>
          <TextField
              label="Email"
              type="email"
              name="email"
              id="email"
              required
              className={classes.formGroup}
              variant="outlined" />

            <TextField
              label="Password"
              name="password"
              id="password"
              required
              className={classes.formGroup}
              variant="outlined" />

            <TextField
              label="Confirm Password"
              type="password"
              name="password"
              id="password"
              required
              className={classes.formGroup}
              variant="outlined" />
          </div>

          <Button variant="contained" color="primary" className={classes.mainbutton1}>
            Save Changes
          </Button>

        </div>
      </Box></>
  );
};

export default AccountSettings;*/
