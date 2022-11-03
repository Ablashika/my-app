import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import DisplayAgain from "./DisplayAgain";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Users from "./components/Users";
import AddForm from "./components/AddForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { name: "Ahmed Zak", email: "cac@gmail.com", gen: 12, id: "hehe9" },
        {
          name: "Rekado Bandt",
          email: "ssscac@gmail.com",
          gen: 13,
          id: "938jr",
        },
        { name: "Adjoa C", email: "casc@gmail.com", gen: 2, id: "hee78" },
      ],
    };
  }

  addNewUsers = (user) => {
    user.id = Math.random().toString();
    this.setState({
      users: [...this.state.users, user],
    });
  };

  deleteNewUser = (id) => {
    let undeletedUsers = this.state.users.filter((user) => user.id !== id);
    this.setState({
      users: undeletedUsers,
    });
  };
  render() {
    return (
      <>
        <Container fluid>
          <Row>
            <Col md="4">
              <AddForm addUser={this.addNewUsers} />
            </Col>
            <Col>
              <Users
                usersData={this.state.users}
                deleteUser={this.deleteNewUser}
              />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
