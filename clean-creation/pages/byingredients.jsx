import React from 'react';
import ProteinsByThePound from '../components/ProtiensByThePound/ProteinsByThePound';
import SecondaryNav from '../components/SecondaryNav'
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

function byingredients() {
  return (
    <div>
      <NavBar />
        <SecondaryNav heading={'Proteins By The Pound'} buttonText={'How to Order Proteins by the Pound?'} />
        <ProteinsByThePound />
        <Footer />
    </div>
  )
}

export default byingredients