import { Typography, useTheme, Divider } from "@mui/material";
import { DateRangeOutlined,AccessTimeOutlined,LocationOnOutlined, } from "@mui/icons-material";
import FlexBetween from "components/FlexBetween";
import FlexBetween2 from "components/FlexBetween2";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      {/* <img
        width="100%"
        height="auto"
        alt="advert"
        src="https://i0.wp.com/www.studysrilanka.org/wp-content/uploads/2023/04/Featured-Images-2023-04-14T143641.521.png?resize=800%2C445&ssl=1"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      /> */}
      <FlexBetween>
        <Typography color={main} fontWeight="500">UNIVOTEC Career Fare 2024</Typography>
      </FlexBetween>

      {/* Starting Date and Time of Event */}
      <FlexBetween2>
      <DateRangeOutlined sx={{ color: 'primary', fontSize: '1rem' }} /> 
      <Typography color={medium}>18/02/2024  | 18:30</Typography> 
      </FlexBetween2 >
      <FlexBetween2>
      <LocationOnOutlined sx={{ color: 'primary', fontSize: '1rem' }}/>
      <Typography color={medium}>Main Auditorium</Typography>
      </FlexBetween2>

      <Typography color={medium} m="0.5rem 0">
        Your pathway to stunning and immaculate beauty and made sure your skin
        is exfoliating skin and shining like light.
      </Typography>
      <Divider />
    </WidgetWrapper>

  );
};

export default AdvertWidget;
