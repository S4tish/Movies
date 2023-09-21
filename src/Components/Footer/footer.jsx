import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const footer = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar style={{ justifyContent: "center" }}>
        <Typography variant="body2" color="inherit">
          &copy; {new Date().getFullYear()} MoviesHub . All rights reserved.
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default footer;
