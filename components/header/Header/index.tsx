import React from "react";
import Topbar from "../Topbar";
import {Container} from "./style";
import Menu from "../Menu";

function Header() {
  return (
    <Container>
      <Topbar />
      <Menu />
    </Container>
  );
}

export default Header;
