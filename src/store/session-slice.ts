import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

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

const initialState: SessionsState = {
  upcomingSessions: [],
};

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    bookSession(state, action: PayloadAction<Session>) {
      if (
        !state.upcomingSessions.some(
          (session) => session.id === action.payload.id
        )
      ) {
        state.upcomingSessions.push(action.payload);
      }
    },
    cancelSession(state, action: PayloadAction<string>) {
      const sessionIndex = state.upcomingSessions.findIndex(
        (session) => session.id === action.payload
      );
      state.upcomingSessions.splice(sessionIndex, 1);
    },
  },
});

export const { bookSession, cancelSession } = sessionSlice.actions;
