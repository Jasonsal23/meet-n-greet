import React from 'react';

interface UserPhotoProps {
  src: string;
}

const UserPhoto: React.FC<UserPhotoProps> = ({ src }) => {
  return (
    <div className='user-photo'>
      <img src={src} alt='User Photo' />
    </div>
  );
};

export default UserPhoto;
