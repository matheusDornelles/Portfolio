import React from 'react'
import Avatar from '../img/eu.jpg'
import "../styles/components/sidebar.sass";
import InformationContainer from './InformationContainer';
import SocialNetworks from './SocialNetworks';

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Matheus Dornelles" />
      <p className='title'>Full-Stack Developer</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="" className='btn'>
        Dowload Currículo
      </a>
    </aside>
  )
}

export default Sidebar