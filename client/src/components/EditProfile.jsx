// EditUserPopup.js
import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Divider,
  Avatar,
  Input,
  Box,
} from "@mui/material";

const EditUserPopup = ({ open, handleClose, user }) => {
  const [editedUser, setEditedUser] = useState(user);
  const [profilePicture, setProfilePicture] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(
    user.picturePath
      ? `http://localhost:3001/public/assets/picture/${user.picturePath}`
      : null
  );

  const handleInputChange = (event) => {
    // Handle input changes and update the state
    const { name, value } = event.target;
    setEditedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    // Create a new object URL for the selected picture to preview
    const newPreviewUrl = file ? URL.createObjectURL(file) : null;
    setPreviewUrl(newPreviewUrl);

    // Save the selected file
    setProfilePicture(file);
  };

  const handleSaveChanges = () => {
    // Handle saving changes, e.g., make an API request
    // Close the popup afterward
    handleClose();
  };

  const handleDelete = () => {};

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Edit User Information</DialogTitle>
      <Divider />
      <DialogContent>
        {/* Profile Picture */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Profile Picture */}
          <Avatar
            alt={`${editedUser.firstName} ${editedUser.lastName}`}
            src={previewUrl}
            sx={{ width: 100, height: 100, marginBottom: 2 }}
          />

          {/* File Input for Changing Profile Picture */}
          <Input
            type="file"
            accept="image/*"
            onChange={handleProfilePictureChange}
            sx={{ marginBottom: 2 }}
          />
        </Box>
        <TextField
          label="First Name"
          name="firstName"
          value={editedUser.firstName}
          onChange={handleInputChange}
          fullWidth
          sx={{ marginBottom: 2 }}
        />

        <TextField
          label="Last Name"
          name="LastName"
          value={editedUser.lastName}
          onChange={handleInputChange}
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Location"
          name="Location"
          value={editedUser.location}
          onChange={handleInputChange}
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Occupation"
          name="Occupation"
          value={editedUser.occupation}
          onChange={handleInputChange}
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Password"
          name="Password"
          value={""}
          onChange={handleInputChange}
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        {/* Add more fields as needed */}
      </DialogContent>
      <DialogActions
        sx={{
          justifyContent: "space-between",
          paddingLeft: 2,
          paddingRight: 2,
        }}
      >
        <Box>
          <Button onClick={handleDelete} color="error">
            Delete User
          </Button>
        </Box>
        <Box>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSaveChanges}>Save Changes</Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default EditUserPopup;
