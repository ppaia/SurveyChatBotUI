import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

const initialState = {
    name: '',
    room: ''
}

class Join extends Component {

    constructor() {
        super();
        this.state = {
            ...initialState
        }
    }

    clearForm() {
        this.setState({
            ...initialState
        });
    }

    inputUpdate(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        });
    }

    join() {
        const { name, room } = this.state;
        if (name && room) {
            this.props.history.push(`/chat/${name}/${room}`)
        }
    }

    render() {

        const { name } = this.state;

        return (
            <div className="joinForm">

                <div className="form_wrap">
                    <div className="form_row">
                        <div className="form_item">
                            <div className="form_input">
                                <input type="text" placeholder="Full Name" autoComplete="off" name="name" value={name} onChange={this.inputUpdate.bind(this)} />
                                <span className="bottom_border"></span>
                            </div>
                        </div>
                    </div>
                    <div className="form_row">
                        <div className="form_item">
                            <div className="form_select">
                                <select name="room" onChange={this.inputUpdate.bind(this)}>
                                    <option value="">You want connect to live support?</option>
                                    <option value="React JS">Yes</option>
                                    {/* <option value="Node JS">Node JS</option> */}
                                </select>
                                <i className="fas fa-chevron-down"></i>
                            </div>
                        </div>
                    </div>
                    <div className="form_buttons">
                        <button onClick={() => this.join()} className="btn">
                            Join
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Join);