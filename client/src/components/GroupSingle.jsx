import React from 'react';
import { Card, Avatar, Divider, Typography } from '@mui/material';
import FlexBetween from './FlexBetween';

const GroupCard = ({ groupName, groupImageSrc }) => {
  return (
    <Card sx={{borderRadius:"1rem", margin:"8px"}}>
      {/* Group Profile Picture */}
      <FlexBetween padding="2rem">

        <Avatar
        alt="Remy Sharp"
        src="https://www.govloop.com/wp-content/uploads/2015/06/data-brain-e1448373467709.jpg"
        sx={{ width: 56, height: 56 }}
        />
        <Typography variant="h5" component="div">
        Data Science Student Comunity{/* {groupName} */}
        </Typography>
      </FlexBetween>
      <Divider />
    </Card>
  );
};

export default GroupCard;
