import { FormControl, Input } from "@mui/material";
import styled from "styled-components";


export const InputGroup = styled.div`
    border: 1px solid;
    display: flex;
    align-items: center;
    padding: 5px;

    svg{
        color: orange;
    }

    input::placeholder{
        font-size: .9rem;
    }

    input{
        font-size: .9rem;

    }
    
`

export const Form = styled.form`
display: flex;
flex-direction: column;
gap: 10px;

`