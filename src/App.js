import React, { useState } from "react";
import "./App.css";
import AboutContainer from "./Containers/AboutContainer.js";
import Footer from "./Components/Footer.js";
import NewNavbar from "./Components/NewNavbar.tsx";

export const PageContext = React.createContext();

const App = () => {
  const [page, setPage] = useState("default");


  if (page === 'default') return (
    <PageContext.Provider value={"default"}>
      <NewNavbar setPage={setPage} page={page} />
      <Footer />
    </PageContext.Provider>
  )
  if (page === 'about') return (
    <PageContext.Provider value={"default"}>
      <NewNavbar setPage={setPage} page={page} />
      <AboutContainer />
      <Footer />
    </PageContext.Provider>
  )
};

export default App;
