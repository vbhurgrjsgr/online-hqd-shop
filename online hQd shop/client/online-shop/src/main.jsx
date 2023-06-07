
import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from "./store/UserStore";
import DeviceStore from "./store/DeviceStore";
import 'tailwindcss/tailwind.css'

export const Context = createContext(null)


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Context.Provider value={{
        user: new UserStore(),
        device: new DeviceStore(),
    }}>
        <App />
    </Context.Provider>,
  </React.StrictMode>
);
