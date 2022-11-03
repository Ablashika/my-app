import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

export default class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", gen: "" };
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });

    console.log(this.state);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addUser(this.state);
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              name="name"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={this.handleChange}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicGen">
            <Form.Label>gen</Form.Label>
            <Form.Control
              type="text"
              placeholder="gen"
              name="gen"
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
