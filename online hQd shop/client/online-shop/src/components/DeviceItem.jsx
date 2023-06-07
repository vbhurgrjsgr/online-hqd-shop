import React from "react";
import { Card, Image, Button} from "react-bootstrap";

import { useNavigate } from "react-router-dom"
import {DEVICE_ROUTE} from "../utils/consts";
import { addToBasket } from '../http/deviceAPI';

const DeviceItem = ({device}) => {
    const navigate = useNavigate()

    console.log(navigate)
    const addedToCart = () => {
        const formData = new FormData();
        formData.append('deviceId', device.id);
        addToBasket(formData).then((res) => alert(`Товар ` + device.name + ` был добавлен в корзину!`));
      };
    return (
<div className="w-64 h-auto  flex flex-col justify-between" onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
  <div className="flex flex-col items-center">
    <p className="text-lg font-bold mb-2 truncate text-white">{device.name}</p>
    <Image src={import.meta.env.VITE_REACT_APP_API_URL + device.img} alt={device.name} className="max-w-full h-auto rounded-md shadow-md" />
  </div>
  <div className="flex justify-center">
    <button type="button" onClick={addedToCart} className="mt-3 bg-blue-500 text-white font-medium py-2 px-4 rounded-full cursor-pointer transition-all duration-300 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
      В корзину
    </button>
  </div>
</div>
        
    );
};

export default DeviceItem;