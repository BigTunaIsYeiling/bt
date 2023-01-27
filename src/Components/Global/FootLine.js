import { Box, Stack } from "@mui/material";
import { CustomTheme } from "../../Utilities/Theme";
const FootLine = ({ innerHeight }) => {
  const { fonts } = CustomTheme;
  const GetScrollPadd = () => {
    if (innerHeight > 2000) {
      return "0";
    } else {
      return "2rem";
    }
  };
  return (
    <Box marginTop={"7rem"} paddingBottom={GetScrollPadd}>
      <Stack
        alignItems="center"
        justifyContent={"space-between"}
        direction="row"
      >
        <Box
          fontSize={{ xs: "13px", sm: "15px" }}
          fontFamily={fonts.font5}
          fontWeight={300}
        >
          Based in{" "}
          <Box component={"span"} sx={{ opacity: 0.6 }}>
            EGYPT
          </Box>
        </Box>
        <Box
          fontSize={{ xs: "13px", sm: "15px" }}
          fontFamily={fonts.font5}
          fontWeight={300}
        >
          <Box component={"span"} sx={{ opacity: 0.6 }}>
            ©
          </Box>
          2023
        </Box>
      </Stack>
    </Box>
  );
};
export default FootLine;