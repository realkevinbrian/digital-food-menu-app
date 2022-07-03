import { FoodBankOutlined, ShoppingCart } from "@mui/icons-material";
import { AppBar, Avatar, Box, Icon, Toolbar, Typography } from "@mui/material";
import React from "react";
import { StyledAppBar, StyledTabMenu, TabMenu } from "./styled";

function index() {
  return (
    <StyledAppBar maxWidth="xs">
      <Toolbar>
        <Typography variant="h6">LOGO</Typography>
        <ShoppingCart />
      </Toolbar>
    </StyledAppBar>
  );
}

export default index;

const BottomNavigation = () => {
  return (
    <AppBar>
      <BottomNavigation></BottomNavigation>
    </AppBar>
  );
};

export const SayHey = () => {
  let container = {
    padding: "15px",
  };

  let styleName = {
    fontWeight: "bolder",
  };

  return (
    <Box style={container}>
      <Typography>Ola! Kevin Brian</Typography>
      <Typography variant="h6" style={styleName}>Bem vindo de Volta!</Typography>
      <Typography>O que vais encomendar hoje ?</Typography>
    </Box>
  );
};

export const CategoryTab = () => {
  let container = {
    padding: "5px 15px",
  };

  const tabs = [
    { title: "Hamburger" },
    { title: "Pizza" },
    { title: "Comida" },
    { title: "Refregerantes" },
  ];
  return (
    <Box style={container}>
      <StyledTabMenu>
        {tabs.map((tab, index) => (
          <CatItem key={index} tab={tab} />
        ))}
      </StyledTabMenu>
    </Box>
  );
};

const CatItem = ({ tab }) => {
  return (
    <TabMenu>
        <FoodBankOutlined />
      <small>{tab.title}</small>
    </TabMenu>
  );
};
