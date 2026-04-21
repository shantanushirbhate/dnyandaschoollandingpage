"use client";

import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import SunImage from "../../assets/sunimage.png"
import Brochure from "../../assets/broucher.jpeg";
// import KidsImage from "../../assets/cartoongrass 1.png"
import AbcdKids from "../../assets/childadded.png"
import MobileImage from "../../assets/mobile.png"
import LogoImageHero from "../../assets/sxhoolname.png"




export default function Herooo({ id }) {
  const handleScrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };
const ABCDAnimation = () => {
  const words = ["Dnyanda", "Global", "Pre", "School"];
  const colors = ["#FF6B6B", "#4ECDC4", "#FFD93D", "#6C5CE7"];

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap", // ✅ important for mobile
        gap: { xs: 1, sm: 2 },
        mb: 1.5,
        justifyContent: { xs: "center", md: "flex-start" },
      }}
    >
      {words.map((word, index) => (
        <motion.div
          key={index}
          initial={{ y: 0 }}
          animate={{ y: [0, -8, 0] }} // ✅ softer animation
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 1, // ✅ pause between loops
            delay: index * 0.3, // ✅ staggered effect
            ease: "easeInOut",
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Baloo 2', cursive",
              fontWeight: "bold",
              fontSize: {
                xs: "20px",   // ✅ smaller for mobile
                sm: "28px",
                md: "48px",
              },
              lineHeight: 1.2,
              color: colors[index],
              whiteSpace: "nowrap", // ✅ keeps words intact
            }}
          >
            {word}
          </Typography>
        </motion.div>
      ))}
    </Box>
  );
};

  return (
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

    // ✅ Responsive background image
    backgroundImage: {
      xs: `url(${MobileImage})`,   // 📱 mobile
      sm: `url(${AbcdKids})`,      // 💻 tablet+
      md: `url(${AbcdKids})`,
    },

    backgroundSize: "cover",
    backgroundPosition: {
      xs: "center bottom",   // better for mobile layout
      md: "right center",
    },
    backgroundRepeat: "no-repeat",
  }}
>

      {/* 🌈 Soft Circle Background */}
      {/* <Box
        sx={{
          position: "absolute",
          width: 300,
          height: 300,
          background: "#73f707",
          borderRadius: "50%",
          top: "-80px",
          right: "-80px",
          opacity: 0.3,
        }}
      /> */}

      {/* 🌈 Bottom Circle */}
      {/* <Box
        sx={{
          position: "absolute",
          width: 250,
          height: 250,
          background: "#ffff40",
          borderRadius: "50%",
          bottom: "-100px",
          left: "-80px",
          opacity: 0.3,
        }}
      /> */}

      {/* 👦👧 Images Section */}
      {/* <Box
        sx={{
          position: "absolute",
          bottom: 0,
          right: { xs: "0", md: "5%" },
          display: "flex",
          alignItems: "flex-end",
          gap: 2,
          zIndex: 2,
        }}
      >
        <motion.img
          src={Boy}
          alt="boy"
          style={{
            width: "140px",
          }}
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        <motion.img
          src={Girl}
          alt="girl"
          style={{
            width: "140px",
          }}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </Box> */}

      {/* 🌤️ Floating Decorative Images */}
<Box
  sx={{
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    zIndex: 1,
    pointerEvents: "none",
  }}
/>







      {/* 📦 Content */}

    <Box
  sx={{
    maxWidth: "600px",
    zIndex: 3,
    textAlign: "center",   // ✅ always center
    mx: "auto",            // ✅ center horizontally
  }}
>
  {/* 🔤 ABCD Animation */}
<Box
   sx={{
    display: "flex",
    justifyContent: "center",
    mb: 2,

    // ✅ responsive sizing
    "& img": {
      width: {
        xs: "220px",   // 📱 mobile (bigger)
        sm: "300px",   // 📱 tablet
        md: "420px",   // 💻 desktop
        lg: "500px",   // 🖥️ large screen
      },
    },
  }}
>
  <motion.img
    src={LogoImageHero}
    alt="School Logo"
    style={{
      width: "100%",      // let sx control actual size
      height: "auto",
      maxWidth: "100%",
      filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.2))",
    }}
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
            
  />
</Box>

  {/* 🧠 Heading */}
  <Typography
    sx={{
      fontWeight: "bold",
      fontSize: { xs: "28px", md: "48px" },
      lineHeight: 1.2,
      mb: 2,
      fontFamily: "'Baloo 2', cursive",
      color: "#000000",
    }}
  >
    Building Bright Futures for Your Child
  </Typography>

  {/* 📘 Subheading */}
  <Typography
    sx={{
      fontSize: { xs: "16px", md: "18px" },
      color: "#030202",
      mb: 3,
      fontFamily: "'Baloo 2', cursive",
    }}
  >
    Playgroup • Nursery • Jr. KG • Sr. KG
  </Typography>

  {/* 🔘 Buttons */}
  <Box
    sx={{
      display: "flex",
      gap: 2,
      justifyContent: "center", // ✅ center buttons
      flexWrap: "wrap",
    }}
  >
    <Button
      variant="contained"
      onClick={handleScrollToContact}
      sx={{
        backgroundColor: "#1976D2",
        borderRadius: "25px",
        px: 4,
        fontFamily: "'Poppins', sans-serif",
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
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 600,
        borderRadius: "25px",
        px: 4,
        borderColor: "#1976D2",
        color: "#1976D2",
      }}
    >
      Explore Programs
    </Button>
  </Box>
</Box>
      
      </Box>
    
  );
}
