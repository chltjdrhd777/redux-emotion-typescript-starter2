import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

// 1. dispatch(custom)
// 2. use except in the useEffect()
export const useCustomDispatch = (action: any) => {
  const dispatch = useDispatch();

  dispatch(action);
};

// 2. selector(custom)
// 3. use when want to get modified return state
export const useCustomSelector: TypedUseSelectorHook<RootState> = (selector: any) => {
  return useSelector(selector);
};
