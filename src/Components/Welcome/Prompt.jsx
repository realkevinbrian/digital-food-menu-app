import { Co2Sharp, Person, PhoneAndroid } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { InputGroup, Form } from "../Form/Inputs";

function Prompt({ openPrompt }) {
  const [fields, setFields] = useState([{
    userName : "",
    userContact : ""
  }]);
  const handleInputChange = (event) =>{
    let values = [...fields]
    values[0][event.target.name] = event.target.value
    setFields(values)
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    let data = JSON.stringify(fields)
    openPrompt(true,localStorage.setItem("session_user", data))
  }

  return (
    <Dialog open={true}>
      <Box sx={{ textAlign: "center", padding : "10px 0" }}>
        <Typography variant="h6">Preenche para continuar</Typography>
      </Box>
      <DialogContent>
        <Form onSubmit={(event)=>handleSubmit(event)}>

          <InputGroup>
            <Person />
            <Input
              onChange={(event)=>handleInputChange(event)}
              name = "userName"
              value={fields.userName}
              required
              disableUnderline={true}
              placeholder="Introduz o seu nome"
            />
          </InputGroup>

          <InputGroup>
            <PhoneAndroid />
            <Input
              onChange={(event)=>handleInputChange(event)}
              required
              value={fields.userContact}
              name = "userContact"
              disableUnderline={true}
              placeholder="Introduz o seu numero"
            />
          </InputGroup>

          <Button type="submit" size="large">
            OK
          </Button>

        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default Prompt;
