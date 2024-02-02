import { useEffect, useRef } from 'react';

import Modal, { type ModalHandle } from '../UI/Modal.tsx';
// import { useSessionsContext } from '../../store/sessions-context';
import UpcomingSession from './UpcomingSession.tsx';
import Button from '../UI/Button.tsx';
import { useSessionSelector, useSessionDispatch } from '../../store/hooks.ts';
import { cancelSession } from '../../store/session-slice.ts';

type UpcomingSessionsProps = {
  onClose: () => void;
};

export default function UpcomingSessions({ onClose }: UpcomingSessionsProps) {
  const modal = useRef<ModalHandle>(null);
  // const sessionsCtx = useSessionsContext();
  const dispatch = useSessionDispatch();
  const sessions = useSessionSelector((state) => state.session);

  const hasSessions = sessions.upcomingSessions.length > 0;

  useEffect(() => {
    if (modal.current) {
      modal.current.open();
    }
  }, []);

  function handleCancelSession(sessionId: string) {
    // sessionsCtx.cancelSession(sessionId);
    dispatch(cancelSession(sessionId));
  }

  return (
    <Modal ref={modal} onClose={onClose}>
      <h2>Upcoming Sessions</h2>
      {hasSessions && (
        <ul>
          {sessions.upcomingSessions.map((session) => (
            <li key={session.id}>
              <UpcomingSession
                session={session}
                onCancel={() => handleCancelSession(session.id)}
              />
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
