import { Box } from "@mui/material";
import styled from "styled-components";

export const StyledAppBar = styled.nav`
  div{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const StyledTabMenu = styled(Box)`
display: flex;
overflow-x: auto;
gap: 10px;

`

export const TabMenu = styled.button`
  display: flex;
  gap: 3px;
  align-items: center;
  padding: 3px 10px;
  border-radius: 50px;
  border: 1px solid;
  margin: 15px 0;
  font-size: .9rem;
  
  svg{
    width: 20px;
  }

`