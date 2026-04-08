"use client";

import React from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { motion } from "framer-motion";

export default function Contact() {
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
            <Card sx={{ borderRadius: "16px" }}>
              <CardContent sx={{ display: "flex", gap: 2 }}>
                <PhoneIcon color="primary" />
                <Box>
                  <Typography fontWeight="bold">Phone</Typography>
                  <Typography>+91 8408004767</Typography>
                </Box>
              </CardContent>
            </Card>

            {/* Email */}
            <Card sx={{ borderRadius: "16px" }}>
              <CardContent sx={{ display: "flex", gap: 2 }}>
                <EmailIcon color="primary" />
                <Box>
                  <Typography fontWeight="bold">Email</Typography>
                  <Typography>dnyanda.contact@gmail.com</Typography>
                </Box>
              </CardContent>
            </Card>

            {/* Address */}
            <Card sx={{ borderRadius: "16px" }}>
              <CardContent sx={{ display: "flex", gap: 2 }}>
                <LocationOnIcon color="primary" />
                <Box>
                  <Typography fontWeight="bold">Address</Typography>
                  <Typography>Chikhli, Maharashtra, India</Typography>
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
                  <TextField fullWidth label="Name" />
                </Grid>

                <Grid item xs={12}>
                  <TextField fullWidth label="Phone" />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    multiline
                    rows={4}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    fullWidth
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
        <Typography
          variant="h5"
          textAlign="center"
          fontWeight="bold"
          mb={3}
        >
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
            src="https://maps.google.com/maps?q=Chikhli%20Maharashtra&t=&z=13&ie=UTF8&iwloc=&output=embed"
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