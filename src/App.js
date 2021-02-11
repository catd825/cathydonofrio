import React from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer.js'
import ContentContainer from './Containers/ContentContainer'
import ProjectsContainer from './Containers/ProjectsContainer'
import AboutContainer from './Containers/AboutContainer'
import { Route, Switch } from 'react-router-dom'


class App extends React.Component {

  state = { data: null }

  render() { 
    return (
      <div className="App">
        <Navbar />
        <br/><br/><br/><br/><br/>
            <Switch>
                <Route path="/projects" render={() => <ProjectsContainer />} />  
                <Route path="/about" render={() => <AboutContainer />} /> 
                <Route path="/" render={() => <ContentContainer />} />
            </Switch>
        <Footer/>
      </div>
    )
  }
}

export default App;
