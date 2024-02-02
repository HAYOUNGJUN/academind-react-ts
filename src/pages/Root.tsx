import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';

import Header from '../components/Navigation/Header.tsx';
// import SessionsContextProvider from '../store/sessions-context.tsx';
import { store } from '../store/store.ts';

export default function Root() {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
    </Provider>
  );
}
