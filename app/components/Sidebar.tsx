"use client";
const Sidebar = () => {
  const dropdown = () => {};
  const sidebar = () => {};
  return (
    <div className="sidebar top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-blue-500 min-h-[calc(100vh-92px)]">
      <div className="text-gray-100 text-xl">
        <div className="p-2.5 mt-1 flex items-center bg-white rounded-xl">
          <i className="bi bi-app-indicator px-2 py-1 rounded-md bg-blue-500"></i>
          <h1 className="font-bold text-blue-500 text-[15px] ml-3">
            Device type 1
          </h1>
          <i
            className="bi bi-x cursor-pointer ml-28 lg:hidden"
            onClick={sidebar}
          ></i>
        </div>
      </div>

      <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
        <i className="bi bi-house-door-fill"></i>
        <span className="text-[15px] ml-4 text-gray-200 font-bold">
          Device 1
        </span>
      </div>
      <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
        <i className="bi bi-bookmark-fill"></i>
        <span className="text-[15px] ml-4 text-gray-200 font-bold">
          Device 2
        </span>
      </div>

      <div className="text-xl mt-10">
        <div className="p-2.5 mt-1 flex items-center bg-white rounded-xl">
          <i className="bi bi-app-indicator px-2 py-1 rounded-md bg-blue-500"></i>
          <h1 className="font-bold text-blue-500 text-[15px] ml-3">
            Device type 2
          </h1>
          <i
            className="bi bi-x cursor-pointer ml-28 lg:hidden"
            onClick={sidebar}
          ></i>
        </div>
      </div>

      <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
        <i className="bi bi-house-door-fill"></i>
        <span className="text-[15px] ml-4 text-gray-200 font-bold">
          Device 1
        </span>
      </div>
      <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
        <i className="bi bi-bookmark-fill"></i>
        <span className="text-[15px] ml-4 text-gray-200 font-bold">
          Device 2
        </span>
      </div>
    </div>
  );
};
export default Sidebar;
