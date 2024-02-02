import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Button from '../UI/Button.tsx';
import UpcomingSessions from '../Sessions/UpcomingSessions.tsx';

export default function Header() {
  const [upcomingSessionsVisible, setUpcomingSessionsVisible] = useState(false);

  function showUpcomingSessions() {
    setUpcomingSessionsVisible(true);
  }

  function hideUpcomingSessions() {
    setUpcomingSessionsVisible(false);
  }

  return (
    <>
      {upcomingSessionsVisible && (
        <UpcomingSessions onClose={hideUpcomingSessions} />
      )}
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
              <Button onClick={showUpcomingSessions}>Upcoming Sessions</Button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
