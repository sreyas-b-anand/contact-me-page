import React from "react";
import { Link, Box, IconButton, Typography, Container } from "@mui/material";
import iglogo from "../assets/ig.jpg";
import xlogo from "../assets/x.jpg";
import ldlogo from "../assets/ld.jpg";
import PositionedMenu from "./Contactmenu";
function Social() {
  return (
    <>
      <div style={{ maxWidth: 480, margin: "auto" }}>
        <Container
          sx={{
            backgroundColor: "#2196f3",
            maxWidth: 480,
            m: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent: "center",
            boxShadow: 3,
            
            borderRadius: "10px",
            gap : 2,
            p:2
          }}
        >
          <Typography sx={{color : 'white' , fontFamily:'monospace' , fontSize : 20}}>Let's Connect....</Typography>
          <Box
            sx={{
              backgroundColor: "#2196f3",
              maxWidth: 400,
              mx: "auto ",
              borderRadius: "10px",
              boxShadow: 3,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              flexWrap: "wrap",
              justifyContent: "center",
              p: 2,
            }}
          >
            <Link target="_blank" rel="noopener" href="https://www.instagram.com/sre___y___a___s/">
              <IconButton sx={{ backgroundColor: "#2196f3" , transition: 'transform 0.3s ease',
            '&:hover': {
              color: '#8b9dc3',
              transform: 'scale(1.2)', }}}>
                <img
                  src={iglogo}
                  alt="instagram"
                  height={"35px"}
                  width={"35px"}
                  style={{ borderRadius: "50%" }}
                />
              </IconButton>
            </Link>
            <Link target="_blank" rel="noopener" href="https://twitter.com/sre___y___as___/">
              <IconButton sx={{ backgroundColor: "#2196f3" , transition: 'transform 0.3s ease',
            '&:hover': {
              color: '#8b9dc3',
              transform: 'scale(1.2)', }}}>
                <img
                  src={xlogo}
                  alt="X"
                  height={"35px"}
                  width={"35px"}
                  style={{ borderRadius: "50%" 
                  }}
                />
              </IconButton>
            </Link>
            <Link target="_blank" rel="noopener" href="https://www.linkedin.com/in/sreyas-b-anand">
              <IconButton sx={{ backgroundColor: "#2196f3" , transition: 'transform 0.3s ease',
            '&:hover': {
              color: '#8b9dc3',
              transform: 'scale(1.2)', }}}>
                <img
                  src={ldlogo}
                  alt="Linked In"
                  height={"35px"}
                  width={"35px"}
                  style={{ borderRadius: "50%" }}
                />
              </IconButton>
            </Link>
            <PositionedMenu />
          </Box>
        </Container>
      </div>
    </>
  );
}

export default Social;
