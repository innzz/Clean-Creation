import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Container, Row, Col } from "react-bootstrap";

const HomeScreen = () => {
  return (
    <>
      <div>
        <Container>
          <Row>
            <Col>
              <h1 className="">
                <p className="">Clean Creation</p>
              </h1>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default HomeScreen;
