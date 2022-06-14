import React from "react";
import {
  Col,
  Row,
} from "react-bootstrap";
import CartConfirmation from "../components/Meals/CartConfirmation";
import ShoppingCartConfirmation from "../components/Meals/ShoppingCartConfirmation";
import Link from "next/link"

const CartScreen = () => {
  return (
    <div>
      <Link href="/cart">
        <div className="flex gap-2 mx-3 cursor-pointer">
          <img className="h-6 w-5" src="/arrow-left.svg" alt="" />
          <p className="underline">Back to Review</p>
        </div>
      </Link>
      <div className="container">

        <Row>
          <Col>
            <CartConfirmation />
          </Col>
          <Col>
            <ShoppingCartConfirmation />
          </Col>
        </Row>
      </div>
    </div>
  )


};

export default CartScreen;
