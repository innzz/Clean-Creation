import React from "react";
import DateDay from "../components/CurrentMenu/DateDay";
import FullMenu from "../components/CurrentMenu/FullMenu";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import axios from "axios";

const CurrentMenuScreen = ({response}) => {
  return (
    <div>
      <NavBar />
      <DateDay />
      <FullMenu response={response}/>
      <Footer />
    </div>
  );
};

export async function getServerSideProps(context){
   const data = await fetch("http://localhost:5000/products")
  const response = await data.json()
  return {
    props : {response}
  }
}

export default CurrentMenuScreen;
