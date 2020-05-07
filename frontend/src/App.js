import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import classNames from 'classnames';
import './assets/scss/styles.scss';

import Homepage from './pages/homepage';
import Chat from './pages/chat';
import Join from './pages/join';
import Useragent from './pages/useragent'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      site_loaded: false
    }
  }

  componentDidMount() {
    this.setState({
      site_loaded: true
    });
  }

  render() {
    return (
      <div className={classNames({'App': true, 'site_loaded': this.state.site_loaded})}>
        <Router>
          <Switch>
            <Route path="/chat/:name/:room" component={Chat} />
            <Route path="/join" component={Join} />
            <Route path="/useragent" component={Useragent} />
            <Route path="/" component={Homepage} />
            {/* <Route path="/home" component={Homepage} /> */}
           
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
