import { createStore, applyMiddleware, combineReducers, AnyAction } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { createWrapper, Context, MakeStore, HYDRATE } from 'next-redux-wrapper';
import { userReducer } from './userReducer';

const rootReducer = combineReducers({
  userReducer,
});
//@ts-ignore

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(middleware));
  }
  return applyMiddleware(middleware);
};
//@ts-ignore
const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    if (state.count) nextState.count = state.count; // preserve count value on client side navigation
    return nextState;
  } else {
    return rootReducer(state, action);
  }
};
export type RootState = ReturnType<typeof rootReducer>;

export const makeStore: MakeStore<RootState> = (context: Context) =>
  createStore(reducer, bindMiddleware(thunk));

export const wrapper = createWrapper<RootState>(makeStore, { debug: true });
export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>;
