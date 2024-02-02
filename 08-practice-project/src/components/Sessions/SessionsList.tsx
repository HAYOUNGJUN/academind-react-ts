import SessionItem, { type SessionItemProps } from './SessionItem';

type SessionsListProps = { sessions: SessionItemProps[] };

export default function SessionsList({ sessions }: SessionsListProps) {
  return (
    <ul id='sessions-list'>
      {sessions.map((session) => (
        <li key={session.id}>{<SessionItem {...session} />}</li>
      ))}
    </ul>
  );
}
