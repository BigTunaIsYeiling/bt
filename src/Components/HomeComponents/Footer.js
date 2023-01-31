import { Box } from "@mui/material";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
import SplitType from "split-type";
import { CustomTheme } from "../../Utilities/Theme";
import FootLine from "../Global/FootLine";
gsap.registerPlugin(ScrollTrigger);
const Footer = ({ innerHeight }) => {
  const { fonts } = CustomTheme;
  useEffect(() => {
    const footelm = document.querySelector(".foot-main");
    const foot2elm = document.querySelector(".foot2");
    const foot1elm = document.querySelector(".foot1");
    const Foot2 = new SplitType(foot2elm, {
      types: "words, chars",
    });
    const Foot1 = new SplitType(foot1elm, {
      types: "words, chars",
    });
    const ctx = gsap.context(() => {
      gsap.from(Foot1.chars, {
        yPercent: 100,
        opacity: 0,
        ease: "expo.inOut",
        stagger: {
          amount: 0.5,
          from: "random",
        },
        scrollTrigger: {
          trigger: footelm,
          start: "top 70%",
        },
      });
      gsap.from(Foot2.chars, {
        yPercent: 100,
        opacity: 0,
        ease: "expo.inOut",
        stagger: {
          amount: 0.5,
          from: "random",
        },
        scrollTrigger: {
          trigger: foot2elm,
          start: "top 70%",
        },
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <Box marginTop={"8rem"} className="foot-main">
      <Box
        fontSize={{ xs: "5vw", sm: "4.5vw" }}
        fontFamily={fonts.font5}
        fontWeight={300}
        className="foot1"
      >
        Feel free to say Hi!
        <br />
        <Box component={"span"} sx={{ opacity: 0.6 }}>
          ahmedenany9812@gmail.com
        </Box>
      </Box>
      <Box
        fontSize={{ xs: "5vw", sm: "4.5vw" }}
        fontFamily={fonts.font5}
        fontWeight={300}
        marginTop="4rem"
        className="foot2"
      >
        If you`d like to chew the fat catch me on{" "}
        <Box component={"span"} sx={{ opacity: 0.6 }}>
          Twitter
        </Box>{" "}
        or you can check my{" "}
        <Box component={"span"} sx={{ opacity: 0.6 }}>
          Resume
        </Box>
      </Box>
      <FootLine innerHeight={innerHeight} />
    </Box>
  );
};
export default Footer;
