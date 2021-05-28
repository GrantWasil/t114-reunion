import React from "react";
import EventbriteButton from 'react-eventbrite-popup-checkout';
import './BuyButton.css';

function BuyButton() {
  return (
    <>
      <EventbriteButton ebEventId='157009771453' className="buybutton">Buy Tickets</EventbriteButton>
    </>
  );
}

export default BuyButton;
