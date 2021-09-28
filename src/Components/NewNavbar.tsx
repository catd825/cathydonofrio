import React from "react";
import styled from "@emotion/styled";
import { PageContext } from "../App";

export const NewNavbar = (props: {
  setPage: (page: string) => void;
  page: string;
}) => {

  const value = React.useContext(PageContext);
  console.log(props, value)

  const NavbarDiv = styled.div({
    backgroundColor: "white",
    height: "40px",
    alignItems: "center",
  });

  return (
    <NavbarDiv>
      <p onClick={() => props.setPage('default')} >home</p>
      <p onClick={() => props.setPage('about')} >about</p>
    </NavbarDiv>
  );
};

export default NewNavbar;
