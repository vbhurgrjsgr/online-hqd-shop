
import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const createDevice = async (device) => {
    const {data} = await $authHost.post('api/device', device)
    return data
}

export const fetchDevices = async (typeId, page, limit= 5) => {
    const {data} = await $host.get('api/device', {params: {
            typeId, page, limit
        }})
    return data
}

export const fetchOneDevice = async (id) => {
    const {data} = await $host.get('api/device/' + id)
    return data
}

export const addToBasket = async (deviceId) => {
    const { data } = await $authHost.post('api/basket', deviceId);
    return data;
  };
  
  export const deleteFromBasket = async (id) => {
    const { data } = await $authHost.post('api/basket/delete', { id: id });
    return data;
  };
  
  export const deleteAllFromBasket = async () => {
    const { data } = await $authHost.post('api/basket/deleteAll');
    return data;
  };
  
  export const getBasket = async () => {
    const { data } = await $authHost.get('api/basket');
    return data;
  };
  