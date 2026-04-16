"use client";

import React from "react";
import { Box, Typography, Grid, IconButton, Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Footer() {
  return (
    <Box sx={{ background: "#0d1b2a", color: "#fff", pt: 6, pb: 3, px: 3 }}>
      <Grid container spacing={4}>
        {/* ===== About / Logo ===== */}
        <Grid item xs={12} md={4}>
          <Typography
            sx={{ fontFamily: "Baloo 2, cursive" }}
            variant="h6"
            fontWeight="bold"
            fontSize="20px"
            mb={2}
          >
            🌟 Dnyanda Global Pre School
          </Typography>
          <Typography
            sx={{ fontFamily: "'Baloo 2', cursive", opacity: 0.8 }}
            variant="body2"
          >
            Providing quality education with love, care, and safety for every
            child.
          </Typography>
        </Grid>

        {/* ===== Quick Links ===== */}
        <Grid item xs={12} md={4}>
          <Typography
            sx={{ fontFamily: "'Baloo 2', cursive" }}
            variant="h6"
            fontWeight="bold"
            mb={2}
          >
            Quick Links
          </Typography>

          <Box
            sx={{ fontFamily: "'Baloo 2', cursive", fontSize: "20px" }}
            display="flex"
            flexDirection="column"
            gap={1}
          >
            <Link href="#" underline="none" color="inherit">
              Home
            </Link>
            <Link href="#" underline="none" color="inherit">
              About Us
            </Link>
            <Link href="#" underline="none" color="inherit">
              Services
            </Link>
            <Link href="#" underline="none" color="inherit">
              Contact
            </Link>
          </Box>
        </Grid>

        {/* ===== Contact Info ===== */}
        <Grid item xs={12} md={4}>
          <Typography
            sx={{ fontFamily: "'Baloo 2', cursive", fontSize: "20px" }}
            variant="h6"
            fontWeight="bold"
            mb={2}
          >
            Contact Info
          </Typography>

          <Box display="flex" alignItems="center" gap={1} mb={1}>
            <PhoneIcon fontSize="small" />
            <Typography
              sx={{ fontFamily: "'Baloo 2', cursive", fontSize: "20px" }}
              variant="body2"
            >
              +91 8408004767
            </Typography>
          </Box>

          <Box display="flex" alignItems="center" gap={1} mb={1}>
            <EmailIcon fontSize="small" />
            <Typography
              sx={{ fontFamily: "Baloo 2, cursive", fontSize: "20px" }}
              variant="body2"
            >
              dnyanda.contact@gmail.com
            </Typography>
          </Box>

          <Box display="flex" alignItems="center" gap={1}>
            <LocationOnIcon fontSize="small" />
            <Typography
              sx={{ fontFamily: "'Baloo 2', cursive", fontSize: "20px" }}
              variant="body2"
            >
              Chikhli, Maharashtra, India
            </Typography>
          </Box>

          {/* Social Icons */}
          <Box mt={2}>
            <IconButton sx={{ color: "#fff" }}>
              <FacebookIcon />
            </IconButton>
            <IconButton
              sx={{
                color: "#fff",
                "&:hover": {
                  color: "#E1306C", // Instagram color
                  transform: "scale(1.2)",
                },
              }}
              component="a"
              href="https://www.instagram.com/dnyanda.preschool?igsh=aG5kcDk2ODZpcHlj"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </IconButton>
            <IconButton sx={{ color: "#fff" }}>
              <YouTubeIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      {/* ===== Bottom Line ===== */}
      <Box
        mt={5}
        pt={3}
        textAlign="center"
        sx={{ borderTop: "1px solid rgba(255,255,255,0.2)" }}
      >
        <Typography
          variant="body2"
          sx={{
            opacity: 0.7,
            fontSize: "20px",
            fontFamily: "'Baloo 2', cursive",
          }}
        >
          © {new Date().getFullYear()} Dnyanda School. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
