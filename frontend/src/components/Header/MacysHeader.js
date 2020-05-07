import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form, Button } from 'react-bootstrap';
import classes from './MacysHeader.module.css';
import logo from '../../assets/logo.svg';

class MacysHeader extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.state = {
            inputField: ''
        };
    }

    submitHandler(evt) {
        evt.preventDefault();
        this.props.handlerFromParent(this.state.inputField);
        this.setState({
            inputField: ''
        });
    }

    handleChange(event) {
        this.setState({
            inputField: event.target.value
        });
    }
    render() {
        return (
            <div >
                <div className={classes.TopHeader}>
                    <div className={classes.SignupDetails}>
                        <span>Sign up for emails &amp; get extra 25% off! Exclusions apply.
                                <a title="Sign Up" href="https://emails.macys.com/pub/rf?_ri_=X0Gzc2X%3DYQpglLjHJlTQGjYzezgdzgFmafpLshzdrXaXI5v0lf7hIOTwVwjpnpgHlpgneHmgJoXX0Gzc2X%3DYQpglLjHJlTQGribd0fNzbs2EbuCkKzdRzcFzghN97mv2qzazc&amp;SRCC=60&amp;RDN=1">
                                <u>Sign Up</u>
                            </a>
                        </span>
                    </div>
                    <div className={classes.ShipDetails}>
                        <span>Free Shipping with $25 purchase + Free Store Pickup. Contiguous US.
                                <a href="/" title="Exclusions">Exclusions</a>
                        </span>
                    </div>
                </div>
                <div className={classes.BottomHeader}>
                    <Navbar expand="lg" className={classes.firstNav}>
                        <Navbar.Brand href="#home">
                            <img src={logo} title="Macy's" alt="Macys" className={classes.MacysLogo} />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className={classes.NavCategory}>
                                <Nav.Link href="#" className={classes.OrderTracking}>ORDER TRACKING</Nav.Link>
                                <Nav.Link href="#" className={classes.OrderTracking}>STORES</Nav.Link>
                                <Nav.Link href="#" className={classes.OrderTracking}>WEDDING REGISTRY</Nav.Link>
                                <Nav.Link href="#" className={classes.OrderTracking}>SHIPPING TO &nbsp;
                                    <span className="headerCountryFlag">
                                        <img
                                            src="//assets.macys.com/web20/assets/img/international/flags/IN.gif"
                                            title="IN"
                                            alt="IN"
                                            className={classes.headerCountryFlagImg}
                                        />
                                    </span>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <div className={classes.myAccount}>
                        <i className="fas fa-user" />
                        <div>
                            <div>Sign In</div>
                            <div><b>My Account</b>&nbsp;&nbsp;<i className="fas fa-caret-down" /></div>
                        </div>
                    </div>
                    <Navbar expand="lg" className={classes.secondNav}>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <div className={classes.NavShopByDept}>
                                <NavDropdown title="SHOP BY DEPARTMENT" id="basic-nav-dropdown" className={classes.ShopByDept}>
                                    <NavDropdown.Item href="#action/3.1">Women</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Men</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Kids</NavDropdown.Item>
                                </NavDropdown>
                            </div>
                            <div className={classes.NavForm}>
                                <Form inline onSubmit={this.submitHandler} className={classes.Form}>
                                    <Form.Control onChange={this.handleChange} type="text" placeholder="Search or enter web ID" className={classes.searchInput} name="productId" />
                                    <Button variant="outline-success" type="submit"><i className="fas fa-search" /></Button>
                                </Form>
                            </div>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
        );
    }
}

export default MacysHeader;