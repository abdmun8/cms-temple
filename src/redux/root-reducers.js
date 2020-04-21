import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './reducer/user.reducer';
import loginReducer from './reducer/login.reducer';
import tokenReducer from './reducer/token.reducer';

const persistConfig = {
  key: 'cms-temple',
  storage,
  whitelist: ['currentUser', 'token']
};

const rootReducer = combineReducers({
  currentUser: userReducer,
  token: tokenReducer
});

export default persistReducer(persistConfig, rootReducer);
