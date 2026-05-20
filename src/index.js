import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import UserStore from './store/UserStore';
import ItemStore from './store/ItemStore';
import BasketStore from './store/BasketStore';
import CallbackStore from './store/CallbackStore';
import BurgerStore from './store/BurgerStore';
import App from './App';

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    user: new UserStore(),
    item: new ItemStore(),
    basket: new BasketStore(),
    callback: new CallbackStore(),
    burger: new BurgerStore()
  }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Context.Provider>
);
