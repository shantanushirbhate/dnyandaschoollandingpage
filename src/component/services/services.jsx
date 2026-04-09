"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import PsychologyIcon from "@mui/icons-material/Psychology";
import ToysIcon from "@mui/icons-material/Toys";
import ComputerIcon from "@mui/icons-material/Computer";
import PeopleIcon from "@mui/icons-material/People";
import PersonIcon from "@mui/icons-material/Person";
import SecurityIcon from "@mui/icons-material/Security";
import VideocamIcon from "@mui/icons-material/Videocam";
import { motion } from "framer-motion";

const services = [
  {
    title: "Montessori Learning",
    desc: "Child-centered education focusing on independence and creativity.",
    icon: <SchoolIcon sx={{ color: "#1976D2" }} />,
  },
  {
    title: "Activity Based Learning",
    desc: "Hands-on activities to make learning fun and engaging.",
    icon: <ToysIcon sx={{ color: "#FFD54F" }} />,
  },
  {
    title: "Sensorial Tools",
    desc: "Tools that enhance sensory development and understanding.",
    icon: <PsychologyIcon sx={{ color: "#66BB6A" }} />,
  },
  {
    title: "Digital Learning Zone",
    desc: "Modern digital tools for interactive education.",
    icon: <ComputerIcon sx={{ color: "#FF7043" }} />,
  },
  {
    title: "Qualified Teachers",
    desc: "Experienced and caring educators for your child.",
    icon: <PeopleIcon sx={{ color: "#1976D2" }} />,
  },
  {
    title: "Individual Attention",
    desc: "Personal focus on each child's growth and needs.",
    icon: <PersonIcon sx={{ color: "#66BB6A" }} />,
  },
  {
    title: "Safe Campus",
    desc: "Secure and child-friendly environment.",
    icon: <SecurityIcon sx={{ color: "#FFD54F" }} />,
  },
  {
    title: "CCTV Monitoring",
    desc: "24/7 surveillance for safety and transparency.",
    icon: <VideocamIcon sx={{ color: "#FF7043" }} />,
  },
];

export default function Services({id}) {
  return (
    <Box
      id={id}
      sx={{
        py: 10,
        px: 3,
        background: "linear-gradient(135deg, #FFF8E1, #E3F2FD)",
      }}
    >
      {/* Heading */}
      <Typography
        variant="h4"
        textAlign="center"
        fontWeight="bold"
        color="#1976D2"
        mb={6}
      >
        Our Facilities
      </Typography>

      {/* Grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr 1fr",
          },
          gap: 3,
          maxWidth: "1100px",
          mx: "auto",
        }}
      >
        {services.map((item, index) => (
          <Box
            component={motion.div}
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 120, delay: index * 0.1 }}
            whileHover={{ y: -8, scale: 1.05 }} // desktop
            whileTap={{ scale: 0.92 }} // 📱 mobile press effect
            sx={{
              p: 3,
              borderRadius: "16px",
              backgroundColor: "#fff",
              textAlign: "center",
              boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
              cursor: "pointer",
              WebkitTapHighlightColor: "transparent", // remove blue tap highlight

              "&:active": {
                boxShadow: "0 4px 12px rgba(25,118,210,0.3)",
              },
            }}
          >
            {/* 🎨 Icon Circle */}
            <Box
              component={motion.div}
              whileTap={{ scale: 1.2, rotate: 5 }}
              sx={{
                width: 60,
                height: 60,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mx: "auto",
                mb: 2,
                background: "linear-gradient(135deg, #E3F2FD, #BBDEFB)",
              }}
            >
              {item.icon}
            </Box>

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
