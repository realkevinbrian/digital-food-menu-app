import React from 'react'
import Search from '../Components/Form/Search'
import Header, { CategoryTab, SayHey } from "../Components/Header"
import { StyledContainer } from '../Components/Welcome/styled'
import Product from "../Components/Product"


function Home() {
  return (
    <StyledContainer maxWidth="xs">
        <Header/>
        <SayHey/>
        <Search/>
        <CategoryTab/>
        <Product/>
    </StyledContainer>
  )
}

export default Home