import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./Footer.css";
import appStore from '../../assets/images/appStore.png';
import gplayStore from '../../assets/gplayStore.svg';
import mail from '../../assets/images/mail.png';
import card from '../../assets/images/card.png';
import star from '../../assets/images/star.png';
import facebook from '../../assets/images/facebook.png';
import twitter from '../../assets/images/twitter.png';
import insta from '../../assets/images/insta.png';
import youtube from '../../assets/images/youtube.png';
import pinterest from '../../assets/images/pinterest.png';
import webAccess from '../../assets/images/webAccess.jpg';
import web from '../../assets/images/web.jpg';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <Container fluid className="bv-example-Row">
                    <Row>
                        <Col sm={2}>
                            <Row>
                                <b>Customer Service</b>
                            </Row>
                            <Row>
                                <a href="/">Help & FAQs</a>
                            </Row>
                            <Row>
                                <a href="/">Other Lookup</a>
                            </Row>
                            <Row>
                                <a href="/">Shipping & Delivery</a>
                            </Row>
                            <Row>
                                <a href="/">Returns</a>
                            </Row>
                            <Row>
                                <a href="/">Contact Us</a>
                            </Row>
                            <Row>
                                <a href="/">Para Ayuda</a>
                            </Row>
                            <Row>
                                <a href="/">Change Location</a>
                            </Row>
                        </Col>
                        <Col sm={2}>
                            <Row>
                                <b>Macy's Credit Card</b>
                            </Row>
                            <Row>Macy's Card Services</Row>
                            <Row>Pay Your Credit Card Bill</Row>
                            <Row>Cardholder Benefits</Row>
                            <Row>Apply For Macy's Credit Card</Row>
                        </Col>
                        <Col sm={2}>
                            <Row>
                                <b>Our Stores</b>
                            </Row>
                            <Row>Stores & Services</Row>
                            <Row>Locations & Hours</Row>
                            <Row>Store Events</Row>
                            <Row>Catalogs</Row>
                            <Row>Tell Us What U Think</Row>
                            <Row>Macy's Backstage</Row>
                            <Row>Personal Stylist</Row>
                        </Col>
                        <Col sm={2}>
                            <Row>
                                <b>Macy's Inc.</b>
                            </Row>
                            <Row>
                                <a href="/">Corporate State</a>
                            </Row>
                            <Row>MacysJOBS</Row>
                            <Row>Press Room</Row>
                            <Row>Investers</Row>
                            <Row>Green Living</Row>
                            <Row>Macy's Gives</Row>
                        </Col>

                        <Col md={4}>
                            <Row>
                                <b>Macy's App</b>
                            </Row>
                            <Row>
                                <a href="#app">
                                    <img src={appStore} alt="App Store" />
                                </a>

                                <a href="#gplay">
                                    <img src={gplayStore} alt="Google Play Store" />
                                </a>
                            </Row>
                            <Row className="cardText">
                                <img src={mail} alt="mail icon" />
                                Email & Notification SignUp
                        </Row>
                            <Row className="cardText"><img src={card} alt="card icon" />Apply For Card</Row>
                            <Row className="cardText"><img src={star} alt="star icon" />Star Rewards SignUp</Row>

                            <Row className="imageIcons">
                                <a href="/">
                                    <img src={facebook} alt="facebook icon" />
                                </a>
                                <a href="/">
                                    <img src={insta} alt="instagram icon" />
                                </a>
                                <a href="/">
                                    <img src={twitter} alt="twitter icon" />
                                </a>
                                <a href="/">
                                    <img src={pinterest} alt="pinterest icon" />
                                </a>
                                <a href="/">
                                    <img src={youtube} alt="youtube icon" />
                                </a>
                            </Row>
                            
                        </Col>
                        
                    </Row>
                   
                    <Row>

                    </Row>
                </Container>
                <Container fluid className="ow">
                <hr width ="100%"></hr>
                    <Row className="webBrowsing">
                    <img src={webAccess} alt="Web Accessibility" />
                    <img src={web} alt="Web Accessibility" />Easy web browsing for visually impaired customers
                    </Row>
                    <Row className="webBrowsing">
                    © 2020 macys.com is a registered trademark. All rights reserved. Macys.com, LLC, 680 Folsom St. San Francisco, CA 94107. Macy's Credit and Customer Service, PO Box 8113, Mason, Ohio 45040. Request our corporate name & address by email.
                    </Row>
                    <Row className="webBrowsing">
                    <a href="/">Privacy Notice |</a><a href="/">Do Not Sell My Info |</a><a href="/">Interest Based Ads |</a><a href="/"> CA Privacy Rights |</a><a href="/"> Legal Notice |</a><a href="/"> Customer Bill of Rights |</a>
                    <a href="/">CA Transparency in Supply Chains |</a><a href="/">  Product Recalls |</a><a href="/"> Pricing Policy |</a><a href="/"> Site Map</a>
                    </Row>
                    </Container>
            </div>
        );
    }
}
export default Footer;