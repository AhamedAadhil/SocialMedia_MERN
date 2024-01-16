import React, { useState } from 'react';
import { Modal, Box, TextField, Button, Typography,Avatar, Input } from '@mui/material';
import { AddCircle } from '@mui/icons-material';

const CreateGroupPopup = ({ isOpen, onClose }) => {
  const [groupData, setGroupData] = useState({
    profilePicture: '',
    groupName: '',
    groupDescription: '',
    groupMembers: '',
  });
  // const [previewUrl, setPreviewUrl] = useState(
  //   user.picturePath
  //     ? `http://localhost:3001/public/assets/picture/download.jpg`
  //     : null
  // );
  const handleCreateGroup = () => {
    // Add logic to handle creating a group with the provided data
    console.log('Creating group with data:', groupData);
    // Clear the form fields
    setGroupData({
      profilePicture: '',
      groupName: '',
      groupDescription: '',
      groupMembers: '',
    });
    // Close the popup form
    onClose();
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          borderRadius:'10px',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" gutterBottom>
          Create a New Group
        </Typography>
        {/* Profile Picture */}
        <Avatar
            alt=''
            src=''
            sx={{ width: 100, height: 100, marginBottom: 2 }}
          />

          {/* File Input for Changing Profile Picture */}
          <Input
            type="file"
            accept="image/*"
            onChange=""
            sx={{ marginBottom: 2 }}
          />
        <TextField
          label="Group Name"
          fullWidth
          value={groupData.groupName}
          onChange={(e) => setGroupData({ ...groupData, groupName: e.target.value })}
          margin="normal"
        />
        <TextField
          label="Group Description"
          fullWidth
          multiline
          rows={4}
          value={groupData.groupDescription}
          onChange={(e) => setGroupData({ ...groupData, groupDescription: e.target.value })}
          margin="normal"
        />
        <TextField
          label="Group Members"
          fullWidth
          value={groupData.groupMembers}
          onChange={(e) => setGroupData({ ...groupData, groupMembers: e.target.value })}
          margin="normal"
        />
        <Box mt={2}>
          <Button variant="contained" color="primary" onClick={handleCreateGroup}>
            Create Group
          </Button>
          <Button onClick={onClose} sx={{ marginLeft: 1, color:'RED' }}>
            Close
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

const GroupCreationComponent = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  return (
    <div>
      {/* Your other content */}
      <AddCircle
        sx={{ fontSize: '25px', color: '#1C768F', cursor: 'pointer',marginLeft:'250px' }}
        onClick={() => setPopupOpen(true)}
      />
      <CreateGroupPopup isOpen={isPopupOpen} onClose={() => setPopupOpen(false)} />
    </div>
  );
};

export default GroupCreationComponent;
