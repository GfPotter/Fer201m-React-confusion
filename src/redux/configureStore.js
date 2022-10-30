import { createStore } from 'redux';
import { Reducer } from './reducer'
export const configureStore = createStore(Reducer);
