import React, { useContext} from "react";
import { Context } from "../main";
import { NavLink } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE, BASKET_ROUTE  } from "../utils/consts";
import {useNavigate} from 'react-router-dom';
import { observer } from "mobx-react-lite";



const NavBar = observer( () => {
    const{user} = useContext(Context)
    const history = useNavigate({})

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.removeItem('token');
        window.location.reload();
    }

    return(
<nav className="flex w-full items-center justify-between bg-blue-950 border-gray-200 dark:bg-blue-950">
  <div className="w-auto">
    <NavLink to={SHOP_ROUTE} className="flex items-center">
      <img src="/public/img/shop image.png" className="w-114 h-29.71 ml-16 mt-1" alt="Flowbite Logo" />
    </NavLink>
  </div>

  <div className="hidden md:block font-medium p-4 mr-8 dark:bg-blue-950 md:dark:bg-blue-950">
    {user.isAuth ?
      <div className="flex flex-row items-center">
        <button className="font-montserrat font-normal text-white text-lg mr-6 bg-transparent px-4 py-2 rounded-md transition duration-300 ease-in-out focus:outline-none focus:shadow-outline-gray focus:ring-2 focus:ring-blue-500"
                onClick={() => history(SHOP_ROUTE)}>Главная</button>
        <button className="font-montserrat font-normal text-white text-lg mr-6 bg-transparent px-4 py-2 rounded-md transition duration-300 ease-in-out focus:outline-none focus:shadow-outline-gray focus:ring-2 focus:ring-blue-500"
                onClick={() => history(BASKET_ROUTE)}>Корзина</button>
        <button className="font-montserrat font-normal text-white text-lg mr-6 bg-transparent px-4 py-2 rounded-md transition duration-300 ease-in-out focus:outline-none focus:shadow-outline-gray focus:ring-2 focus:ring-blue-500"
                onClick={() => history(ADMIN_ROUTE)}>Админ панель</button>
        <button className="font-montserrat font-normal text-white text-lg ml-8 mr-10 bg-transparent px-4 py-2 rounded-md transition duration-300 ease-in-out focus:outline-none focus:shadow-outline-gray focus:ring-2 focus:ring-blue-500"
                onClick={() => logOut()}>Выйти</button>
      </div>
      :
      <button className="font-montserrat font-normal text-white text-lg ml-8 mr-10 bg-transparent px-4 py-2 rounded-md transition duration-300 ease-in-out focus:outline-none focus:shadow-outline-gray focus:ring-2 focus:ring-blue-500"
              onClick={() => history(LOGIN_ROUTE)}>Авторизация</button>
    }
  </div>
</nav>
    );
});

export default NavBar;