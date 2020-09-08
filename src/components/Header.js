
import React, { Component } from 'react';
import { useLocation } from 'react-router-dom';

const UserHeader = ({ user }) => {
  const location = useLocation();

  return (
    <HeaderContainer isHome={location.pathname === '/'}>
      <Header>
        <Image src={user.basics.picture} />
        <div>
          <h2>{user.basics.name}</h2>
          <h4>
            <p>{user.basics.username}</p>

          </h4>
          <p>{user.basics.label}</p>
          <p>Coding in {user.basics.region}</p>
          <p>{user.basics.yearsOfExperience} years of experience as a developer</p>
          <p>{user.basics.headline}</p>

    )
  }
}

export default Header;


        </div>
      </Header>
      <div>
        {/* <ViewResumeLink
          href={`https://gitconnected.com/${user.basics.username}/resume`}
          target="_blank"
          rel="noopener noreferrer"
        > */}

        <span>View Résumé</span>
      </div>
    </HeaderContainer >
  );
};

export default UserHeader;