import React from "react";
import UserConnect from "./UserConnect"; // Assuming your file is named UserConnect.tsx
import EventsTable from "./EventsTable"; // Assuming your file is named EventsTable.tsx

const Connect: React.FC = () => {
  return (
    <div>
      <h1>Connect with User</h1>

      {/* Rendered the UserConnect component */}
      <UserConnect />
    </div>
  );
};

const UserFeed: React.FC = () => {
  return (
    <div>
      <h1>Events Table</h1>

      {/* Rendered the EventsTable component */}
      <EventsTable />
    </div>
  );
};

export { Connect, UserFeed };
