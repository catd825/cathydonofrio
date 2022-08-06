import React, { useState } from "react";
import "./App.css";
import ProjectsContainer from "./Containers/ProjectsContainer";
import AboutContainer from "./Containers/AboutContainer";
import ContentContainer from "./Containers/ContentContainer";
import NewFooter from "./Components/NewFooter.tsx";
import NewNavbar from "./Components/NewNavbar.tsx";
import styled from "@emotion/styled";

const App = () => {
  const PageWrapper = styled.div({
    height: "50%",
    paddingTop: '40px',
    marginLeft: -10
  });

  const [page, setPage] = useState("default");

  let content;
  if (page === "about") {
    content = <AboutContainer setPage={setPage} page={page}/>;
  } else if (page === "projects") {
    content = <ProjectsContainer setPage={setPage} page={page}/>;
  } else {
    content = <ContentContainer />;
  }

  return (
    <>
      <NewNavbar setPage={setPage} page={page} />
      <PageWrapper>{content}</PageWrapper>
      <NewFooter />
    </>
  );
};

export default App;
