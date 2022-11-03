import React from "react";
import { Card } from "react-bootstrap";

const User = (props) => {
  const handleDelete = (e) => {
    e.preventDefault();
    props.deleteUser(props.userInfo.id);
    console.log("item deleted");
  };
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            <p>GHH</p>
          </Card.Subtitle>
          <Card.Text>
            <p>Name:{props.userInfo.name}</p>
            <p>Email:{props.userInfo.email}</p>
            <p>gen:{props.userInfo.gen}</p>
          </Card.Text>
          <Card.Link href="#">Add User</Card.Link>
          <Card.Link href="#" onClick={handleDelete}>
            Delete User
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default User;
