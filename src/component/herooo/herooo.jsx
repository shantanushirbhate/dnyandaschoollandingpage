"use client";

import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

import Brochure from "../../assets/broucher.jpeg";
import Boy from "../../assets/boy.png";
import Girl from "../../assets/girl.png";

export default function Herooo({ id }) {
  const handleScrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };
  const ABCDAnimation = () => {
    const letters = ["A", "B", "C", "D"];
    const colors = ["#FF6B6B", "#4ECDC4", "#FFD93D", "#6C5CE7"];

    return (
      <Box
        sx={{
          display: "flex",
          gap: { xs: 1, sm: 2 },
          mb: 1,
          justifyContent: { xs: "center", md: "flex-start" },
        }}
      >
        {letters.map((letter, index) => (
          <motion.div
            key={index}
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              delay: index * 0.2,
            }}
          >
            <Typography
              sx={{
                fontFamily: "'Baloo 2', cursive",
                fontWeight: "bold",
                fontSize: { xs: "30px", md: "52px" },
                lineHeight: 1.2,
                mb: 2,

                color: colors[index],
              }}
            >
              {letter}
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
        fontFamily: "'Poppins', sans-serif",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        px: { xs: 2, md: 8 },
        py: { xs: 6, md: 0 },
        position: "relative",
        overflow: "hidden",

        // 🎨 Clean Gradient Background
        background:
          "linear-gradient(135deg, #E3F2FD 0%, #FFF8E1 50%, #E8F5E9 100%)",
      }}
    >
      {/* 🌈 Soft Circle Background */}
      <Box
        sx={{
          position: "absolute",
          width: 300,
          height: 300,
          background: "#90CAF9",
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
          background: "#FFE082",
          borderRadius: "50%",
          bottom: "-100px",
          left: "-80px",
          opacity: 0.3,
        }}
      />

      {/* 👦👧 Images Section */}
      <Box
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
      </Box>

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
        <ABCDAnimation />

        {/* 🧠 Heading */}
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "28px", md: "48px" },
            lineHeight: 1.2,
            mb: 2,
              fontFamily: "'Baloo 2', cursive",
          }}
        >
          Building Bright Futures for Your Child
        </Typography>

        {/* 📘 Subheading */}
        <Typography
          sx={{
            fontSize: { xs: "16px", md: "18px" },
            color: "#555",
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
      </Box>
    </Box>
  );
}
