import Button from '../UI/Button';

export type SessionItemProps = {
  id: string;
  title: string;
  summary: string;
  image: string;
};

export default function SessionItem({
  id,
  title,
  summary,
  image,
}: SessionItemProps) {
  return (
    <article className='session-item'>
      <img src={image} alt={title} />
      <div className='session-data'>
        <div>
          <h3>{title}</h3>
          <p>{summary}</p>
        </div>
        <div>
          <Button to={id}>Learn More</Button>
        </div>
      </div>
    </article>
  );
}
