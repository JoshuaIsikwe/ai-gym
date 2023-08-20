import React from 'react';
import Footer from '../Footer';

function HomeLayout({ children }) {
  return (
    <main>
      <main>{children}</main>
      <Footer/>
    </main>
  );
}

export default HomeLayout;
