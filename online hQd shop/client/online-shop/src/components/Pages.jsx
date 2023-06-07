import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../main";

const Pages = observer(() => {
  const { device } = useContext(Context);

  const pageCount = Math.ceil(device.totalCount / device.limit);
  const pages = [];

  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1);
  }

  return (
    <div className="mb-20 relative flex gap-1">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => device.setPage(page)}
          className={`w-8 h-8 font-medium text-gray-700 rounded-lg ${
            device.page === page
              ? "bg-blue-500 text-white"
              : "bg-white hover:bg-blue-500 hover:text-white"
          } focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-opacity-50 ${
            device.page === page ? "focus:ring-blue-500" : ""
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
});

export default Pages;