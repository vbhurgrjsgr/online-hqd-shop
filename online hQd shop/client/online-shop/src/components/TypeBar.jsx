import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../main';

const TypeBar = observer(() => {
  const { device } = useContext(Context);

  return (
    <div className="flex flex-wrap justify-center mx-auto">
      {device.types.map((type) => (
        <button
          key={type.id}
          className={"py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-blue-400 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-blue-400 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-900 dark:border-gray-600 dark:hover:text-gary-900 dark:hover:bg-gray-700"}
          style={{ minWidth: '200px', height: '50px' }}
          onClick={() => device.setSelectedType(type)}
        >
            {type.name}
        </button>
      ))}
    </div>
  );
});

export default TypeBar;