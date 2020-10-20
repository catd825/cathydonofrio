import React from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer.js'
import ContentContainer from './Containers/ContentContainer'
import WorkContainer from './Containers/WorkContainer'
import { Route, Switch } from 'react-router-dom'


class App extends React.Component {
  render() { 
    return (
      <div className="App">
        <Navbar />
        <br/><br/><br/>
            <Switch>
                <Route path="/work" render={() => <WorkContainer />} />  
                <Route path="/" render={() => <ContentContainer />} />   
            </Switch>
        <Footer/>
      </div>
    )
  }
}

export default App;
