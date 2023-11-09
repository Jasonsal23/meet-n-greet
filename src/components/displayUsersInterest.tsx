import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

interface User {
  username: string;
  userPhoto: string;
}

const users: User[] = [
  { username: 'Davante Adams', userPhoto: 'https://static.clubs.nfl.com/image/private/t_thumb_squared_2x/f_auto/raiders/gdnkpgg631tihmrafor2.jpg' },
  { username: 'Randy Moss', userPhoto: 'https://static.clubs.nfl.com/image/private/t_new_photo_album_2x/f_auto/raiders/iohsdniswqmkkvxthail.jpg' },
  { username: 'Jerry Rice', userPhoto: 'https://static.clubs.nfl.com/image/private/t_new_photo_album_2x/f_auto/raiders/ricng61vkb5cu4vpofio.jpg' },
  { username: 'Maxx Crosby', userPhoto: 'https://static.clubs.nfl.com/image/private/t_thumb_squared_2x/f_auto/raiders/jrcxxzurignvwokntxsj.jpg' },
  { username: 'John Doe', userPhoto: 'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg' }
];

const DisplayUsersInterest: React.FC = () => {
  return (
    <ListGroup className="user-interest">
      {users.map((user, index) => (
        <div className="list-item-interest" key={index}>
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

export default DisplayUsersInterest;
