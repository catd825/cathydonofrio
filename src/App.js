import React from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer.js'
import ContentContainer from './Containers/ContentContainer'
import PortfolioContainer from './Containers/PortfolioContainer'
import AboutContainer from './Containers/AboutContainer'
import { Route, Switch } from 'react-router-dom'


class App extends React.Component {
  render() { 
    return (
      <div className="App">
        <Navbar />
        <br/><br/><br/><br/><br/>
            <Switch>
                <Route path="/portfolio" render={() => <PortfolioContainer />} />  
                <Route path="/about" render={() => <AboutContainer />} /> 
                <Route path="/" render={() => <ContentContainer />} />   
            </Switch>
        <Footer/>
      </div>
    )
  }
}

export default App;
