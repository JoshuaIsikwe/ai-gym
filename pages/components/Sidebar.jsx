import React, { Component } from 'react';
import Banner from './Banner';

class Sidebar extends Component {

  render() {
    return (
      <div className='flex'>
        Sidebar Nigga
        <div className='fixed w-20 h-screen bg-slate-500 p-4'>

        </div>
        <div className='flex justify-between'>
          <h2>Dashboard</h2>
          <h2>Welcome back, User 23</h2>
        </div>
      </div>
    );
  }
}

export default Sidebar;