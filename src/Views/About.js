import { Box, Container, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CustomTheme } from "../Utilities/Theme";
const About = () => {
  const { fonts } = CustomTheme;
  const navigate = useNavigate();
  return (
    <Container maxWidth="xl">
      <Box paddingX={{ xs: "0rem", md: "2rem" }} paddingY="0.5rem">
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
        <Box marginLeft={{ xs: 0, md: "4rem" }}>
          <Box
            component={"p"}
            fontWeight={300}
            fontFamily={fonts.font5}
            fontSize={{ xs: "11vw", md: "10vw" }}
            letterSpacing={{ xs: "-1px", md: "-5px" }}
          >
            HOLA!
          </Box>
          <Box
            component={"p"}
            fontWeight={300}
            fontFamily={fonts.font5}
            fontSize={{ xs: "7vw", md: "3vw" }}
            letterSpacing={{ xs: "-1px", md: "-2px" }}
            marginTop={"1rem"}
          >
            It’s Ahmed , A self Taught fullstack js developer and problem solver
          </Box>
          <Stack direction={"column"} spacing="2rem" paddingBottom={"1rem"}>
            <Box
              component={"p"}
              fontWeight={400}
              fontFamily={fonts.hom}
              fontSize="14px"
              lineHeight={"1.9em"}
              letterSpacing="0.5px"
              marginTop={"2rem"}
            >
              I’ve been starting web design with the common skills like HTML
              ,CSS And it was pretty good as a start about 2 years ago Then i’ve
              been turning into javascript lord know that was tuff for guy like
              me looking into that large space of the open sources In addition
              to my undergraduate studies. <br />
              I took Vue js As a start after basics then i’ve turned to React js
              .
              <br /> To raise my chances i wanted to get into API so i ended up
              learning Node And express
              <br />
            </Box>
            <Box
              component={"p"}
              fontWeight={400}
              fontFamily={fonts.hom}
              fontSize="14px"
              lineHeight={"1.9em"}
              letterSpacing="0.5px"
            >
              Fast forward to 2022 and I’ve tried it all Web Design, Animation
              and fullstack Applications Everything I have done, small or big,
              has been a vital stepping stone for where I am today.
            </Box>
            <Box
              component={"p"}
              fontWeight={400}
              fontFamily={fonts.hom}
              fontSize="14px"
              lineHeight={"1.9em"}
              letterSpacing="0.5px"
            >
              Dude! fell free to check my{" "}
              <Box position={"relative"} component="span">
                <Box
                  position={"absolute"}
                  sx={{
                    bottom: 0,
                    backgroundColor: "white",
                    height: "1px",
                    width: "100%",
                    left: 0,
                    right: 0,
                  }}
                />
                RESUME
              </Box>{" "}
              if You’d like to chew the fat catch me on{" "}
              <Box
                position={"relative"}
                component="span"
                onClick={() => navigate("/contact", { replace: true })}
              >
                <Box
                  position={"absolute"}
                  sx={{
                    bottom: 0,
                    backgroundColor: "white",
                    height: "1px",
                    width: "100%",
                    left: 0,
                    right: 0,
                  }}
                />
                CONTACTS
              </Box>{" "}
            </Box>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};
export default About;