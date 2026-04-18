import React, { useEffect, useState } from "react";
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
import fetchModel from "../../lib/fetchModelData";

function UserPhotos() {
  const { userId } = useParams();
  const [photos, setPhotos] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const photoData = await fetchModel(
          `http://localhost:8888/api/photo/photosOfUser/${userId}`,
        );
        console.log(">> check photo data", photoData);

        setPhotos(photoData.photoList);
        setUser(photoData.user);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [userId]);

  if (!photos || photos.length === 0) {
    return;
  }

  return (
    <Box>
      {/* <Typography variant="body1">
        This should be the UserPhotos view of the PhotoShare app. Since it is
        invoked from React Router the params from the route will be in property
        match. So this should show details of user:
        {user.userId}. You can fetch the model for the user from
        models.photoOfUserModel(userId):
      </Typography> */}
      {user &&
        photos &&
        photos.map((photo) => (
          <Card key={photo._id} sx={{ marginBottom: 4, boxShadow: 3 }}>
            <CardHeader
              title={`Đăng vào: ${new Date(photo.date_time).toLocaleString()}`}
            />
            <CardMedia
              component="img"
              image={`/images/${photo.file_name}`}
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
                          to={`/users/${user._id}`}
                          style={{
                            fontWeight: "bold",
                            textDecoration: "none",
                            color: "#1976d2",
                          }}
                        >
                          {user.first_name} {user.last_name}
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
