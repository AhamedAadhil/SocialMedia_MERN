import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import EventCard from "components/EventCard";
import WidgetWrapper from "components/WidgetWrapper";
import React, { useState } from 'react';
import {
  Modal,
  TextField,
  Button,
  Box,
  IconButton,
} from '@mui/material';
import Close from '@mui/icons-material/Close';

const CreateEventForm = ({ isOpen, onClose }) => {
  // State to manage form inputs
  const [eventData, setEventData] = useState({
    eventName: '',
    eventDate:'',
    eventTime:'',
    eventvanue:'',
    eventDescription: '',
    // Add more fields as needed
  });

  // Function to handle form submission
  const handleCreateEvent = () => {
    // Add your logic to handle group creation here
    console.log('Creating group with data:', eventData);
    // Reset form data if needed
    setEventData({
      eventName: '',
      eventDate:'',
      eventTime:'',
      eventvanue:'',
      eventDescription: '',
    });
    // Close the modal
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
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" gutterBottom>
          Post a New Event
        </Typography>
        <IconButton onClick={onClose} sx={{ marginLeft: 38, marginTop: -7 }}>
            <Close color="error" />
        </IconButton>
        {/* Event Name */}
        <TextField
          label="Event Name"
          fullWidth
          value={eventData.eventName}
          onChange={(e) => setEventData({ ...eventData, eventName: e.target.value })}
          margin="normal"
        />
        {/* Event Date */}
        <TextField
          label="Event Date"
          fullWidth
          value={eventData.eventDate}
          onChange={(e) => setEventData({ ...eventData, eventDate: e.target.value })}
          margin="normal"
        />
        {/* Event Time */}
        <TextField
          label="Event Time"
          fullWidth
          value={eventData.eventTime}
          onChange={(e) => setEventData({ ...eventData, eventTime: e.target.value })}
          margin="normal"
        />
        {/* Event Venue */}
        <TextField
          label="Event Venue"
          fullWidth
          value={eventData.eventVenue}
          onChange={(e) => setEventData({ ...eventData, eventVenue: e.target.value })}
          margin="normal"
        />

        {/* Event Description */}
        <TextField
          label="Event Description"
          fullWidth
          multiline
          rows={4}
          value={eventData.eventDescription}
          onChange={(e) => setEventData({ ...eventData, eventDescription: e.target.value })}
          margin="normal"
        />
        {/* Add more fields as needed */}
        <Box mt={2}>
          <Button variant="contained" color="primary" onClick={handleCreateEvent}>
            Post Event
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

const AdvertWidget = () => {
  const [isCreateEventModalOpen, setCreateEventModalOpen] = useState(false);

  const handleOpenCreateEventModal = () => {
    setCreateEventModalOpen(true);
  };

  const handleCloseCreateEventModal = () => {
    setCreateEventModalOpen(false);
  };

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color="#FA991C" variant="h4" fontWeight="500">
          Upcoming Events
        </Typography>
        <Typography color="primary" onClick={handleOpenCreateEventModal}>
          Post Event
        </Typography>
      </FlexBetween>
      {/* Other content */}
      <EventCard />
      <EventCard />

      {/* Create Group Modal */}
      <CreateEventForm
        isOpen={isCreateEventModalOpen}
        onClose={handleCloseCreateEventModal}
      />
    </WidgetWrapper>
  );
};

export default AdvertWidget;