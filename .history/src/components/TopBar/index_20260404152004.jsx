import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import fetchModel from "../../lib/fetchModelData";
import "./styles.css";

function TopBar() {
  const location = useLocation();
  const params = useParams();
  let title = "Photo Sharing App";

  if (location.pathname.startsWith("/users/") && params.userId) {
    const user = models.userModel(params.userId);
    title = `${user.first_name} ${user.last_name}`;
  } else if (location.pathname.startsWith("/photos/") && params.userId) {
    const user = models.userModel(params.userId);
    title = `Photos of ${user.first_name}`;
  }

  return (
    <AppBar className="topbar-appBar" position="absolute">
      <Toolbar>
        <Typography variant="h5" color="inherit" sx={{ flexGrow: 1 }}>
          Nguyen Duc Trung
        </Typography>
        <Typography variant="h5" color="inherit">
          {getContextText()}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
