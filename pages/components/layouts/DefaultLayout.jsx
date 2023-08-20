import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

function DefaultLayout({ children }) {
  return (
    <main>
      <Navbar/>
      <main>{children}</main>
      <Footer/>
    </main>
  );
}

export default DefaultLayout;
