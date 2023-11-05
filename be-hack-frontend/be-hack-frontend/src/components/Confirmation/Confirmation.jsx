import React from 'react';

import "./Confirmation.css";

// Functional component for the confirmation page
const Confirmation = () => {
  // Styles for the ticket container
  const containerStyle = {
    background: '#e0e2e8',
    position: 'relative',
    width: '100%',
    height: '100vh',
  };

  // Styles for the ticket itself
  const ticketStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };

  // Placeholder styles for different ticket states
  const basicTicketStyle = {
    display: 'none',
  };

  // Styles for the airline ticket
  const airlineTicketStyle = {
    display: 'block',
    height: '575px',
    width: '270px',
    boxShadow: '5px 5px 30px rgba(0, 0, 0, 0.3)',
    borderRadius: '25px',
    zIndex: '3',
  };

  // Styles for the top part of the ticket
  const topStyle = {
    height: '220px',
    background: '#3498db',
    borderTopRightRadius: '25px',
    borderTopLeftRadius: '25px',
  };

  // Styles for various elements in the top part of the ticket
  const h1Style = {
    textTransform: 'uppercase',
    fontSize: '12px',
    letterSpacing: '2px',
    textAlign: 'center',
    position: 'absolute',
    top: '30px',
    left: '50%',
    transform: 'translateX(-50%)',
  };

  // Styles for the bottom part of the ticket
  const bottomStyle = {
    height: '355px',
    background: '#fff',
    borderBottomRightRadius: '25px',
    borderBottomLeftRadius: '25px',
  };

  // Styles for the large text in the middle of the ticket
  const bigTextStyle = {
    position: 'absolute',
    top: '100px',
    fontSize: '65px',
    fontWeight: '700',
    lineHeight: '0.8',
  };

  // Styles for the 'from' text
  const fromStyle = {
    color: '#000',
    textShadow: '-1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000',
  };

  // Styles for the 'to' text
  const toStyle = {
    position: 'absolute',
    left: '32px',
    fontSize: '35px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  };

  // Styles for the icon next to the 'to' text
  const iconStyle = {
    marginTop: '5px',
    marginRight: '10px',
    fontSize: '15px',
  };

  // Styles for the top side of the ticket
  const topSideStyle = {
    position: 'absolute',
    right: '35px',
    top: '110px',
    textAlign: 'right',
  };

  // Styles for the plane icon in the top side
  const planeIconStyle = {
    fontSize: '25px',
    marginBottom: '18px',
  };

  // Styles for various paragraphs in the top side
  const pStyle = {
    fontSize: '10px',
    fontWeight: '700',
  };

  // Styles for additional information at the bottom of the ticket
  const infoStyle = {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    bottom: '10px',
    fontSize: '14px',
    textAlign: 'center',
    zIndex: '1',
  };

  // Styles for the link in the additional information
  const linkStyle = {
    textDecoration: 'none',
    color: '#000',
    background: '#ffcc05',
  };

  // Placeholder values for information
  const boardingInfo = 'Boarding: 10:25 AM';
  const departingInfo = 'Departing: 11:00 AM';
  const arrivingInfo = 'Arriving: 1:05 PM';
  const flightInfo = 'Flight: AA2005';
  const gateInfo = 'Gate: B3';

  // Placeholder values for passenger details
  const passengerInfo = 'Passenger: John Doe';
  const seatInfo = 'Seat: 11E';
  const groupInfo = 'Group: 3';
  const overheadInfo = 'Overhead Space: C';

  // JSX rendering of the component
  return (
    <div style={containerStyle}>
      <div style={{ ...ticketStyle, ...basicTicketStyle }} className="ticket basic">
        <p>Admit One</p>
      </div>

      <div style={{ ...ticketStyle, ...airlineTicketStyle }}>
        <div style={topStyle} className="top">
          <h1 style={h1Style}>boarding pass</h1>
          <div style={bigTextStyle} className="big">
            <p style={fromStyle} className="from">
              DFW
            </p>
            <p style={toStyle} className="to">
              <span style={iconStyle}>➔</span> ATL
            </p>
          </div>
          <div style={topSideStyle} className="top--side">
            <span style={planeIconStyle}>✈</span>
            <p style={pStyle}>Dallas</p>
            <p style={pStyle}>Atlanta</p>
          </div>
        </div>
        <div style={bottomStyle} className="bottom">
          <div className="column">
            <div className="row row-1">
              <p>
                <span style={{ marginRight: '10px' }}>{flightInfo}</span>
                <span>{gateInfo}</span>
              </p>
            </div>
            <div className="row row-2">
              <p>
                <span>{boardingInfo}</span>
                <span>{departingInfo}</span>
                <span>{arrivingInfo}</span>
              </p>
              <div className="row-2--line"></div>
            </div>
            <div className="row row-3">
              <p>
                <span>{passengerInfo}</span>
                <span>{seatInfo}</span>
                <span>{groupInfo}</span>
                <span>{overheadInfo}</span>
              </p>
            </div>
          </div>
          <div className="bar--code"></div>
        </div>
      </div>

      <div style={infoStyle} className="info">
        <p>
          <a href="https://dribbble.com/shots/11399236-Boarding-Pass" style={linkStyle} target="_blank" rel="noopener noreferrer">
            {/* Placeholder for a link */}
          </a>{' '}
        </p>
      </div>
    </div>
  );
}

export default Confirmation;






