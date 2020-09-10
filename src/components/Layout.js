import React from 'react';
import Sidebar from '../Sidebar';
import Header from '../Header';

import { StyledContent } from './styles';

const Layout = ({ user, children }) => {
  return (
    <>
      <MobileNav />
      <Sidebar />
      <StyledContent>
        <Header user={user} />
        <div>{children}</div>
      </StyledContent>
    </>
  );
};

export default Layout;