import React from 'react';

interface EventInfoProps {
  eventName: string;
  eventDate: string;
  eventLocation: string;
}

const EventInfo: React.FC<EventInfoProps> = ({ eventName, eventDate, eventLocation }) => {
  return (
    <div>
      <h1>SuperBowl Meets!</h1>
      <h2>{eventName}</h2>
      <p>Date & Time: {eventDate}</p>
      <p>Location: {eventLocation}</p>
    </div>
  );
};

export default EventInfo;
