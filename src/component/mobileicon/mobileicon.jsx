import React from "react";
import { Box, IconButton, Tooltip } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function MobileIcon() {
  const phoneNumber = "8408004767";

  return (
    <Box
      sx={{
        position: "fixed",
        right: 16,
        top: "80%",
        transform: "translateY(-50%)",
        display: "flex",
        flexDirection: "column",
        gap: 2,
              zIndex: 9999,
      }}
    >
      {/* Call Button */}
      <Tooltip title="Call Now">
        <IconButton
          component="a"
          href={`tel:${phoneNumber}`}
          sx={{
            backgroundColor: "#1976d2",
            color: "#fff",
            "&:hover": { backgroundColor: "#125aa0" },
          }}
        >
          <CallIcon />
        </IconButton>
      </Tooltip>

      {/* WhatsApp Button */}
      <Tooltip title="WhatsApp">
        <IconButton
          component="a"
          href={`https://wa.me/91${phoneNumber}`}
          target="_blank"
          sx={{
            backgroundColor: "#25D366",
            color: "#fff",
            "&:hover": { backgroundColor: "#1ebe5d" },
          }}
        >
          <WhatsAppIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
}