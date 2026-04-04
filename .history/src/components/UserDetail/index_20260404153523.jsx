import React, { useState } from "react";
import { Typography, Button, Box, Divider } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import "./styles.css";
import models from "../../modelData/models";

function UserDetail() {
  const { userId } = useParams();
  const user = models.userModel(userId);

  return (
    <Box sx={{ padding: 2 }}>
      {/* <Typography variant="body1">
        This should be the UserDetail view of the PhotoShare app. Since it is
        invoked from React Router the params from the route will be in property
        match. So this should show details of user: {user.userId}. You can fetch
        the model for the user from models.userModel.
      </Typography> */}
      <Typography variant="h4" gutterBottom>
        {user.first_name} {user.last_name}
      </Typography>
      <Divider sx={{ marginBottom: 2 }} />
      <Box sx={{ marginBottom: 3 }}>
        <Typography variant="body1">
          <strong>Vị trí:</strong> {user.location}
        </Typography>
        <Typography variant="body1">
          <strong>Nghề nghiệp:</strong> {user.occupation}
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 2, fontStyle: "italic" }}>
          <strong>Mô tả:</strong> {user.description}
        </Typography>
      </Box>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to={`/photos/${userId}`}
      >
        Xem ảnh của {user.first_name}
      </Button>
    </Box>
  );
}

export default UserDetail;
