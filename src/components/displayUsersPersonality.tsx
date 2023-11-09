import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

interface User {
  username: string;
  userPhoto: string;
}

const users: User[] = [
  { username: 'Jay-Z', userPhoto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Jay-Z_%40_Shawn_%27Jay-Z%27_Carter_Foundation_Carnival_%28crop_2%29.jpg/1200px-Jay-Z_%40_Shawn_%27Jay-Z%27_Carter_Foundation_Carnival_%28crop_2%29.jpg' },
  { username: 'John Doe', userPhoto: 'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg' },
  { username: 'Lebron James', userPhoto: 'https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png' },
  { username: 'Davante Adams', userPhoto: 'https://static.clubs.nfl.com/image/private/t_thumb_squared_2x/f_auto/raiders/gdnkpgg631tihmrafor2.jpg' },
  { username: 'Beyonce', userPhoto: 'https://cdn.britannica.com/51/188751-050-D4E1CFBC/Beyonce-2010.jpg' }
];

const DisplayUsersPersonality: React.FC = () => {
  return (
    <ListGroup className="user-personality">
      {users.map((user, index) => (
        <div className="list-item-personality" key={index}>
          <ListGroup.Item>
            <div className="profile-info">
              <img src={user.userPhoto} alt={user.username} className="profile-photo" />
              <div className="user-details">
                <h3 className="user-name">{user.username}</h3>
                <button className="view-profile" onClick={() => window.location.href = "/profile"}>
                  View Profile
                </button>
              </div>
            </div>
          </ListGroup.Item>
        </div>
      ))}
    </ListGroup>
  );
};

export default DisplayUsersPersonality;
