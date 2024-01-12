import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

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
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="https://i0.wp.com/www.studysrilanka.org/wp-content/uploads/2023/04/Featured-Images-2023-04-14T143641.521.png?resize=800%2C445&ssl=1"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>UNIVOTEC Career Fare 2024</Typography>
        <Typography color={medium}>www.univotec.lk</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Your pathway to stunning and immaculate beauty and made sure your skin
        is exfoliating skin and shining like light.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
