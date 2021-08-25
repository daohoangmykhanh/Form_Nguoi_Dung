import {combineReducers, createStore} from 'redux';
import { baiTapQuanLyNguoiDungReducer } from './reducers/baiTapNguoiDungReducer';

const rootReducer = combineReducers({
    
    baiTapQuanLyNguoiDungReducer,

});

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


