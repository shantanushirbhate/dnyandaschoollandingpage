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
  const colors = ["#c20d0d", "#ff7f00", "#ffff00", "#00ff00"];
  
 const navItems = [
  { label: "Home", id: "home" },
  { label: "Services", id: "services" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
  ];
const handleScroll = (id) => {
  const section = document.getElementById(id);

  if (section) {
    const yOffset = -80; // 👈 navbar height
    const y =
      section.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  }

  setOpen(false);
};

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
      color: colors[i % colors.length],
      animation: "fadeSlideUp 0.8s ease forwards",
      animationDelay: `${i * 0.2}s`,
      fontWeight: "bold",

      // ✅ Responsive font size
      fontSize: {
        xs: "1.2rem",   // mobile
        sm: "1.5rem",   // small tablets
        md: "2rem",     // desktop
        lg: "2.5rem",   // large screens
      },

      // ✅ Responsive spacing
      mr: {
        xs: 0.5,
        sm: 1,
      },

      // ✅ Better wrapping on mobile
      display: "inline-block",
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
    key={item.id}
    onClick={() => handleScroll(item.id)}
    sx={{
      cursor: "pointer",
      "&:hover": { color: "#FFD93D" },
    }}
  >
    {item.label}
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
    key={item.id}
    onClick={() => handleScroll(item.id)}
    sx={{
      cursor: "pointer",
      "&:hover": { color: "#FFD93D" },
    }}
  >
    {item.label}
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