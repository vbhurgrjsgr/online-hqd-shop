import React, { useContext, useEffect } from "react";
import DeviceList from "../components/DeviceList";
import TypeBar from "../components/TypeBar";
import Pages from "../components/Pages";
import { fetchDevices, fetchTypes } from "../http/deviceAPI";
import { Context } from "../main";
import {observer} from "mobx-react-lite";

const Shop = observer(() => {
    const {device} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchDevices(null, null, 1, 2).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchDevices(device.selectedType.id, device.page, 6).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [device.page, device.selectedType,])

    return (
<div className="bg-cover flex flex-col items-center bg-[url('/public/img/4kShopPagePhone.png')]">
  <div className="w-3/6 mx-auto mt-12 mb-20">
    <div className="flex flex-row items-center">
      <div className="w-2/3 pr-10">
        <h1 className="text-white text-4xl font-bold my-4">HQD PODS</h1>
        <p className="text-gray-400 text-xl font-normal mb-4">Новое слово в парении - открой мир богатства вкуса HQD</p>
        <button className="btn px-4 py-2 text-white bg-black rounded-lg hover:bg-blue-600 hover:text-white">Показать</button>
      </div>
      <div className="w-1/3 flex justify-end mt-2">
        <img src="/public/img/hqd prev 1.png" alt="HQD Preview" className="w-60 h-auto" />
      </div>
    </div>
  </div>
  <div className="mx-auto mt-10 w-500 md:w-1/2 lg:w-3/5 h-400 rounded-lg flex  justify-center ">
    <div>
      <img src="/public/img/H057-4-1024x993 1.png" alt="HQD Maxx" className="w-300 h-380 ml-70" />
    </div>
    <div className="w-1/2 pl-8 text-left">
      <h2 className="uppercase font-bold text-white text-3xl mt-8">
        Попробуй новый HQD MAXX
      </h2>
      <p className="font-normal text-gray-400 text-lg mt-8">
        HQD Maxx – это одноразовое вейп-устройство, которое удобно использовать и легко носить с собой. Оно имеет прямоугольную форму с дриптипом в верхнем основании. В устройстве встроена батарея емкостью 1400 мАч, а объем жидкости в нем составляет 8 мл и содержит 6% солевого никотина, максимум до 2500 затяжек. Нет кнопок, просто сделайте затяжку, чтобы насладиться чистым ароматом.
      </p>
    </div>
  </div>
  <div>
    <div className="mt-5 mb-5 d-flex flex-wrap justify-center  mx-auto items-center">
          <TypeBar />
    </div>          
        <DeviceList className=" h-screen flex justify-center items-center" />
  </div>
        <Pages className="mt-10"/>
</div>
      );
});

export default Shop;