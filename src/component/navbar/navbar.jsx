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
import LogoName from "../../assets/sxhoolname.png"

export default function NavBar() {
  const [open, setOpen] = useState(false);
  // const colors = ["#d5e1b3", "#7cc911ab", "#ffff00", "#aaf922","#d5c2c2","#00ff00"];
  
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
// const text = "Dnyanda Global Pre School";

  return (
    <>
      {/* Navbar */}
      <Box
        sx={{
           right: 0,
          height: "80px",
          position: "fixed",   // 🔥 makes it overlay Hero
          top: 0,
          left: 0,
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: { xs: 2, md: 6 },
          color: "#ffffff",          // 🔥 visible on image
          background: "rgb(111, 78, 188)", // optional glass effect
          backdropFilter: "blur(20px)",   // 🔥 glassmorphism
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
            <Box
  component="img"
  src={LogoName}
  alt="logo name"
  sx={{
    height: { xs: "100px", md: "150px" },
    objectFit: "contain",
  }}
/>
<Typography
  sx={{
    fontWeight: "bold",
    display: "flex",
    flexWrap: "wrap", // ✅ important for mobile
  }}
>
  {/* {text.split("").map((char, i) => (
    <Box
      key={i}
      component="span"
      sx={{
        opacity: 0,
        color: char === " " ? "transparent" : colors[i % colors.length],
        animation: "fadeSlideUp 0.6s ease forwards",
        animationDelay: `${i * 0.05}s`,
        fontWeight: "bold",
  fontFamily: "'Baloo 2', cursive",
        fontSize: {
          xs: "1.3rem",
          sm: "1.5rem",
          md: "2rem",
          lg: "2.5rem",
        },

        // spacing for letters
        mr: char === " " ? 1 : 0,
      }}
    >
      {char}
    </Box>
  ))} */}
              
</Typography>
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
      fontFamily: "'Baloo 2', cursive",
      fontWeight: "bold",
      fontSize: { xs: "30px", md: "25px" },
              lineHeight: 1,
    
    }}
  >
    {item.label}
  </Typography>
))}

          <Button
              onClick={() => handleScroll("contact")}   
            variant="contained"
            sx={{
               fontFamily: "'Poppins', sans-serif",
  
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
              onClick={() => handleScroll("contact")}   
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