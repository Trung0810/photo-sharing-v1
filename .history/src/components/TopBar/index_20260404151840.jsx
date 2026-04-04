import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import fetchModel from "../../lib/fetchModelData";
import "./styles.css";

function TopBar() {
  const location = useLocation();
  const [userName, setUserName] = useState("");
  const path = location.pathname;

  console.log(path);

  useEffect(() => {
    const parts = path.split("/");
    if ((parts[1] === "users" || parts[1] === "photos") && parts[2]) {
      const userId = parts[2];
      fetchModel(`/user/${userId}`)
        .then((response) => {
          setUserName(`${response.data.first_name} ${response.data.last_name}`);
        })
        .catch(() => setUserName(""));
    } else {
      setUserName("");
    }
  }, [path]);

  const getContextText = () => {
    if (path.startsWith("/users/")) return `Chi tiết về ${userName}`;
    if (path.startsWith("/photos/")) return `Ảnh của ${userName}`;
    return "";
  };

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
