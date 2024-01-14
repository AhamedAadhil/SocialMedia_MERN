import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import EventCard from "components/EventCard";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
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
