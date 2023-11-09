import React from 'react';
import EventInfo from './eventInfo'; 
import DisplayUsersInterest from './displayUsersInterest'; 
import DisplayUsersPersonality from './displayUsersPersonality'; 
import Button from 'react-bootstrap/Button';

interface Event {
  name: string;
  date: string;
  location: string;
  info: string;
}

const EventsTable: React.FC = () => {
  const eventsData: Event[] = [
    { name: 'Pre-Game Tailgate', date: 'February 11, 2024 - 11:00 AM', location: 'Modelo Tailgate Zone', info: "https://www.raiders.com/promotions/modelo-tailgate-zone" },
    { name: 'Superbowl', date: 'February 11, 2024 - 3:00 PM', location: 'Allegiant Stadium', info: "https://www.allegiantstadium.com/events/detail/superbowl-lviii" }
  ];

  return (
    <div className="container mt-4">
      <h1 className="text-center" style={{ color: "rgb(32, 22, 72, 255)" }}>Events</h1>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Event Name</th>
            <th>Date & Time</th>
            <th>Location</th>
            <th>More Info</th>
          </tr>
        </thead>
        <tbody>
          {eventsData.map((event, index) => (
            <tr key={index}>
              <td>{event.name}</td>
              <td>{event.date}</td>
              <td>{event.location}</td>
              <td>
                <a href={event.info} target="_blank" rel="noopener noreferrer">
                  <Button variant="dark">More Info</Button>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h1 className="text-center" style={{ color: "rgb(32, 22, 72, 255)" }}>Attendees</h1>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Meet People with Similar Interests</th>
            <th>Meet People with Similar Personality</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><DisplayUsersInterest /></td>
            <td><DisplayUsersPersonality /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EventsTable;
