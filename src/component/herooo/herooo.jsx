import React, { useState, useEffect } from "react";

import { Box, Typography, Button } from "@mui/material";

import Brochure from "../../assets/broucher.jpeg";

import Boy from "../../assets/boy.png";
import Girl from "../../assets/girl.png";

import StarIcon from "@mui/icons-material/Star";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { motion } from "framer-motion";

// 🔹 ABCD Animation (Arrow Function)
const ABCDAnimation = () => {
  const letters = ["A", "B", "C", "D"];
  const colors = ["#FF6B6B", "#4ECDC4", "#FFD93D", "#6C5CE7"];

  return (
    <Box
      sx={{
        display: "flex",
        gap: { xs: 1, sm: 2 }, // smaller gap on mobile
        mt: 2,
        justifyContent: { xs: "center", md: "flex-start" },
      }}
    >
      {letters.map((letter, index) => (
        <motion.div
          key={index}
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: index * 0.2,
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              color: colors[index],

              // ✅ Responsive font size
              fontSize: {
                xs: "32px", // mobile
                sm: "48px", // small tablets
                md: "64px", // desktop
              },
            }}
          >
            {letter}
          </Typography>
        </motion.div>
      ))}
    </Box>
  );
};

export default function Herooo({ id }) {
  // const colors = ["#c20d0d", "#7cc911ab", "#ffff00", "#6167c4", "#ff0000", "#00ff00"];

  const handleScrollToContact = () => {
    const section = document.getElementById("contact");

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Box
        id={id}
        sx={{
          width: "100%",
          height: { xs: "90vh", md: "100vh" },

          position: "relative",
        }}
      >
        {/* Floating Icons */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: 3,
            pointerEvents: "none",
          }}
        >
          {/* Star */}
          <StarIcon
            sx={{
              position: "absolute",
              top: "20%",
              left: "10%",
              fontSize: 40,
              color: "#FFD93D",
              animation: "float 4s ease-in-out infinite",
            }}
          />

          {/* Smile */}
          {/* <EmojiEmotionsIcon
            sx={{
              position: "absolute",
              top: "80%",
              left: "60%",
              fontSize: 100,
              color: "#FFD93D",
              animation: "float 5s ease-in-out infinite",
            }}
          /> */}

          {/* Book */}
          <MenuBookIcon
            sx={{
              position: "absolute",
              top: "30%",
              right: "15%",
              fontSize: 40,
              color: "#FFD93D",
              animation: "float 6s ease-in-out infinite",
            }}
          />
        </Box>
        {/* Background Image */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            // backgroundImage: `url(${HeroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 1,
          }}
        />
        {/* Boy Image */}
        <Box
          component="img"
          src={Boy}
          alt="boy"
          sx={{
            position: "absolute",
            bottom: { xs: "0", md: "0" },
            left: { xs: "5%", md: "50%" },
            width: { xs: "120px", md: "220px" },
            zIndex: 2,
            animation: "float 4s ease-in-out infinite",
          }}
        />

        {/* Girl Image */}
        <Box
          component="img"
          src={Girl}
          alt="girl"
          sx={{
            position: "absolute",
            bottom: { xs: "0", md: "0" },
            right: { xs: "5%", md: "10%" },
            width: { xs: "120px", md: "220px" },
            zIndex: 2,
            animation: "float 5s ease-in-out infinite",
          }}
        />

        {/* 🎨 Background */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, #d2d4a4, #fdfdfd)",
            zIndex: 0,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            width: "250px",
            height: "250px",
            background: "#BBDEFB",
            borderRadius: "50% 30% 60% 40%",
            top: "-80px",
            // right: "px",
            opacity: 0.3,
            zIndex: 1,
          }}
        />
        {/* Overlay */}
        {/* 🎨 Background Design */}
        {/* 🌊 Wave Top */}
        <Box
          component="svg"
          viewBox="0 0 1440 200"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            zIndex: 1,
          }}
        >
          <path
            fill="#ffffff"
            d="M0,100L60,120C120,140,240,180,360,170C480,160,600,100,720,80C840,60,960,80,1080,100C1200,120,1320,140,1380,150L1440,160V0H0Z"
          />
        </Box>

        {/* Content */}
        <Box
          sx={{
            position: "relative",
            zIndex: 3,
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", md: "flex-start" },
            textAlign: { xs: "center", md: "left" },
            px: { xs: 2, md: 8 },

            // ✅ ADD THIS
            pt: { xs: 6, md: 0 },
            pb: { xs: 10, md: 0 }, // space for images

            color: "#333", // since background is light
          }}
        >
          <Box maxWidth="600px">
            {/* Heading */}
            <ABCDAnimation />
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "28px", md: "48px" },
                mb: 2,
              }}
            >
              Building Bright Futures for Your Child
            </Typography>

            {/* Subheading */}
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "20px" },
                mb: 3,
              }}
            >
              Playgroup • Nursery • Jr. KG • Sr. KG
            </Typography>

            {/* Buttons */}
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
                  backgroundColor: "#FFD93D",
                  color: "#000",
                  fontWeight: "bold",
                  borderRadius: "25px",
                  mx: { xs: "10px" },
                  "&:hover": {
                    backgroundColor: "#ffcc00",
                  },
                }}
              >
                Enroll Now
              </Button>

              <Button
                component="a" // 👈 makes it a download link
                href={Brochure} // 👈 file path
                download="Dnyanda-Brochure" // 👈 file name
                variant="outlined"
                sx={{
                  borderColor: "#fff",
                  color: "#060101",
                  borderRadius: "25px",
                  px: 4,
                  "&:hover": {
                    borderColor: "#cfc196",
                    color: "#613dff",
                  },
                }}
              >
                Explore Programs
              </Button>
              <Typography
                sx={{
                  display: { xs: "block", md: "none" }, // mobile only
                  mt: 2,
                  fontSize: "16px",
                  fontWeight: "bold",
                  textAlign: "center",
                  animation: "cartoonBounce 1s ease", // ✅ unchanged
                }}
              ></Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
