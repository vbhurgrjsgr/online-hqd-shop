import React from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../main';
import { getBasket, deleteFromBasket, deleteAllFromBasket } from '../http/deviceAPI';

const Basket = observer(() => {
  const { device } = React.useContext(Context);

  React.useEffect(() => {
    getBasket().then((data) => device.setBasket(data));
  }, []);

  let total = 0;
  {
    device.basket.map((price) => (total += Number(price.device.price)));
  }

  const refreshPage = () => {
    window.location.reload();
  };

  const removeFromCart = (id) => {
    deleteFromBasket(id)
      .then((res) => alert(`Товар` + device.name + `удален из корзины!`))
      .then((res) => refreshPage());
  };

  const removeAllFromCart = () => {
    deleteAllFromBasket()
      .then((res) => console.log(`Товаров было удалено!`))
      .then((res) => refreshPage());
  };

  const decrementQuantity = (id) => {
    const updatedBasket = device.basket.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      } else {
        return item;
      }
    });
    device.setBasket(updatedBasket);
    
    let total = 0;
    updatedBasket.forEach((price) => {
      total += Number(price.device.price) * price.quantity;
    });
    device.setTotal(total);
  };
  
  const incrementQuantity = (id) => {
    const updatedBasket = device.basket.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      } else {
        return item;
      }
    });
    device.setBasket(updatedBasket);
    
    let total = 0;
    updatedBasket.forEach((price) => {
      total += Number(price.device.price) * price.quantity;
    });
    device.setTotal(total);
  };

  return (
    <div className="h-screen  justify-center flex bg-slate-900">
      <div className="flex flex-col justify-between items-center w-80 h-32 bg-gray-400 rounded-lg mt-8 mb-4 mr-10 ">
        <div className='d-flex flex-row justify-left items-left mt-8'>
        <h1 className="text-xl font-bold align-end">Итого:</h1>
        <h3 className="text-xl font-bold ml-2 ">{total + ' р'} </h3>          
        </div>
        <button type="button" className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-indigo-800">Перейти к оформлению</button>
      </div>


    <div className='w-2/6 flex-col bg-slate-900h-full '>

      <div className="w-full h-1/12 mb-4 mt-8 flex items-center justify-center bg-gray-400 rounded-sm p-2 font-bold" >
        <h2 className="mt-2 mb-2 font-bold" onClick={() => removeAllFromCart()}>Удалить корзину</h2>
      </div>   
    <div>
      
    </div>

      {device.basket.map((product) => (
  <div className="w-full h-1/8 rounded-lg mt-30 bg-white  pt-3.5 pl-6 pr-6 mb-8 d-flex">
    <img
      className="w-28 h-36 mb-3"
      src={import.meta.env.VITE_REACT_APP_API_URL + product.device.img}
      alt="image"
    />

    <div className="flex-1">
      <h2 className="text-lg font-bold ml-8">{product.device.name}</h2>
      <h3 className="text-sm text-red-600 ml-8">{product.device.price + 'р'}</h3>
      <div className="ml-8 mt-8 p-0 btn-group flex border w-25">
  <button className="w-8 h-8" onClick={() => decrementQuantity(product.id)}>
    -
  </button>
  <h4 className="text-sm text-gray-500 mt-2">{product.quantity} шт.</h4>     
  <button className="w-8 h-8" onClick={() => incrementQuantity(product.id)}>
    +
  </button>
</div> 
    </div>

    <div className="flex flex-col items-end justify-between ml-auto">
      <button onClick={() => removeFromCart(product.id)} className="text-red-600 btn-error ">
        Delete 
      </button>
    </div>
  </div>

  
))}
    </div>
    </div>
  );
});

export default Basket;
