import { SearchOutlined } from "@mui/icons-material";
import { Box, IconButton, Input } from "@mui/material";
import React from "react";
import { Form, InputGroup } from "./Inputs";

function Search() {
  let classes = {
    container: {
      padding: "15px"
    },
    SearchBox : {
        gap : "9px",
        borderRadius : "10px",
        padding : " 4px 10px",
        color : "white",
        background : "black"    
      }

  };
  return (
    <Box style={classes.container}>
      <Form>
        <InputGroup style={classes.SearchBox}>
            <SearchOutlined />
          <Input
            disableUnderline={true}
            placeholder="Pesquisar"
          />
        </InputGroup>
      </Form>
    </Box>
  );
}

export default Search;
