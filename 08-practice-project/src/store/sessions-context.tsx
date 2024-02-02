import { type ReactNode, createContext, useContext, useReducer } from 'react';

export type Session = {
  id: string;
  title: string;
  summary: string;
  description: string;
  date: string;
  image: string;
  duration: number;
};

type SessionsState = {
  upcomingSessions: Session[];
};

type SessionContextValue = SessionsState & {
  bookSession: (session: Session) => void;
  cancelSession: (sessionId: string) => void;
};

export const SessionsContext = createContext<SessionContextValue | null>(null);

export function useSessionsContext() {
  const sessionsCtx = useContext(SessionsContext);

  if (sessionsCtx === null) {
    throw new Error('SessionsContext is null - that should not be the case!');
  }

  return sessionsCtx;
}

type BookSessionAction = {
  type: 'BOOK_SESSION';
  session: Session;
};

type CancelSessionAction = {
  type: 'CANCEL_SESSION';
  sessionId: string;
};

type SessionsAction = BookSessionAction | CancelSessionAction;

function sessionsReducer(state: SessionsState, action: SessionsAction) {
  if (action.type === 'BOOK_SESSION') {
    if (
      state.upcomingSessions.some((session) => session.id === action.session.id)
    ) {
      return state;
    }
    return {
      upcomingSessions: state.upcomingSessions.concat(action.session),
    };
  }

  if (action.type === 'CANCEL_SESSION') {
    return {
      upcomingSessions: state.upcomingSessions.filter(
        (session) => session.id !== action.sessionId
      ),
    };
  }

  return state;
}

type SessionsContextProviderProps = {
  children: ReactNode;
};

const initialState: SessionsState = {
  upcomingSessions: [],
};

export default function SessionsContextProvider({
  children,
}: SessionsContextProviderProps) {
  const [sessionsState, dispatch] = useReducer(sessionsReducer, initialState);

  function bookSession(session: Session) {
    dispatch({ type: 'BOOK_SESSION', session });
  }

  function cancelSession(sessionId: string) {
    dispatch({ type: 'CANCEL_SESSION', sessionId });
  }

  const ctxValue: SessionContextValue = {
    upcomingSessions: sessionsState.upcomingSessions,
    bookSession,
    cancelSession,
  };

  return (
    <SessionsContext.Provider value={ctxValue}>
      {children}
    </SessionsContext.Provider>
  );
}
