"use client";

import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { motion } from "framer-motion";

// Sample Testimonials Data
const testimonials = [
  {
    name: "Priya Sharma",
    review: "Amazing school! My child loves coming here every day.",
    
    rating: 5,
  },
  {
    name: "Rahul Patil",
    review: "Very caring teachers and safe environment.",
 
    rating: 5,
  },
  {
    name: "Sneha Kulkarni",
    review: "Great learning experience with fun activities.",
    
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <Box sx={{ py: 10, px: 3, background: "#fff" }}>
      
      {/* Heading */}
      <Typography
        variant="h4"
        textAlign="center"
        fontWeight="bold"
        mb={6}
        color="text.primary"
        sx={{ fontFamily: "'Baloo 2', cursive",}}
      >
        ⭐ Testimonials
      </Typography>

      {/* Cards Container */}
      <Box
        display="flex"
        gap={4}
        flexWrap="wrap"
        justifyContent="center"
      >
        {testimonials.map((item, index) => (
          <Box
            key={index}
            component={motion.div}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card
              sx={{
                width: 300,
                borderRadius: "20px",
                p: 3,
                textAlign: "center",
                boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
              }}
            >
              <CardContent>
                
                {/* Profile Image */}
                <Avatar
                  src={item.image}
                  sx={{
                    width: 80,
                    height: 80,
                    margin: "0 auto 12px",
                  }}
                />

                {/* Name */}
                <Typography sx={{ fontFamily: "'Baloo 2', cursive",}}  variant="h6" fontWeight="bold">
                  {item.name}
                </Typography>

                {/* Stars */}
                <Box display="flex" justifyContent="center" my={1}>
                  {[...Array(item.rating)].map((_, i) => (
                    <StarIcon key={i} sx={{ color: "#FFD700" }} />
                  ))}
                </Box>

                {/* Review */}
                <Typography sx={{ fontFamily: "'Baloo 2', cursive",}} variant="body2" color="text.secondary">
                  "{item.review}"
                </Typography>

              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>

    </Box>
  );
}