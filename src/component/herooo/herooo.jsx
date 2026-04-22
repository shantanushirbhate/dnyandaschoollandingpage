"use client";

import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";

import Brochure from "../../assets/broucher.jpeg";
import AbcdKids from "../../assets/New Image.png";
import BoyImage from "../../assets/boy.png";
import MobileImage from "../../assets/forMobile.png"
import GirlImage from "../../assets/girl.png";

export default function Herooo({ id }) {
  const handleScrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const { scrollY } = useScroll();

  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 768;

  // ✅ Parallax values
  // const bgY = useTransform(scrollY, [0, 500], isMobile ? [0, 0] : [0, -80]);
  const contentY = useTransform(scrollY, [0, 500], isMobile ? [0, 0] : [0, -40]);
  // const kidsY = useTransform(scrollY, [0, 500], isMobile ? [0, 0] : [0, -100]);

  return (
    <motion.div>
      {/* 🌄 Hero Section */}
      <Box
        id={id}
       sx={{
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  px: { xs: 2, md: 8 },
  py: { xs: 6, md: 0 },
  position: "relative",
  overflow: "hidden",
  fontFamily: "'Poppins', sans-serif",

  // ✅ Responsive images
  backgroundImage: {
    xs: `url(${MobileImage})`,
    md: `url(${AbcdKids})`,
  },

  // ✅ Best combination
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
}}
      >

        {/* 👦👧 Kids (Mobile only + Parallax) */}
        {/* <motion.div style={{ y: kidsY }}>
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              right: 0,
              display: { xs: "flex", md: "none" },
              gap: 2,
              zIndex: 2,
            }}
          >
            <motion.img
              src={BoyImage}
              alt="boy"
              style={{ width: "100px" }}
             
            />
            <motion.img
              src={GirlImage}
              alt="girl"
              style={{ width: "100px" }}
            
            />
          </Box>
        </motion.div> */}

        {/* 📦 Content with Parallax */}
        <motion.div style={{ y: contentY }}>
          <Box
            sx={{
              maxWidth: "600px",
              zIndex: 3,
              textAlign: "center",
              mx: "auto",
            }}
          >
            {/* 🔷 Logo */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mb: 2,
                "& img": {
                  width: {
                    xs: "220px",
                    sm: "300px",
                    md: "420px",
                    lg: "500px",
                  },
                },
              }}
            >
           
            </Box>

            {/* 🧠 Heading */}
            {/* <Typography
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "28px", md: "48px" },
                lineHeight: 1.2,
                mb: 2,
                fontFamily: "'Baloo 2', cursive",
                color: "#000",
              }}
            >
              Building Bright Futures for Your Child
            </Typography> */}

            {/* 📘 Subheading */}
            {/* <Typography
              sx={{
                fontSize: { xs: "16px", md: "18px" },
                color: "#030202",
                mb: 3,
                fontFamily: "'Baloo 2', cursive",
              }}
            >
              Playgroup • Nursery • Jr. KG • Sr. KG
            </Typography> */}

            {/* 🔘 Buttons */}
            <Box
              sx={{
                display: "flex",
                gap: 2,
                justifyContent: "center",
                flexWrap: "wrap",
                marginTop:{xs:"100px" ,md:"500px"}
              }}
            >
              <Button
                variant="contained"
                onClick={handleScrollToContact}
                sx={{
                  backgroundColor: "#1976D2",
                  borderRadius: "25px",
                  px: 4,
                  fontWeight: 600,
              
                }}
              >
                Enroll Now
              </Button>

              <Button
                component="a"
                href={Brochure}
                download="Dnyanda-Brochure"
                variant="outlined"
                sx={{
                  borderRadius: "25px",
                  px: 4,
                  borderColor: "#1976D2",
                  color: "#1976D2",
                  fontWeight: 600,
                }}
              >
                Explore Programs
              </Button>
            </Box>
          </Box>
        </motion.div>
      </Box>
<Box
  sx={{
    position: "absolute",
    bottom: {
      xs: "-98px",   // 📱 push up more on mobile
      sm: "-4px",
      md: "-45px",   // 💻 normal for desktop
    },
    left: 0,
    width: "100%",
    zIndex: 3,
    lineHeight: 0,
  }}
>
  <svg
    viewBox="0 0 1440 200"
    preserveAspectRatio="none"
    style={{
      width: "100%",
      height: "clamp(80px, 12vw, 160px)",
      display: "block",
    }}
  >
    <path
      d="M0,120 C200,40 400,200 720,120 C1000,60 1200,180 1440,120 L1440,200 L0,200 Z"
      fill="#ffffff"
    />
  </svg>
</Box>
    </motion.div>
    
  );
}