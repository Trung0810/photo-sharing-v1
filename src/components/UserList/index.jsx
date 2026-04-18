import React, { Fragment, useEffect, useState } from "react";
import { Divider, List, ListItem } from "@mui/material";

import "./styles.css";
import { Link } from "react-router-dom";
import fetchModel from "../../lib/fetchModelData";

/**
 * Define UserList, a React component of Project 4.
 */
function UserList() {
  const [userList, setUserList] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userListData = await fetchModel(
          "http://localhost:8888/api/user/list",
        );

        setUserList(userListData);
      } catch (error) {
        console.log(">> check error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* <Typography variant="body1">
        This is the user list, which takes up 3/12 of the window. You might
        choose to use <a href="https://mui.com/components/lists/">Lists</a> and{" "}
        <a href="https://mui.com/components/dividers/">Dividers</a> to display
        your users like so:
      </Typography> */}
      <h2 style={{ fontSize: "32px" }}>User List:</h2>
      <List component="nav">
        {userList &&
          userList.map((user) => (
            <Fragment key={user._id}>
              <ListItem>
                <Link to={`/users/${user._id}`}>{user.first_name}</Link>
              </ListItem>
              <Divider />
            </Fragment>
          ))}
      </List>
      {/* <Typography variant="body1">
        The model comes in from models.userListModel()
      </Typography> */}
    </div>
  );
}

export default UserList;
