"use client";

import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";

import SchoolImage from "../../assets/boy.png"


export default function Aboutus({id}) {
  return (
    <Box
      id={id}
      sx={{
        py: { xs: 6, md: 10 },
        px: 2,
        background: "linear-gradient(135deg, #E3F2FD, #FFF8E1)",
      }}
    >
      <Container maxWidth="lg">
        {/* Heading */}
        <Typography
          component={motion.h2}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          textAlign="center"
          sx={{
           fontFamily: "'Baloo 2', cursive",
    fontWeight: "bold",
    fontSize: { xs: "30px", md: "52px" },
    lineHeight: 1.2,
    mb: 2,
            color: "#1976D2",
          }}
        >
           About Us
        </Typography>

        {/* Top Section */}
        <Grid container spacing={5} alignItems="center">
          {/* LEFT TEXT */}
          <Grid item xs={12} md={6}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Typography fontWeight="bold"   sx={{
    fontFamily: "'Baloo 2', cursive",
    fontWeight: "bold",
    fontSize: { xs: "25px", md: "25px" },
  
  }} variant="h5" mb={2}>
                Welcome to Our School
              </Typography>

              <Typography   sx={{
    fontFamily: "'Baloo 2', cursive",
    
    fontSize: { xs: "20px", md: "20px" },
    lineHeight: 1.2,
    mb: 2,
  }}  color="text.secondary" mb={2}>
                We provide a nurturing and inspiring environment where children
                learn, explore, and grow with confidence. Our approach focuses on
                developing creativity, independence, and strong values.
              </Typography>

              <Typography  sx={{
    fontFamily: "'Baloo 2', cursive",
  
    fontSize: { xs: "20px", md: "20px" },
    lineHeight: 1.2,
    mb: 2,
  }}  color="text.secondary">
                With years of experience in early childhood education, we are
                committed to shaping young minds through innovative and
                child-friendly teaching methods.
              </Typography>
            </Box>
          </Grid>

          {/* RIGHT IMAGE */}
          <Grid item xs={12} md={6}>
            <Box
              component={motion.img}
              src={SchoolImage} // 👉 put image in public folder
              alt="About School"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              whileTap={{ scale: 0.95 }}
              sx={{
                width: "100%",
                maxWidth: 420,
                mx: "auto",
                display: "block",
                borderRadius: "20px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
              }}
            />
          </Grid>
        </Grid>

        {/* Mission & Vision */}
        <Grid container spacing={3} mt={5}>
          {[
            {
              title: "🎯 Our Mission",
              desc: "To create a joyful learning environment that nurtures curiosity, creativity, and lifelong learning.",
            },
            {
              title: "🌟 Our Vision",
              desc: "To empower children to become confident, responsible, and successful individuals.",
            },
          ].map((item, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.97 }}
                sx={{
                  p: 3,
                  borderRadius: "16px",
                  background: "#fff",
                  boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
                }}
              >
                <Typography  sx={ {fontFamily: "'Baloo 2', cursive"}} fontWeight="bold" mb={1}>
                  {item.title}
                </Typography>
                <Typography  sx={ {fontFamily: "'Baloo 2', cursive"}} color="text.secondary">{item.desc}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Why Choose Us */}
        <Box mt={6}>
          <Typography
            textAlign="center"
            fontWeight="bold"
            variant="h5"
            mb={3}
             sx={ {fontFamily: "'Baloo 2', cursive"}}

          >
            Why Choose Us?
          </Typography>

          <Grid container spacing={3}>
            {[
              "Experienced & caring teachers",
              "Safe & secure environment",
              "Modern learning methods",
              "Focus on overall development",
            ].map((point, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  sx={{
                    p: 2,
                    textAlign: "center",
                    borderRadius: "12px",
                    background: "#ffffff",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                  }}
                >
           
                  <Typography  sx={ {fontFamily: "'Baloo 2', cursive",  fontSize: { xs: "15px", md: "18px" },}} >{point}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}