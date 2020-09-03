import React from 'react';
import Particles from 'react-particles-js';
import './App.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { Route, Switch, Redirect } from 'react-router-dom';
import MainPageContainer from './components/MainPageContainer/MainPageContainer';

const particlesConfig = {
        particles : {
          number: {
            value: 35,
            density: {
              enable: true,
              value_area: 800
            }
          }
        }
    }

class App extends React.Component {
 render () {
  return (
    <div className='App'>
      <Particles params={particlesConfig} className='particles' />
      <Switch>
        <Route exact path="/" render={() => {return <Redirect to={'/main'} />}} />
        <Route path="/login" render={Login} />
        <Route path="/register" render={Register} />
        <Route path="/main" component={MainPageContainer} />
      </Switch>
    </div>
  );
 }
    }

export default App;
