import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from 'react-redux';

import { AppDispatch, RootState } from './store';

type DispatchFunction = () => AppDispatch;

export const useSessionDispatch: DispatchFunction = useDispatch;
export const useSessionSelector: TypedUseSelectorHook<RootState> = useSelector;
