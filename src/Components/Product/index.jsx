import { Typography, Grid, Box } from '@mui/material'
import React from 'react'
import { ProductCard, TrendProduct } from '../MUI/Card'
import { StyledContainer } from '../Welcome/styled'

function index() {

    const container = {
        padding : "10px 15px",
        display : "grid",
        gap : "20px"
    }

    const overFlow = {
        border : "1px solid red"
    }

  return (
    <Box style={container}>
        <TrendProduct/>
        <Typography>Recommended Food</Typography>
        <Grid container direction="row" spacing={1}>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </Grid>
    </Box>
  )
}

export default index