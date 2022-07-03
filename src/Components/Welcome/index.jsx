import { ArrowForwardOutlined } from "@mui/icons-material";
import { Typography, Box, IconButton, Icon } from "@mui/material";
import React, { useState } from "react";
import Prompt from "./Prompt";
import { Footer, StyledContainer, Wallpaper, Logo, NEXTBUTTON } from "./styled";
import generateToken from "../../Hooks/generateToken"

function Welcome({ setSession }) {


  return (
    <StyledContainer maxWidth="xs" className="welcomePaper">
      <Wallpaper>
        <Logo>
          <Typography variant="h4">YOUR LOGO</Typography>
        </Logo>
        <Footer>
          <IntroText />
          <NextButton setSession={setSession}/>
          <Developer />
        </Footer>
      </Wallpaper>
    </StyledContainer>
  );
}

export default Welcome;

const Developer = () => {
  return (
    <Box>
      <Typography style={{ display: "grid", placeSelf: "center" }}>
        <Typography variant="span">from</Typography>
        <Typography variant="div">iBriant Softwares Ltd</Typography>
      </Typography>
    </Box>
  );
};

const IntroText = () => {
  return (
    <Box>
      <Typography sx={{ fontWeight: "bold", fontSize: "1.3rem" }}>
        Fast Food, Anywhere Anytime!
      </Typography>
      <Typography sx={{fontSize: ".8rem" }}>
        Faz ja, o seu Pedido no App.
      </Typography>
    </Box>
  );
};

const NextButton = ({setSession}) => {
  let token = generateToken();
  return (
    <Box sx={{ marginTop: "10px" }}>
      <NEXTBUTTON onClick={()=>setSession(true,localStorage.setItem("session_time",token))}>
        <ArrowForwardOutlined />
      </NEXTBUTTON>
    </Box>
  );
};
