import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShippingFast, faExchangeAlt, faCreditCard, faHeadset } from '@fortawesome/free-solid-svg-icons';

const Features = () => {
  const features = [
    { icon: faShippingFast, title: 'Complimentary Delivery', description: 'Get Complimentary Delivery on All Orders' },
    { icon: faExchangeAlt, title: 'Hassle-Free Returns', description: '15-Day Hassle-Free Returns Policy' },
    { icon: faCreditCard, title: 'Secure Payments', description: 'All Major Credit Cards Accepted' },
    { icon: faHeadset, title: 'Customer Support 24/7', description: 'Friendly Customer Service Available 24/7' },
  ];

  const featureStyle = {
    textAlign: 'center',
    padding: '20px',
    marginBottom: '20px',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    transition: 'all 0.3s ease',
  };

  const iconStyle = {
    fontSize: '3rem',
    color: '#007bff',
    marginBottom: '15px',
  };

  const titleStyle = {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const descriptionStyle = {
    fontSize: '0.9rem',
    color: '#6c757d',
  };

  return (
    <Container className="my-5">
      <Row>
        {features.map((feature, index) => (
          <Col key={index} md={3} sm={6}>
            <div style={featureStyle}>
              <FontAwesomeIcon icon={feature.icon} style={iconStyle} />
              <h3 style={titleStyle}>{feature.title}</h3>
              <p style={descriptionStyle}>{feature.description}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Features;
