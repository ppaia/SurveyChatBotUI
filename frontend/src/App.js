import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MacysHeader from "./components/Header/MacysHeader";
import Footer from './components/Footer/Footer';
import Spinner from './components/Spinner/Spinner';

import classNames from 'classnames';
import './assets/scss/styles.scss';

import Chat from './pages/chat';
import Useragent from './pages/useragent';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      site_loaded: false,
      loadTimer: false,
    }
  }

  handleData(productId) {
    alert("Search handler!");
  }

  componentDidMount() {
    this.setState({
      site_loaded: true
    });
    this.timer = setTimeout(
      () => this.setState(prevState => ({ loadTimer: !prevState.loadTimer })),
      1000,
    );
  }

  render() {

    let conent = <Spinner />;

    if (this.state.loadTimer) {
      conent = <div className={classNames({ 'App': true, 'site_loaded': this.state.site_loaded })}>
        <Router>
          <Switch>
            {/* <Route path="/chat/:name/:room" component={Chat} />
          <Route path="/join" component={Join} /> */}
            <Route path="/useragent" component={Useragent} />
            <Route path="/" component={Chat} />
            {/* <Route path="/home" component={Homepage} /> */}
          </Switch>
        </Router>
      </div>;
    }

    return (
      <div className="full-height">
        <MacysHeader handlerFromParent={this.handleData} />
        {conent}
        <Footer />
      </div>
    );
  }
}

export default App;
