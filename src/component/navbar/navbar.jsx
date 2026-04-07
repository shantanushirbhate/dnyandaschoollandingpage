import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../assets/schoollogo.png";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const navItems = ["Home", "Services", "About", "Contact"];

  return (
    <>
      {/* Navbar */}
      <Box
        sx={{
           right: 0,
          height: "80px",
          position: "absolute",   // 🔥 makes it overlay Hero
          top: 0,
          left: 0,
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: { xs: 2, md: 6 },
          color: "#fff",          // 🔥 visible on image
          background: "rgba(0,0,0,0.2)", // optional glass effect
          backdropFilter: "blur(6px)",   // 🔥 glassmorphism
        }}
      >
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <img src={Logo} alt="logo" style={{ height: "45px" }} />
        <Typography
  sx={{
    fontWeight: "bold",
    fontSize: { xs: "14px", md: "20px" },
    display: "flex",
    gap: "5px",
  }}
>
  {["Dnyanda", "Global", "Pre", "School"].map((word, i) => (
    <Box
      key={i}
      component="span"
      sx={{
        opacity: 0,
        animation: "fadeSlideUp 0.8s ease forwards",
        animationDelay: `${i * 0.2}s`, // 👈 delay each word
      }}
    >
      {word}
    </Box>
  ))}
</Typography>
        </Box>

        {/* Desktop Menu */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 4,
            alignItems: "center",
          }}
        >
          {navItems.map((item) => (
            <Typography
              key={item}
              sx={{
                cursor: "pointer",
                "&:hover": { color: "#FFD93D" },
              }}
            >
              {item}
            </Typography>
          ))}

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FFD93D",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "20px",
              "&:hover": { backgroundColor: "#ffcc00" },
            }}
          >
            Enroll Now
          </Button>
        </Box>

        {/* Mobile Menu Icon */}
        <IconButton
          sx={{ display: { xs: "block", md: "none" }, color: "#fff" }}
          onClick={() => setOpen(true)}
        >
          <MenuIcon />
        </IconButton>
      </Box>

      {/* Drawer (Mobile Menu) */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            width: 250,
            p: 3,
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          {navItems.map((item) => (
            <Typography
              key={item}
              sx={{
                fontSize: "18px",
                cursor: "pointer",
              }}
              onClick={() => setOpen(false)}
            >
              {item}
            </Typography>
          ))}

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FFD93D",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "20px",
              mt: 2,
            }}
          >
            Enroll Now
          </Button>
        </Box>
      </Drawer>
    </>
  );
}