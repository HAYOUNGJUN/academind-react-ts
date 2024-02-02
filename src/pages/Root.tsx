import { Outlet } from 'react-router-dom';
import Header from '../components/Navigation/Header.tsx';
import SessionsContextProvider from '../store/sessions-context.tsx';

export default function Root() {
  return (
    <SessionsContextProvider>
      <Header />
      <Outlet />
    </SessionsContextProvider>
  );
}
