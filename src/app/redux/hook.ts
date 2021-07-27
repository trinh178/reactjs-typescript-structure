import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootStateProps, AppDispatchProps } from './store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatchProps>();
export const useAppSelector: TypedUseSelectorHook<RootStateProps> = useSelector;
