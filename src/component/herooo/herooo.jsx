"use client";

import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import SunImage from "../../assets/sunimage.png"
import Brochure from "../../assets/broucher.jpeg";
// import KidsImage from "../../assets/cartoongrass 1.png"
import AbcdKids from "../../assets/kidsplaying.png"



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

   background: "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)",
  }}
>
<Box
  component={motion.img}
  src={AbcdKids}
  alt="abcd kids"
  sx={{
    position: "absolute",
    right: { xs: "50%", sm: "10%", md: "2%" },
    transform: { xs: "translateX(50%)", sm: "none" },
    bottom: { xs: "-20px", sm: "-10px", md: "0" },

    // 🔥 increased size properly for all devices
    width: {
      xs: "340px",   // mobile (bigger impact)
      sm: "320px",   // tablet
      md: "750px",   // desktop
    },

    height: "auto",

    zIndex: 2,
    pointerEvents: "none",
  }}
 
/>
      {/* 🌈 Soft Circle Background */}
      <Box
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
      />

      {/* 🌈 Bottom Circle */}
      <Box
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
      />

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



 <motion.img
  src={SunImage}
  alt="sun"
  style={{
    position: "absolute",
    top: "120px",
    left: "60px",
    width: "clamp(90px, 8vw, 100px)",
    zIndex: 2,
    filter: "drop-shadow(0 0 10px rgba(255, 223, 0, 0.7))",
  }}
  animate={{
    y: [0, -12, 0],
  }}
  transition={{
    duration: 2.5,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>



      {/* 📦 Content */}

      <Box
        sx={{
          maxWidth: "600px",
          zIndex: 3,
          textAlign: { xs: "center", md: "left" },
          mx: { xs: "auto", md: 0 },
        }}
      >
    
        {/* 🔤 ABCD Animation */}
       <Box>
          <ABCDAnimation />
          {/* 👦 Kids Image Bottom Right */}

</Box>

        {/* 🧠 Heading */}
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "28px", md: "48px" },
            lineHeight: 1.2,
            mb: 2,
            fontFamily: "'Baloo 2', cursive",
              color:"#000000"
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
            justifyContent: { xs: "center", md: "flex-start" },
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
        {/* 🌿 Grass Bottom Image */}
{/* 🌿 Grass Bottom Image */}

      </Box>
      
      </Box>
    
  );
}
