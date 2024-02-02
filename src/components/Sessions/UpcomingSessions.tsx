import { useEffect, useRef } from 'react';

import Modal, { type ModalHandle } from '../UI/Modal';
import { useSessionsContext } from '../../store/sessions-context';
import UpcomingSession from './UpcomingSession';
import Button from '../UI/Button';

type UpcomingSessionsProps = {
  onClose: () => void;
};

export default function UpcomingSessions({ onClose }: UpcomingSessionsProps) {
  const modal = useRef<ModalHandle>(null);
  const sessionsCtx = useSessionsContext();

  const hasSessions = sessionsCtx.upcomingSessions.length > 0;

  useEffect(() => {
    if (modal.current) {
      modal.current.open();
    }
  }, []);

  return (
    <Modal ref={modal} onClose={onClose}>
      <h2>Upcoming Sessions</h2>
      {hasSessions && (
        <ul>
          {sessionsCtx.upcomingSessions.map((session) => (
            <li key={session.id}>
              <UpcomingSession />
            </li>
          ))}
        </ul>
      )}
      {!hasSessions && <p>No upcoming sessions.</p>}
      <p className='actions'>
        <Button onClick={onClose}>Close</Button>
      </p>
    </Modal>
  );
}
