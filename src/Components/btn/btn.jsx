import React from 'react';

const EventRegistrationButton = () => {
  return (
    <a
      href={`https://lu.ma/event/${'evt-8p50KEFBArczZvF'}`}
      className="luma-checkout--button"
      data-luma-action="checkout"
      data-luma-event-id={'evt-8p50KEFBArczZvF'}
    >
      Register for Event
    </a>
  );
};

const script = document.createElement('script');
script.id = 'luma-checkout';
script.src = 'https://embed.lu.ma/checkout-button.js';
document.body.appendChild(script);

export default EventRegistrationButton

