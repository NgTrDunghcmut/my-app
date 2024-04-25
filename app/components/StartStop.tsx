import { useState } from "react";
import { deviceswitch } from "../Services";
// import SwitchButton from "./ToggleSwitch";

import "../font/index.css";
import React from "react";
const DeviceSwitch = () => {
  const [state, flip] = useState<any>(1);
  const handleswitch = async (e: any) => {
    console.log(state);
    const newState = 1 - state;
    flip(newState);
    const response = await deviceswitch(state.toString());
    console.log(state);
  };
  return (
    <div>
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          defaultValue=""
          className="sr-only peer"
          onChange={handleswitch}
        />
        <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 peer-checked" />

        <span
          className="ms-3 text-md font-medium text-gray-900 dark:text-gray-300"
          style={{ fontFamily: "Tech", fontWeight: "bold" }}
        >
          On/Off Device
        </span>
      </label>
    </div>
  );
};
export default DeviceSwitch;
