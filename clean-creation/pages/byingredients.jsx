import React from 'react';
import ProteinsByThePound from '../components/ProtiensByThePound/ProteinsByThePound';
import SecondaryNav from '../components/SecondaryNav'

function byingredients() {
  return (
    <div>
        <SecondaryNav heading={'Proteins By The Pound'} buttonText={'How to Order Proteins by the Pound?'} />
        <ProteinsByThePound />
    </div>
  )
}

export default byingredients