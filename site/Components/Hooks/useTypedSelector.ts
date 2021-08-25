import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../store/reducers/rootReducer';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
