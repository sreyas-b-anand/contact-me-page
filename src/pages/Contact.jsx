import React, { useState, useRef } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import ButtonAppBar from "../components/Appbar";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    const emailTemplate = {
      from_name: name,
      from_email: email,
      message: message,
    };
    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        emailTemplate,
        process.env.REACT_APP_USER_ID
      )
      .then(
        () => {
          console.log("Email sent succesfully");
        },
        () => {
          console.log("Failed to send email. Please try again.");
        }
      );

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <div>
        <ButtonAppBar />
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 3,
            maxWidth: 400,
            borderRadius: 2,
            boxShadow: 3,
            backgroundColor: "#2196f3",
            mx: "auto",
            my: 9,
          }}
        >
          <Typography
            variant="h5"
            mb={2}
            sx={{
              color: "white",
              fontFamily: "monospace",
              pt: 4,
            }}
          >
            Contact Me
          </Typography>

          <TextField
            id="outlined-basic"
            label="Your Name"
            type="search"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{
              backgroundColor: "white",
              border: "#999999",
              maxWidth: 450,
              color: "#2f2f2f",
            }}
            
          />
          <TextField
            id="outlined-basic"
            label="Your Email"
            type="search"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              backgroundColor: "white",
              border: "#999999",
              maxWidth: 250,
              color: "#2f2f2f",
            }}
          />
          <TextField
            id="outlined-basic"
            label="Your Message"
            type="search"
            variant="outlined"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            sx={{
              backgroundColor: "white",
              maxWidth: 250,
              color: "#2f2f2f",
            }}
            InputProps={{
              style: {
                height: '150px', 
              },
            }}
          />
          <Button
            type="submit"
            sx={{
              color: "white",
              px: 2,
              backgroundColor: "#004080",
              mb: 2,
            }}
          >
            Send
          </Button>
        </Box>
      </div>
    </>
  );
};

export default Contact;
