import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import "./styles.css";
import models from "../../modelData/models";

function TopBar() {
  const location = useLocation();
  const [title, setTitle] = useState("Photos Sharing");
  const path = location.pathname;

  useEffect(() => {
    const parts = path.split("/");
    if ((parts[1] === "users" || parts[1] === "photos") && parts[2]) {
      const userId = parts[2];
      const user = models.userModel(userId);
      if (path.startsWith("/users/")) {
        setTitle(user.first_name);
      } else {
        setTitle(`Photos of ${user.first_name}`);
      }
    } else {
      setTitle("Photos Sharing");
    }
  }, [path]);

  return (
    <AppBar className="topbar-appBar" position="absolute">
      <Toolbar>
        <Typography variant="h5" color="inherit" sx={{ flexGrow: 1 }}>
          Nguyen Duc Trung
        </Typography>
        <Typography variant="h5" color="inherit">
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
