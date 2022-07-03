import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Welcome from "../Components/Welcome";
import Prompt from "../Components/Welcome/Prompt";
import { StyledContainer } from "../Components/Welcome/styled";
import Home from "../Pages/Home"

function Viewer() {
  const sessionToken = localStorage.getItem("session_time");
  const sessionUser = localStorage.getItem("session_user");
  const [session, setSession] = useState(sessionToken);
  const [isPrompt, openPrompt] = useState(sessionUser);

  if (!session) return <Welcome setSession={setSession} />;

  return (
    <React.Fragment>
      <StyledContainer maxWidth="xs">
      {!isPrompt && <Prompt openPrompt={openPrompt}/>}
      <Routes>
        <Route path = "/">
            <Route index element={<Home/>}/>
            <Route path="products" element={<span>Products</span>}/>
        </Route>
      </Routes>
      </StyledContainer>
    </React.Fragment>
  );
}

export default Viewer;
