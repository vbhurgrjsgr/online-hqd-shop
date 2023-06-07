import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { registration, login } from "../http/userAPI";
import { Context } from "../main";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';


const Auth = observer(() => {
  const { user } = React.useContext(Context);
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const click = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
      }
      user.setUser(user);
      user.setIsAuth(true);
      navigate(SHOP_ROUTE);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (

      <div className=" bg-slate-900  flex justify-center items-center h-screen">
        <div className='w-1/4 h-2/4 p-10 items-center justify-center'>
            <h1 className="text-4xl text-white font-bold mb-4 mt-10">{isLogin ? 'Sign in to your account' : 'Create your account'}</h1>
            <div>
              <div className="mb-3">
                <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</p>
               <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Введите email..."
                value={email}
                onChange={e => setEmail(e.target.value)}
                suggested="username"
              /> 
              </div>
              <div className="mb-4">
                <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</p>
                <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Введите пароль..."
                value={password || ''}
                autoComplete="current-password"
                onChange={e => setPassword(e.target.value)}
                type='password'
              />
              </div>
                <button
                  onClick={click}
                  className="w-full mitems-stretch text-white bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-violet-600 dark:hover:bg-violet-700 focus:outline-none dark:focus:ring-violet-800"
                >
                  {isLogin ? 'Sing in' : 'Registration'}
                </button>              
              <div>
                {isLogin ? (
                  <div className="d-flex">
                    <div className="text-gray-400 m-2 ">Haven't an account?</div>
                    <NavLink className="m-2 text-lg text-violet-600 " to={REGISTRATION_ROUTE}>Registration</NavLink>
                  </div>
                ) : (
                  <div className="d-flex">
                    <div className="text-gray-400 m-2">Have an account?</div>
                    <NavLink className="m-2 text-lg text-violet-600" to={LOGIN_ROUTE}>Sing in</NavLink>
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>

  );
});

export default Auth;