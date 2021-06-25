
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './Contact.css';

const Contact = () => {
    const { register } = useForm();

    return (
        <section id="contact" className="contact-section">
                <Container>
                    <div className="text-center">
                        <h1>Contact us</h1>
                        <h4>We'd love to hear from you!</h4>
                    </div>
                    <form>
                        <Row className="input-container">
                            <Col xs={12}>
                                <div className="styled-input wide">
                                    <input type="text" {...register("name", { required: true })} required />
                                    <label>Name</label>
                                </div>
                            </Col>
                            <Col md={6} sm={12}>
                                <div className="styled-input">
                                    <input type="text" {...register("email", { required: true })} required />
                                    <label>Email</label>
                                </div>
                            </Col>
                            <Col md={6} sm={12}>
                                <div className="styled-input" style={{ float: "right" }}>
                                    <input type="text" {...register("phone", { required: true })} required />
                                    <label>Phone Number</label>
                                </div>
                            </Col>
                            <Col xs={12}>
                                <div className="styled-input wide">
                                    <textarea {...register("message", { required: true })} required />
                                    <label>Message</label>
                                </div>
                            </Col>
                            <Col xs={12}>
                                <button className="btn-lrg submit-btn btn-main">Send Message</button>
                            </Col>
                        </Row>
                    </form>
                </Container>
        </section>
    );
};

export default Contact;