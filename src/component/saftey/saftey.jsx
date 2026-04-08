"use client";

import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import SecurityIcon from "@mui/icons-material/Security";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import { motion } from "framer-motion";

// ✅ Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// ✅ Swiper styles (IMPORTANT)
import "swiper/css";
import "swiper/css/pagination";

import "./saftey.css"; // fix spelling

// Safety Data
const safetyItems = [
  {
    title: "CCTV Monitoring",
    icon: <CameraAltIcon fontSize="large" />,
    color: "#4CAF50",
  },
  {
    title: "Secure Campus",
    icon: <SecurityIcon fontSize="large" />,
    color: "#2196F3",
  },
  {
    title: "Child-Friendly Environment",
    icon: <ChildCareIcon fontSize="large" />,
    color: "#FF9800",
  },
  {
    title: "Hygiene & Safety",
    icon: <HealthAndSafetyIcon fontSize="large" />,
    color: "#E91E63",
  },
];

// Gallery Images
const galleryImages = [
  "https://images.unsplash.com/photo-1588072432836-e10032774350",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  "https://images.unsplash.com/photo-1577896851231-70ef18881754",
  "https://images.unsplash.com/photo-1596495577886-d920f1fb7238",
];

export default function Safety() {
  return (
    <Box sx={{ py: 8, px: 3, background: "#f9fbfd" }}>
      
      {/* ===== Safety Section ===== */}
      <Typography variant="h4" fontWeight="bold" textAlign="center" mb={5}>
        🛡️ Safety & Care
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {safetyItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box
              component={motion.div}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card
                sx={{
                  textAlign: "center",
                  borderRadius: "20px",
                  p: 2,
                  boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                  transition: "0.3s",
                  "&:hover": {
                    boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
                  },
                  "&:active": {
                    boxShadow: "0 4px 12px rgba(25,118,210,0.3)",
                  },
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      background: item.color,
                      color: "#fff",
                      width: 70,
                      height: 70,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 16px",
                    }}
                  >
                    {item.icon}
                  </Box>

                  <Typography variant="h6" fontWeight="bold">
                    {item.title}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* ===== Gallery Section ===== */}
      <Typography variant="h4" fontWeight="bold" textAlign="center" mt={10} mb={5}>
        📸 Our Gallery
      </Typography>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500 }}
        breakpoints={{
          600: { slidesPerView: 2 },
          900: { slidesPerView: 3 },
        }}
      >
        {galleryImages.map((img, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                height: 250,
                borderRadius: "16px",
                overflow: "hidden",
              }}
            >
              <img
                src={`${img}?w=800`}
                alt="gallery"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>

    </Box>
  );
}