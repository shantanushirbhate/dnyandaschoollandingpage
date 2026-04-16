"use client";

import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import UndrawImage from "../../assets/undraw_teaching_58yg.png"

export default function Learning() {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      sx={{
        py: { xs: 5, sm: 6, md: 10 },
        px: { xs: 2, sm: 3 },
        backgroundColor: "#f9fbff",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: { xs: 4, md: 8 },
          }}
        >
          {/* LEFT - TEXT */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            sx={{
              flex: 1,
              textAlign: { xs: "center", md: "left" }, // 👈 mobile center
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontFamily: "'Baloo 2', cursive",
    fontWeight: "bold",
    fontSize: { xs: "25px", md: "35px" },
    lineHeight: 1.2,
    mb: 2,
              
          
      
                background: "linear-gradient(45deg, #1976d2, #42a5f5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              🧠 Our Learning Approach
            </Typography>

            <Typography
              sx={{
                   fontFamily: "'Baloo 2', cursive",
    fontSize: { xs: "20px", md: "20px" },
    lineHeight: 1.2,
    mb: 2,
              
                color: "#555",
            
                
              }}
            >
              We follow the <b>Montessori Method</b>, where children learn at
              their own pace through exploration and hands-on experiences.
            </Typography>

            <Typography
              sx={{
                fontFamily: "'Baloo 2', cursive",
   fontSize: { xs: "20px", md: "20px" },
    lineHeight: 1.2,
    mb: 2,
              
                color: "#555",
              }}
            >
              Our <b>activity-based learning</b> makes education fun through
              games, creativity, and real-world interaction.
            </Typography>

            <Typography
              sx={{
              fontFamily: "'Baloo 2', cursive",
    fontSize: { xs: "20px", md: "20px" },
    lineHeight: 1.2,
    mb: 2,
              
                color: "#555",
              }}
            >
              We focus on <b>holistic child development</b> — building
              confidence, social skills, and creativity.
            </Typography>
          </Box>

          {/* RIGHT - IMAGE */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              mt: { xs: 2, md: 0 },
            }}
          >
            <Box
              component={motion.img}
              src={ UndrawImage}
              alt="Learning"
              animate={{
                y: [0, -10, 0], // 👈 floating effect
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileTap={{ scale: 0.95 }} // 👈 touch animation
              sx={{
                width: "100%",
                maxWidth: { xs: 260, sm: 320, md: 420 },
                borderRadius: "20px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                cursor: "pointer",
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}