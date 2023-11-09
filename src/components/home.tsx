import React from 'react';
import Button from 'react-bootstrap/Button';

const Home: React.FC = () => {
  return (
    <div className="home">
      <h1 className="text-center" style={{ color: "rgb(32, 22, 72, 255)" }}>Welcome to Meet'n'Greet</h1>
      <div className="photo">
        <img src="https://www.allegiantstadium.com/assets/img/SBLVIII_Logo_800x500-8f16504983.jpg" alt="logo" className="logo" />
      </div>
      <div className='buttons'>
        <a href="/events">
          <Button variant="dark">View Events</Button>
        </a>
        <a href="https://www.16personalities.com/free-personality-test" target="_blank" rel="noopener noreferrer">
          <Button variant="dark">Take Personality Test</Button>
        </a>
        <Button variant="dark" onClick={() => window.location.href = "/profile"}>Create Profile</Button>
      </div>
    </div>
  );
};

export default Home;
