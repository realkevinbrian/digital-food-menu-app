import styled from "styled-components";
import { Container } from "@mui/material";
import bgImg from "../../Assets/images/img1.jpg";

export const StyledContainer = styled(Container)`
  padding: 0px !important;
  height: 100vh;
  display: flex;
  flex-direction: column;
  
`;
export const Wallpaper = styled.div`
  flex: 1;
  height: 100%;
  display: grid;
  background: linear-gradient(180deg, #0000, #090909a6, #000000d4, black);
`;
export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  h4 {
    font-weight: bold;
    color: white;
  }
`;

export const Footer = styled.div`
  display: grid;
  padding: 0 1.5rem;
  place-content: center;
  place-items: center;
  text-align: center;
  gap: 1.5rem;
  color: white;
`;

export const NEXTBUTTON = styled.button`
  outline: none;
  border: 3px solid transparent;
  color: white;
  padding: 1rem;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  background: #f78f0b;
  border-color: white;
  border-left-color: transparent;
  transition: all 0.3s ease-in;

  &:hover{
    transform: translateX(10px);
  }

  svg {
    width: 2rem;
  }
`;
