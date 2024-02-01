// import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Button from '../UI/Button.tsx';

export default function Header() {
  return (
    <header id='main-header'>
      <h1>ReactMentoring</h1>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>Our Mission</NavLink>
          </li>
          <li>
            <NavLink to='/sessions'>Browse Sessions</NavLink>
          </li>
          <li>
            <Button>Upcoming Sessions</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
