
import React, { Component } from 'react';

import { useLocation } from 'react-router-dom';

const UserHeader = ({ user }) => {
  const location = useLocation();

  return (
    <>
      <header>
        <img src={user.basics.picture} />
        <div>
          <h2>{user.basics.name}</h2>
          <h4>
            <p>{user.basics.username}</p>

          </h4>
          <p>{user.basics.label}</p>
          <p>Coding in {user.basics.region}</p>
          <p>{user.basics.yearsOfExperience} years of experience as a developer</p>
          <p>{user.basics.headline}</p>

        </div>
      </hcd ceader>
    </>
  );
};

export default UserHeader;