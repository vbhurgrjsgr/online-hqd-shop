import React, { useState } from "react";

import CreateType from '/Users/artem/Desktop/online hQd shop/client/online-shop/src/components/modals/CreateType.jsx'
import CreateDevice from '/Users/artem/Desktop/online hQd shop/client/online-shop/src/components/modals/CreateDevice.jsx'
const Admin = () => {
    const [typeVisible, setTypeVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)
    return (
        <div className=" text-white bg-cover  h-screen flex flex-col  bg-slate-900 items-center pt-10 pb-10">
            <h1 className="justify-center text-2xl text-white mt-20 font-bold mb ">Админ панель</h1>
        <div className="w-full max-w-2xl p-10  rounded-lg shadow-md mt-10 justify-center"
                 style={{
                     backgroundColor: "rgba(255, 255, 255, 0.15)",
                     backgroundSize: "cover",
                     backdropFilter: "blur(6px)",
                       }}>

            <button className="w-full relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
                    variant={"outline-dark"} 
                    onClick={()=> setTypeVisible (true)}>
            <span className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray dark:bg-gray-800 rounded-md group-hover:bg-opacity-0">
                Добавить тип
            </span>
            </button>
            <button className="w-full relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
                    variant={"outline-dark"} 
                    onClick={()=> setDeviceVisible (true)}>
            <span className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-bray dark:bg-gray-800 rounded-md group-hover:bg-opacity-0">
                Добавить устройство
            </span>
            </button>

                <CreateDevice show={deviceVisible} onHide={()=> setDeviceVisible (false)}/>
                <CreateType show={typeVisible} onHide={()=> setTypeVisible (false)}/>            
        </div>

        </div>

    );
};

export default Admin;
