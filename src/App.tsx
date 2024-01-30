import CourseGoal from './components/CourseGoal.tsx';
import goalsImg from './assets/goals.jpg';

export default function App() {
  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }} />
      <CourseGoal title='Learn React + TS'>
        <p>Learn it from the ground up</p>
      </CourseGoal>
    </main>
  );
}
