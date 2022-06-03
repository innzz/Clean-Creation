import React from "react";
import {
  Col,
  Row,
} from "react-bootstrap";
import CartConfirmation from "../components/Meals/CartConfirmation";

const CartScreen = () => {
  return <div className="container">
    <Row>
      <Col>
        <CartConfirmation />
      </Col>
      <Col></Col>
    </Row>
  </div>;
};

export default CartScreen;
