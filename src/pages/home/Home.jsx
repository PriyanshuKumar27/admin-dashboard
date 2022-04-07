import React from 'react';
import './home.scss';
import {Navbar, Sidebar} from '../../components/index';

const Home = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
        Container
      </div>
    </div>
  )
}

export default Home;