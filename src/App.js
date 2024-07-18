import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, ProgressBar, Alert } from 'react-bootstrap';
import './App.css'; // Import your custom CSS file here

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: 'Male',
    country: '',
    city: '',
    username: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateStep = () => {
    let stepErrors = {};
    switch (step) {
      case 1:
        if (!formData.firstName) stepErrors.firstName = 'First name is required';
        if (!formData.lastName) stepErrors.lastName = 'Last name is required';
        break;
      case 2:
        if (!formData.email) stepErrors.email = 'Email is required';
        if (!/\S+@\S+\.\S+/.test(formData.email)) stepErrors.email = 'Email address is invalid';
        if (!formData.phone) stepErrors.phone = 'Phone number is required';
        break;
      case 3:
        if (!formData.dateOfBirth) stepErrors.dateOfBirth = 'Date of birth is required';
        if (!formData.country) stepErrors.country = 'Country is required';
        if (!formData.city) stepErrors.city = 'City is required';
        break;
      case 4:
        if (!formData.username) stepErrors.username = 'Username is required';
        if (!formData.password) stepErrors.password = 'Password is required';
        if (formData.password.length < 8) stepErrors.password = 'Password must be at least 8 characters long';
        if (formData.password !== formData.confirmPassword) stepErrors.confirmPassword = 'Passwords do not match';
        break;
      default:
        break;
    }
    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep()) {
      setSuccessMessage('You have registered successfully!');
      console.log(formData);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Form>
            <h2>Basic Info:</h2>
            <Form.Group controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
              {errors.firstName && <div className="text-error">{errors.firstName}</div>}
            </Form.Group>
            <Form.Group controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
              {errors.lastName && <div className="text-error">{errors.lastName}</div>}
            </Form.Group>
            <Button variant="primary" onClick={nextStep}>Next</Button>
          </Form>
        );
      case 2:
        return (
          <Form>
            <h2>Contact Info:</h2>
            <Form.Group controlId="formEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} />
              {errors.email && <div className="text-error">{errors.email}</div>}
            </Form.Group>
            <Form.Group controlId="formPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" name="phone" value={formData.phone} onChange={handleChange} />
              {errors.phone && <div className="text-error">{errors.phone}</div>}
            </Form.Group>
            <Button variant="secondary" onClick={prevStep}>Previous</Button>
            <Button variant="primary" onClick={nextStep}>Next</Button>
          </Form>
        );
      case 3:
        return (
          <Form>
            <h2>Date of Birth:</h2>
            <Form.Group controlId="formDateOfBirth">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />
              {errors.dateOfBirth && <div className="text-error">{errors.dateOfBirth}</div>}
            </Form.Group>
            <Form.Group controlId="formGender">
              <Form.Label>Gender</Form.Label>
              <Form.Control as="select" name="gender" value={formData.gender} onChange={handleChange}>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formCountry">
              <Form.Label>Country</Form.Label>
              <Form.Control type="text" name="country" value={formData.country} onChange={handleChange} />
              {errors.country && <div className="text-error">{errors.country}</div>}
            </Form.Group>
            <Form.Group controlId="formCity">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" name="city" value={formData.city} onChange={handleChange} />
              {errors.city && <div className="text-error">{errors.city}</div>}
            </Form.Group>
            <Button variant="secondary" onClick={prevStep}>Previous</Button>
            <Button variant="primary" onClick={nextStep}>Next</Button>
          </Form>
        );
      case 4:
        return (
          <Form onSubmit={handleSubmit}>
            <h2>Login Details:</h2>
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" name="username" value={formData.username} onChange={handleChange} />
              {errors.username && <div className="text-error">{errors.username}</div>}
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} />
              {errors.password && <div className="text-error">{errors.password}</div>}
            </Form.Group>
            <Form.Group controlId="formConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
              {errors.confirmPassword && <div className="text-error">{errors.confirmPassword}</div>}
            </Form.Group>
            <Button variant="secondary" onClick={prevStep}>Previous</Button>
            <Button variant="primary" type="submit">Submit</Button>
          </Form>
        );
      default:
        return null;
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md="6">
          <h1 className="text-center">Signup Form</h1>
          <div className="text-center mb-4">
            <ProgressBar now={(step / 4) * 100} label={`${step}/4`} />
          </div>
          {renderStep()}
          {successMessage && <Alert variant="success" className="mt-4">{successMessage}</Alert>}
        </Col>
      </Row>
    </Container>
  );
};

export default App;
