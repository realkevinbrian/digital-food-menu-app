import {
  Box,
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Icon,
  Typography,
} from "@mui/material";
import React from "react";
import { CardOverFlow, StyledCard } from "../Product/styled";
import sample from "../../Assets/images/img01.jpg";
import { AddCart } from "../Buttons";
import { Add, AddShoppingCart, AddShoppingCartOutlined } from "@mui/icons-material";
import "../Product/classes.css"


function Card() {
  return <div>Card</div>;
}

export default Card;

export function TrendProduct() {
 
  return (

     

    <StyledCard>
      <img src={sample} alt="productImage"/>
      <CardOverFlow className="OverFlowChild">
          <Box className="PriceContainer">
            <Typography variant="h5">Burger completo</Typography>
            <Typography className="PRICE">
              <small>MT</small>
              <strong>430</strong>
            </Typography>
          </Box>
          <Box className="BUYBUTTON">
            <AddCart>
              <AddShoppingCartOutlined/>
              Comprar
            </AddCart>
          </Box>
      </CardOverFlow>
    </StyledCard>
  );
}

export function ProductCard() {
  const classes = {
    product: {
      fontSize: "1rem",
      display: "flex",
      textAlign: "center",
    },
    currency: {
      color: "#ffaf51",
      fontSize: ".7rem",
      padding: "0 2px",
    },
    price: {
      fontWeight: "bold",
    },
  };
  return (
    <Grid item xs={6} sm={6} md={6}>
      <StyledCard>
        <CardMedia>
          <img src={sample} alt="productImage" />
        </CardMedia>
        <CardContent sx={{ padding: "0 5px", fontSize: ".8rem" }}>
          <Typography style={classes.product}>
            <strong>Pizza Mexicano</strong>
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>
            <span style={classes.currency}>MT</span>
            <span style={classes.price}>350</span>
          </Typography>
          <AddCart>
            <Icon>
              <AddShoppingCart />
            </Icon>
            Comprar
          </AddCart>
        </CardActions>
      </StyledCard>
    </Grid>
  );
}
