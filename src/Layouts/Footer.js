import React, { Component } from 'react';
import { Container } from 'reactstrap';

const Footer = () => {
    return (
        <Container fluid
        tag = 'footer'
        className = 'text-center bg-info text-white text-uppercase fixed-bottom p-3'>
            Github + Firebase = Gitbase
        </Container>
    );
};

export default Footer;