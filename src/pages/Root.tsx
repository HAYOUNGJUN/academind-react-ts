import { Outlet } from 'react-router-dom';
import Header from '../components/Navigation/Header.tsx';

export default function Root() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
