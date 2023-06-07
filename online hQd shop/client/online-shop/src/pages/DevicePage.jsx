import React from "react";
import { useParams } from "react-router-dom";
import { addToBasket, fetchOneDevice } from '../http/deviceAPI';

const DevicePage = () => {
    const [device, setDevice] = React.useState({ info: [] });
  
    const { id } = useParams();
  
    React.useEffect(() => {
      fetchOneDevice(id).then((data) => setDevice(data));
    }, []);
  
    const [showAlert, setShowAlert] = React.useState(false);
  
    const addedToCart = () => {
      const formData = new FormData();
      formData.append('deviceId', id);
  
      addToBasket(formData)
        .then((res) => setShowAlert(true))
  
        .then((res) =>
          setTimeout(() => {
            setShowAlert(false);
          }, 2000),
        );
    };
  
    return (
<div
  className="  text-white bg-cover  h-screen flex flex-col  bg-slate-900 items-center pt-10 pb-10"
>
  <div className="w-full max-w-4xl p-10  rounded-lg shadow-md mt-20"
       style={{
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        backgroundSize: "cover",
        backdropFilter: "blur(6px)",
  }}>
    <div className="d-flex items-stretch ml-10 mb-8">
      <img className="w-68 mr-18" src={import.meta.env.VITE_REACT_APP_API_URL + device.img} key={device.id} alt={device.name} />
      <div className="w-25 h-25">
        <h1 className="w-full text-4xl  ml-8 text-white font-bold mb-2" key={device.id} >{device.name}</h1>
        <h2 className="text-red-600 ml-8 text-lg " key={device.id} >{device.price}p</h2>
        <button className="w-100 btn btn-primary ml-8 mt-2 mb-6 " onClick={addedToCart}>
          В корзину
        </button>
        <div className="d-flex ml-8 mb-10 d-flex">
              <p>
                Рейтинг: {device.rating}
              </p>
              <img className="ml-2   w-5 h-5" alt="star" src="/public/img/star.png"/>
              
        </div>
        <div className="w-full">
        <h3 className="text-xl font-bold ml-8 text-white">Характеристики</h3>
          <ul className="list-disc ml-12 w-full">
            {device.info.map((info) => (
              <li key={info.id}>
                <strong>{info.title}:</strong> {info.description}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>

    {showAlert && (
      <div className="toast toast-end toast-top">
        <div className="alert alert-info">
          <div>
            <span className="font-bold" key={device.id} >{`Товар ${device.name} был добавлен в корзину`}</span>
          </div>
          <div className="flex-none">
            <button onClick={() => setShowAlert(false)} className="btn btn-sm">
              Закрыть!
            </button>
          </div>
        </div>
      </div>
    )}
  </div>
</div>
    );
  };
  
  export default DevicePage;