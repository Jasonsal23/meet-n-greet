import React from 'react';
import Button from 'react-bootstrap/Button';

interface SocialMediaProps {
  instagram: string;
  facebook: string;
  email: string;
}

const SocialMedia: React.FC<SocialMediaProps> = ({ instagram, facebook, email }) => {
  return (
    <div className="connect-info">
      <h1 style={{ color: "rgb(32, 22, 72, 255)" }}>Connect With Me Here</h1>
      <a href={instagram} target='_blank' rel="noopener noreferrer">
        <Button variant="dark">Instagram</Button>
      </a>
      <a href={facebook} target='_blank' rel="noopener noreferrer">
        <Button variant="dark">Facebook</Button>
      </a>
      <a href={`mailto:${email}`} className="link-with-border">
        <Button variant="dark">Email</Button>
      </a>
    </div>
  );
};

export default SocialMedia;

