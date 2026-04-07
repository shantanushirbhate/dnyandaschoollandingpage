"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import SchoolIcon from "@mui/icons-material/School";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { motion } from "framer-motion";

const programs = [
  {
    title: "Playgroup",
    desc: "Fun-based learning for toddlers to develop social and motor skills.",
    icon: <ChildCareIcon sx={{ color: "#FFD54F" }} fontSize="large" />,
    emoji: "🧩",
  },
  {
    title: "Nursery",
    desc: "Introduction to basic concepts through play and creativity.",
    icon: <EmojiPeopleIcon sx={{ color: "#66BB6A" }} fontSize="large" />,
    emoji: "🎨",
  },
  {
    title: "Jr. KG",
    desc: "Building early academic skills with interactive learning.",
    icon: <SchoolIcon sx={{ color: "#1976D2" }} fontSize="large" />,
    emoji: "📘",
  },
  {
    title: "Sr. KG",
    desc: "Preparing children for primary school with structured education.",
    icon: <MenuBookIcon sx={{ color: "#FF7043" }} fontSize="large" />,
    emoji: "✏️",
  },
];

export default function Programs() {
  return (
    <Box
      sx={{
        position: "relative",
        py: 10,
        px: 3,
        overflow: "hidden",
        background: "linear-gradient(135deg, #E3F2FD, #FFF8E1)",
      }}
    >
      {/* 🌊 Wave Top */}
      <Box
        component="svg"
        viewBox="0 0 1440 200"
        sx={{ position: "absolute", top: 0, left: 0, width: "100%" }}
      >
        <path
          fill="#ffffff"
          d="M0,100L60,120C120,140,240,180,360,170C480,160,600,100,720,80C840,60,960,80,1080,100C1200,120,1320,140,1380,150L1440,160V0H0Z"
        />
      </Box>

      {/* 🟣 Blob */}
      <Box
        sx={{
          position: "absolute",
          width: "300px",
          height: "300px",
          background: "#BBDEFB",
          borderRadius: "50% 30% 60% 40%",
          top: "-100px",
          right: "-100px",
          opacity: 0.4,
        }}
      />

      {/* Heading */}
      <Typography
        variant="h4"
        textAlign="center"
        fontWeight="bold"
        color="#1976D2"
        mb={6}
        sx={{ position: "relative", zIndex: 2 }}
      >
        Our Programs 
      </Typography>

      {/* Cards */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
          gap: 4,
          maxWidth: "900px",
          mx: "auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        {programs.map((item, index) => (
          <Box
            component={motion.div}
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ y: -10, scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            sx={{
              p: 3,
              borderRadius: "20px",
              backgroundColor: "#fff",
              textAlign: "center",
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
              position: "relative",
              cursor: "pointer",
            }}
          >
            {/* Emoji */}
            <Typography
              sx={{
                position: "absolute",
                top: "-15px",
                right: "15px",
                fontSize: "28px",
              }}
            >
              {item.emoji}
            </Typography>

            {/* Icon */}
            <Box sx={{ mb: 1 }}>{item.icon}</Box>

            {/* Title */}
            <Typography variant="h6" fontWeight="bold" mb={1}>
              {item.title}
            </Typography>

            {/* Description */}
            <Typography variant="body2" color="text.secondary">
              {item.desc}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}