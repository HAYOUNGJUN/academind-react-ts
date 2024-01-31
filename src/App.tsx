import Button from './components/Button.tsx';
import Container from './components/Container.tsx';

function App() {
  return (
    <main>
      <Container as={Button} onClick={() => {}} type='button'>
        Click me
      </Container>
    </main>
  );
}

export default App;
