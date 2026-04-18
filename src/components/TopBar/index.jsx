import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import "./styles.css";
import fetchModel from "../../lib/fetchModelData";

function TopBar() {
  const location = useLocation();
  const [title, setTitle] = useState("Photos Sharing");
  const path = location.pathname;

  useEffect(() => {
    const parts = path.split("/");
    if ((parts[1] === "users" || parts[1] === "photos") && parts[2]) {
      const userId = parts[2];
      const fetchData = async () => {
        try {
          const userData = await fetchModel(
            `http://localhost:8888/api/user/${userId}`,
          );
          console.log(">> check user data", userData);

          if (userData) {
            if (path.startsWith("/users/")) {
              setTitle(userData.first_name);
            } else {
              setTitle(`Photos of ${userData.first_name}`);
            }
          } else {
            setTitle("Photos Sharing");
          }
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
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
