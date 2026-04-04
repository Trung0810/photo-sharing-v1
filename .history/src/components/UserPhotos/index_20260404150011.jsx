import React, { useState, useEffect } from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Divider,
  List,
  ListItem,
  Box,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";
import "./styles.css";
import models from "../../modelData/models";

function UserPhotos() {
  const { userId } = useParams();

  const photos = models.photoOfUserModel(userId);

  if (!photos || photos.length === 0) {
    return;
  }

  return (
    <Box>
      {photos.map((photo) => (
        <Card key={photo._id} sx={{ marginBottom: 4, boxShadow: 3 }}>
          <CardHeader
            title={`Đăng vào: ${new Date(photo.date_time).toLocaleString()}`}
          />
          <CardMedia
            component="img"
            image={`${photo.file_name}`}
            sx={{ width: "100%" }}
          />
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Bình luận:
            </Typography>
            <Divider />
            <List>
              {photo.comments &&
                photo.comments.map((c) => (
                  <ListItem
                    key={c._id}
                    sx={{ display: "block", paddingLeft: 0 }}
                  >
                    <Typography variant="subtitle2">
                      <Link
                        to={`/users/${c.user._id}`}
                        style={{
                          fontWeight: "bold",
                          textDecoration: "none",
                          color: "#1976d2",
                        }}
                      >
                        {c.user.first_name} {c.user.last_name}
                      </Link>
                      <span style={{ color: "gray", marginLeft: "8px" }}>
                        ({new Date(c.date_time).toLocaleString()})
                      </span>
                    </Typography>
                    <Typography variant="body2" sx={{ marginTop: 1 }}>
                      {c.comment}
                    </Typography>
                    <Divider
                      variant="inset"
                      component="li"
                      sx={{ marginTop: 1 }}
                    />
                  </ListItem>
                ))}
            </List>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default UserPhotos;
