import React from "react";
import ReadMore from "../../components/Blog/ReadMore";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
export default class Id extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
      <div className="container">
        <ReadMore />
      </div>
      <Footer />
      </div>
    );
  }
}
