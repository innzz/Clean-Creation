import React from "react";
import Blog from "../../components/Blog/Blog";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
export default class BlogPage extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Blog />
        <Footer />
    </div>
    );
  }
}
