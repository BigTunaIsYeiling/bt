import { Box, Container, Stack } from "@mui/material";
import { CustomTheme } from "../Utilities/Theme";
import { Projects } from "../Data/ProjectsData";
import { useNavigate } from "react-router-dom";
const Work = () => {
  const { fonts } = CustomTheme;
  const navigate = useNavigate();
  return (
    <Container maxWidth="xl">
      <Box
        maxHeight={"100vh"}
        paddingX={{ xs: "0rem", md: "2rem" }}
        paddingY="0.5rem"
        overflow={{ xs: "scroll", md: "hidden" }}
      >
        <Box component={"header"} marginBottom="4rem">
          <Box
            component={"p"}
            letterSpacing="5px"
            fontSize={"15px"}
            fontFamily={fonts.hom}
            fontWeight={300}
            onClick={() => navigate("/", { replace: true })}
            paddingY="1rem"
          >
            HOME
          </Box>
        </Box>
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems={{ xs: "flex-start", md: "flex-end" }}
          paddingBottom={{ xs: "0", md: "2rem" }}
        >
          <Stack
            direction={"column"}
            maxWidth={{ xs: "100%", md: "30%" }}
            spacing={"20px"}
            marginBottom={{ xs: "20px", md: "0" }}
          >
            <Box
              component={"p"}
              fontWeight={500}
              fontFamily={fonts.hom}
              fontSize="15px"
              letterSpacing="2px"
            >
              WORK
            </Box>
            <Box
              component={"p"}
              fontWeight={400}
              fontFamily={fonts.hom}
              fontSize="14px"
              lineHeight={"1.9em"}
              letterSpacing="0.5px"
            >
              That’s all i’ve done on this shortime journey starting from Web
              design templates to fullstack applications
            </Box>
            <Box
              component={"p"}
              fontWeight={400}
              fontFamily={fonts.hom}
              fontSize="14px"
              lineHeight={"1.9em"}
              letterSpacing="0.5px"
              display={{ xs: "none", md: "block" }}
            >
              I’m learning and gaining new skills every day Keeping up with the
              extreme envolving of the digital design
            </Box>
          </Stack>
          <Stack direction={"column"} marginLeft={{ xs: "0px", md: "12%" }}>
            {Projects.map((pro, i) => {
              return (
                <Stack
                  direction={"column"}
                  key={i}
                  component="div"
                  onClick={() => navigate(`${pro.nam}`, { replace: true })}
                >
                  <Box
                    component={"p"}
                    fontWeight={300}
                    fontFamily={fonts.font5}
                    fontSize={{ xs: "11vw", md: "5vw" }}
                    letterSpacing={{ xs: "-1px", md: "-5px" }}
                  >
                    {pro.tag}
                  </Box>
                  <Box
                    component={"p"}
                    fontWeight={300}
                    fontFamily={fonts.font5}
                    fontSize={{ xs: "2vw", md: "1vw" }}
                    sx={{ color: "whitesmoke", opacity: 0.7 }}
                  >
                    <Box component={"span"} letterSpacing={"-2px"}>
                      -------
                    </Box>{" "}
                    {pro.date}
                  </Box>
                </Stack>
              );
            })}

            <Stack direction={"column"}>
              <Box
                component={"p"}
                fontWeight={300}
                fontFamily={fonts.font5}
                fontSize={{ xs: "11vw", md: "5vw" }}
                letterSpacing={{ xs: "-1px", md: "-5px" }}
                sx={{ opacity: "0.2" }}
              >
                ROADMATH
              </Box>
              <Box
                component={"p"}
                fontWeight={300}
                fontFamily={fonts.font5}
                fontSize={{ xs: "2vw", md: "1vw" }}
                sx={{ color: "whitesmoke", opacity: 0.7 }}
              >
                <Box component={"span"} letterSpacing={"-2px"}>
                  -------
                </Box>{" "}
                SOON
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
};
export default Work;