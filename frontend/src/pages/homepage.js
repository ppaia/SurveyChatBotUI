import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

class Homepage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isbuttonenable:false
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
          () => this.setState({isbuttonenable:true}),
          4000
        );
      }
      componentWillUnmount() {
        clearInterval(this.timerID);
      }
 

    render() {
        return (
            <div>
             <h2>Checkout Page</h2>
             {
                 (this.state.isbuttonenable === true)?<Link to={`/join/`} className="active">Chat to our agent</Link>:null
             }
             
            </div>
          );
    }
}

export default withRouter(Homepage);