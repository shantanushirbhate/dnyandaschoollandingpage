import React, { useState, useEffect } from "react";

import { Box, Typography, Button } from "@mui/material";
import HeroImage from "../../assets/xjyy_c6n5_210617.jpg";

import Boy from "../../assets/boy.png"
import Girl from "../../assets/girl.png"

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
        gap: { xs: 1, sm: 2 },   // smaller gap on mobile
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
                xs: "32px",   // mobile
                sm: "48px",   // small tablets
                md: "64px",   // desktop
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



export default function Hero() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showWelcome && (
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            left: "60%",
            zIndex: 5,
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            justifyContent: "center",
            //   background: "rgba(0,0,0,0.5)",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "2px", md: "30px" },
              fontWeight: "bold",
              color: "#fff",
              textAlign: "center",
              textShadow: "5px 5px 40px rgba(0,0,0,0.5)",

              animation: `
          cartoonBounce 1s ease,
          fadeOut 1s ease 2s forwards
        `,
            }}
          >
             Welcome to <br /> Dnyanda Global Preschool 
          </Typography>
        </Box>
      )}
      <Box
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
          <EmojiEmotionsIcon
            sx={{
              position: "absolute",
              top: "80%",
              left: "60%",
              fontSize: 100,
              color: "#FFD93D",
              animation: "float 5s ease-in-out infinite",
            }}
          />

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
            backgroundImage: `url(${HeroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 1,
          }}
        />

        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.5))",
            zIndex: 2,
          }}
        />

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
            color: "#fff",
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
                sx={{
                  backgroundColor: "#FFD93D",
                  color: "#000",
                  fontWeight: "bold",
                  borderRadius: "25px",
                  px: 4,
                  "&:hover": {
                    backgroundColor: "#ffcc00",
                  },
                }}
              >
                Enroll Now
              </Button>

              <Button
                variant="outlined"
                sx={{
                  borderColor: "#fff",
                  color: "#fff",
                  borderRadius: "25px",
                  px: 4,
                  "&:hover": {
                    borderColor: "#FFD93D",
                    color: "#FFD93D",
                  },
                }}
              >
                Explore Programs
              </Button>
              <Typography
                sx={{
                  display: { xs: "block", md: "none" }, // ✅ only mobile
                  mt: 2,
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#fff",
                  textAlign: "center",
                  animation: "cartoonBounce 1s ease",
                }}
              >
              Welcome to <br /> Dnyanda Global Preschool 
              </Typography>
            </Box>
                  </Box>
                
                
        </Box>
      </Box>
    </>
  );
}
