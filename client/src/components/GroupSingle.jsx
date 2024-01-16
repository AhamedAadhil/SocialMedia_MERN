import React from "react";
import { Card, Avatar, Divider, Typography } from "@mui/material";
import FlexBetween from "./FlexBetween";
import { useSelector } from "react-redux";

const GroupSingle = ({ groupId }) => {
  const allGroups = useSelector((state) => state.groups);

  // Find the group with the specified groupId
  const group = allGroups.find((group) => group._id === groupId);

  if (!group) {
    // Handle the case where the group is not found
    return null;
  }

  const groupAvatarSrc =
    `http://localhost:3001/public/assets/picture/${group.profilePicture}` ||
    "https://www.govloop.com/wp-content/uploads/2015/06/data-brain-e1448373467709.jpg";

  return (
    <Card sx={{ borderRadius: "1rem", margin: "8px" }}>
      {/* Group Profile Picture */}
      <FlexBetween padding="2rem">
        <Avatar
          alt={group.groupName}
          src={groupAvatarSrc}
          sx={{ width: 56, height: 56 }}
        />
        {/* Group Name and Member Count on the Right Side */}
        <div>
          <Typography variant="h5" component="div">
            {group.groupName}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Members: {`${group.groupMembers.length}`}
          </Typography>
        </div>
      </FlexBetween>
      <Divider />
    </Card>
  );
};

export default GroupSingle;
