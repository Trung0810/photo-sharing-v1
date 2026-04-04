import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";
import "./styles.css";
import models from "../../modelData/models";

function TopBar() {
  const location = useLocation();
  const { userId } = useParams();

  const [title, setTitle] = useState("Photo Sharing App");

  useEffect(() => {
    if (location.pathname.startsWith("/users/") && userId) {
      const user = models.userModel(userId);
      console.log(user.first_name);
      setTitle(`${user.first_name} ${user.last_name}`);
    } else if (location.pathname.startsWith("/photos/") && userId) {
      const user = models.userModel(userId);
      setTitle(`Photos of ${user.first_name}`);
    }
  }, []);

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
