import { Card } from "@mui/material";
import styled from "styled-components";

export const StyledCard = styled(Card)`
  border-radius: 10px !important;
  position: relative;
  gap: 8px;
  display: grid;
  img {
    width: 100%;
    object-fit: cover;
    border-radius: 0px 0 10px 10px;
  }
`;

export const CardOverFlow = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  color: white;
  display: flex;
`;
