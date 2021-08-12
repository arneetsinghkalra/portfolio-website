import { React, useState } from "react";
import emailjs from "emailjs-com";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import "./Contact.css";

export default function Contact() {
  const [validated, setValidated] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAIL_USER_ID
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
  }

  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    sendEmail(event);
  };

  return (
    <div className="contact-landing" id="contact">
      <Container classname="mx-auto">
        <h1 className="py-5"> Contact Me </h1>

        <Row>
          <Col md={{ span: 6, offset: 3 }} xs={12}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Arneet Singh Kalra"
                  name="user_name"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="arneetsinghkalra@gmail.com"
                  name="user_email"
                />
                <Form.Text className="text-muted">
                  I'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  rows={3}
                  placeholder="I'd love to hear from you!"
                  name="message"
                />
              </Form.Group>

              {validated && (
                <Alert variant="success">
                  I got your email! I'll get back to you shortly.
                </Alert>
              )}

              <Button variant="dark" type="submit">
                Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
