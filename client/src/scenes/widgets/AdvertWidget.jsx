import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import EventCard from "components/EventCard";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color="#FA991C" variant="h4" fontWeight="500">
          Up Coming Events
        </Typography>
        <Typography color={medium}>Post Event</Typography>
      </FlexBetween>
      <EventCard />
      <EventCard />
    </WidgetWrapper>
  );
};

export default AdvertWidget;
