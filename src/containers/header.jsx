import React, { Component } from 'react';
import HeaderDiv1 from '../components/header/headerDiv1';
import HeaderDiv2 from '../components/header/headerDiv2';
import Nav from '../components/header/nav';
import '../css/header/header.css';

export default class header extends Component {
  render() {
    return (
      <div className='header'>
        <HeaderDiv1 />
        <Nav/>
        <HeaderDiv2 />  
      </div>  
    )
  }
}
