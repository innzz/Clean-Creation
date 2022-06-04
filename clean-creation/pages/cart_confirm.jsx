import React from "react";
import {
  Col,
  Row,
} from "react-bootstrap";
import CartConfirmation from "../components/Meals/CartConfirmation";
import ShoppingCartConfirmation from "../components/Meals/ShoppingCartConfirmation";

const CartScreen = () => {
  return <div className="container">
    <Row>
      <Col>
        <CartConfirmation />
      </Col>
      <Col>
        <ShoppingCartConfirmation />
      </Col>
    </Row>
  </div>;
};

export default CartScreen;
