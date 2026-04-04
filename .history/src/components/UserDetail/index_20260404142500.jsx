import React, { useState, useEffect } from "react";
import { Typography, Button, Box, Divider } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import fetchModel from "../../lib/fetchModelData";
import "./styles.css";

function UserDetail() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  // if (!user) return <Typography>Đang tải dữ liệu...</Typography>;

  return (
    <Box sx={{ padding: 2 }}>
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
