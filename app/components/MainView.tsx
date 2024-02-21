"use client";

import { useState } from "react";
import { twMerge } from "tailwind-merge";
import Chart from "./Chart";
const tabs = [
  {
    title: "Training histogram",
  },
  {
    title: "Device info",
  },
  {
    title: "Data",
  },
];

const styleActive =
  "inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500";
const style =
  "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300";
const MainView = () => {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 mt-6">
        <ul className="flex flex-wrap -mb-px">
          {tabs.map((item, index) => {
            return (
              <li className="me-2" key={index} onClick={() => setActive(index)}>
                <a
                  href="#"
                  className={twMerge(
                    style,
                    active === index ? styleActive : ""
                  )}
                >
                  {item?.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      {active === 0 && (
        <>
          <Chart />
        </>
      )}
      {active === 1 && <>component 2</>}
      {active === 2 && <>component 3</>}
    </div>
  );
};
export default MainView;