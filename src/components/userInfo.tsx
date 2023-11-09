import React from 'react';

interface UserInfoProps {
  userName: string;
  age: number;
  personalityType: string;
  interests: string[];
}

const UserInfo: React.FC<UserInfoProps> = ({ userName, age, personalityType, interests }) => {
  return (
    <div className="user-info">
      <h2>User Information</h2>
      <table>
        <thead>
          <tr>
            {/* <th>Attribute</th>
            <th>Value</th> */}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name:</td>
            <td>{userName}</td>
          </tr>
          <tr>
            <td>Age:</td>
            <td>{age}</td>
          </tr>
          <tr>
            <td>Personality Type:</td>
            <td>{personalityType}</td>
          </tr>
          <tr>
            <td>Interests:</td>
            <td>{interests.join(', ')}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const interests: string[] = ['Reading', 'Football'];

export { UserInfo, interests };
