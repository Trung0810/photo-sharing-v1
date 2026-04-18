import React, { useState, useEffect } from "react";
import { Typography, Button, Box, Divider } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import "./styles.css";
import fetchModel from "../../lib/fetchModelData";

function UserDetail() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await fetchModel(
          `http://localhost:8888/api/user/${userId}`,
        );
        console.log(">> check user data", userData);

        setUser(userData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [userId]);

  return (
    <div>
      {user && (
        <div>
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
              <Typography
                variant="body1"
                sx={{ marginTop: 2, fontStyle: "italic" }}
              >
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
        </div>
      )}
    </div>
  );
}

export default UserDetail;
