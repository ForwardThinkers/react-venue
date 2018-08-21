import React from 'react';
import Button from '@material-ui/core/Button';
import ticket_icon from '../../resources/images/icons/ticket.png';

const TicketButton = (props) => {
  return (
    <Button
      href={props.link}
      target={props.target}
      variant="contained"
      size="small"
      style={{
        background: props.bck,
        color: props.color
      }}
    >
      <img src={ticket_icon}
        className="iconImage"
        alt="icon button"/>
        {props.text}
    </Button>
  );
};

export default TicketButton;