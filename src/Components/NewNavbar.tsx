import React from "react";
import styled from "@emotion/styled";

interface Props {
  page: string;
  setPage: (page: string) => void;
}

export const NewNavbar: React.FC<Props> = (props: Props) => {
  const { page, setPage } = props;

  const NavbarDiv = styled.div({
    backgroundColor: "white",
    height: "50px",
    margin: "auto"
  });

  const SpanWrapper = styled.div({
    textAlign: "center",
    paddingTop: "10px"
  });
  const NavSpan = styled.span({
    padding: "10px"
  });

  return (
    <NavbarDiv>
      <SpanWrapper>
        <NavSpan onClick={() => setPage("default")}>home</NavSpan>
        <NavSpan onClick={() => setPage("about")}>about</NavSpan>
        <NavSpan onClick={() => setPage("projects")}>projects</NavSpan>
      </SpanWrapper>
    </NavbarDiv>
  );
};

export default NewNavbar;
