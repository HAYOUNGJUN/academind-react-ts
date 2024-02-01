import SessionItem, { type SessionItemProps } from './SessionItem';

type SessionItemListProps = { sessions: SessionItemProps[] };

export default function SessionsList({ sessions }: SessionItemListProps) {
  return (
    <ul id='sessions-list'>
      {sessions.map((session) => (
        <li key={session.id}>{<SessionItem {...session} />}</li>
      ))}
    </ul>
  );
}
