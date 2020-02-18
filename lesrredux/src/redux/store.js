import { createStore } from 'redux';
import {devToolsEnhancer} from 'redux-devtools-extension'; // чтобы работала вкладка redux в devTools
import {reducer} from './counter/counterReducer'

//const reducer = (state = 0) => state; //reducer - чистая функция 

export const store = createStore(reducer, devToolsEnhancer()) ; //100 второй параметр, базовое значение