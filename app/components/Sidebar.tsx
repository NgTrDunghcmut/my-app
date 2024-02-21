"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

const devices: any = {
  type1: [
    {
      id: 1,
      name: "device 1",
    },
    {
      id: 2,
      name: "device 2",
    },
  ],
  type2: [
    {
      id: 3,
      name: "device 3",
    },
    {
      id: 4,
      name: "device 4",
    },
  ],
};

const Sidebar = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  return (
    <div className="sidebar top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-blue-500 min-h-[calc(100vh-10px)]">
      <div className="text-gray-100 text-xl">
        <div className="p-2.5 mt-1 flex items-center bg-white rounded-xl">
          <i className="bi bi-app-indicator px-2 py-1 rounded-md bg-blue-500"></i>
          <h1 className="font-bold text-blue-500 text-[15px] ml-3">
            Device type 1
          </h1>
          <i className="bi bi-x cursor-pointer ml-28 lg:hidden"></i>
        </div>
      </div>
      {devices?.type1 &&
        devices?.type1.length &&
        devices.type1.map((item: any) => {
          return (
            <Link
              href={`/details/type1?id=${item?.id}`}
              className={twMerge(
                "p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white",
                item?.id?.toString() === id ? "bg-blue-600" : ""
              )}
              key={item?.id}
            >
              <i className="bi bi-house-door-fill"></i>
              <span className="text-[15px] ml-4 text-gray-200 font-bold">
                {item?.name}
              </span>
            </Link>
          );
        })}

      <div className="text-xl mt-10">
        <div className="p-2.5 mt-1 flex items-center bg-white rounded-xl">
          <i className="bi bi-app-indicator px-2 py-1 rounded-md bg-blue-500"></i>
          <h1 className="font-bold text-blue-500 text-[15px] ml-3">
            Device type 2
          </h1>
          <i className="bi bi-x cursor-pointer ml-28 lg:hidden"></i>
        </div>
      </div>

      {devices?.type2 &&
        devices?.type2?.length &&
        devices.type2.map((item: any) => {
          return (
            <Link
              href={`/details/type2?id=${item?.id}`}
              className={twMerge(
                "p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white",
                item?.id?.toString() === id ? "bg-blue-600" : ""
              )}
              key={item?.id}
            >
              <i className="bi bi-house-door-fill"></i>
              <span className="text-[15px] ml-4 text-gray-200 font-bold">
                {item?.name}
              </span>
            </Link>
          );
        })}
    </div>
  );
};
export default Sidebar;
