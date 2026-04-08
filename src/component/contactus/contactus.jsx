"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  CardActionArea,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleWhatsApp = () => {
    if (!form.name || !form.phone || !form.message) {
      alert("Please fill all fields");
      return;
    }

    const text = `Name: ${form.name}\nPhone: ${form.phone}\nMessage: ${form.message}`;
    const url = `https://wa.me/918408004767?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <Box sx={{ py: 10, px: 3, background: "#f9fbfd" }}>
      {/* Heading */}
      <Typography
        variant="h4"
        fontWeight="bold"
        textAlign="center"
        mb={6}
        color="text.primary"
      >
        📞 Contact Us
      </Typography>

      <Grid container spacing={5}>
        {/* ===== Left: Contact Info ===== */}
        <Grid item xs={12} md={5}>
          <Box display="flex" flexDirection="column" gap={3}>
            {/* Phone */}
            <Card
              sx={{
                borderRadius: "16px",
                transition: "0.3s",
                "&:hover": {
                  boxShadow: 6,
                  transform: "scale(1.02)",
                },
              }}
            >
              <CardActionArea href="tel:+918408004767">
                <CardContent sx={{ display: "flex", gap: 2 }}>
                  <PhoneIcon color="primary" />
                  <Box>
                    <Typography fontWeight="bold">Phone</Typography>
                    <Typography>+91 8408004767</Typography>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>

            {/* Email */}
            <Card
              sx={{
                borderRadius: "16px",
                transition: "0.3s",
                "&:hover": {
                  boxShadow: 6,
                  transform: "scale(1.02)",
                },
              }}
            >
              <CardActionArea href="mailto:dnyanda.contact@gmail.com">
                <CardContent sx={{ display: "flex", gap: 2 }}>
                  <EmailIcon color="primary" />
                  <Box>
                    <Typography fontWeight="bold">Email</Typography>
                    <Typography>dnyanda.contact@gmail.com</Typography>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>

            {/* Address */}
            <Card
              sx={{
                borderRadius: "16px",
                transition: "0.3s",
                "&:hover": {
                  boxShadow: 6,
                  transform: "scale(1.02)",
                },
              }}
            >
              <CardContent sx={{ display: "flex", gap: 2 }}>
                <LocationOnIcon color="primary" />
                <Box>
                  <Typography fontWeight="bold">Address</Typography>
                  <Typography>
                    Vrundavan Colony, Siddhivinayak Nagar, Shegaon Rahatgaon
                    Road, Amravati
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Grid>

        {/* ===== Right: Contact Form ===== */}
        <Grid item xs={12} md={7}>
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card sx={{ p: 4, borderRadius: "20px" }}>
              <Typography variant="h6" mb={3} fontWeight="bold">
                Send Message
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    multiline
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    fullWidth
                    onClick={handleWhatsApp}
                    variant="contained"
                    size="large"
                    sx={{
                      borderRadius: "10px",
                      py: 1.5,
                    }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </Card>
          </Box>
        </Grid>
      </Grid>

      {/* ===== Google Map ===== */}
      <Box mt={8}>
        <Typography variant="h5" textAlign="center" fontWeight="bold" mb={3}>
          📍 Find Us Here
        </Typography>

        <Box
          sx={{
            width: "100%",
            height: "400px",
            borderRadius: "20px",
            overflow: "hidden",
          }}
        >
          <iframe
            title="map"
             src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3580.010432208136!2d77.76887537507925!3d20.97100798066397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sVrundavan%20Colony%2C%20Siddhivinayak%20Nagar%2C%20Shegaon%20Rahatgaon%20Road%2C%20Amravati%20!5e1!3m2!1sen!2sin!4v1775653326395!5m2!1sen!2sin" 
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
          />
        </Box>
      </Box>
    </Box>
  );
}
