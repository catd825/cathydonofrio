import React, { useState } from "react";
import "./App.css";
import ProjectsContainer from "./Containers/ProjectsContainer.js";
import AboutContainer from "./Containers/AboutContainer.js";
import Footer from "./Components/Footer.js";
import NewNavbar from "./Components/NewNavbar.tsx";

const App = () => {
  const [page, setPage] = useState("default");

  let content;
    if(page === 'about'){
      content = <AboutContainer/> 
    } else if (page === 'projects') {
      content = <ProjectsContainer/> 
    } else {
      content = null
    }

    return (
      <>
        <NewNavbar setPage={setPage} page={page} />
        {content}
        <Footer />
      </>
    );


  // if (page === "default")
  //   return (
  //     <>
  //       <NewNavbar setPage={setPage} page={page} />
  //       <Footer />
  //     </>
  //   );
  // if (page === "about")
  //   return (
  //     <>
  //       <NewNavbar setPage={setPage} page={page} />
  //       <AboutContainer />
  //       <Footer />
  //     </>
  //   );
};

export default App;
