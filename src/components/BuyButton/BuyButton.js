import React from "react";

function BuyButton() {
  return (
    <>
      <button id="eventbrite-widget-modal-trigger-157009771453" type="button" onClick={handleClick}>
        Buy Tickets
      </button>
      <script src="https://www.eventbrite.com/static/widgets/eb_widgets.js"></script>

    </>
  );
}

function handleClick() {
    window.EBWidgets.createWidget({
        widgetType: "checkout",
        eventId: "157009771453",
        modal: true,
        modalTriggerElementId: "eventbrite-widget-modal-trigger-157009771453",
      })
}

export default BuyButton;
