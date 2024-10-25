import { useState } from "react";
import { activateML } from "../Services";
// import SwitchButton from "./ToggleSwitch";
import React from "react";
import { CheckCircleFilled } from "@ant-design/icons";
const MLActivate = ({ device_id }: any) => {
  const [highVisible, setIsVisible] = useState(false);
  const [state, flip] = useState<any>(1);
  const handleswitch = async (e: any) => {
    console.log(state);
    const newState = 1 - state;
    flip(newState);
    const response = await activateML(state.toString(), device_id);
  };
  const toggleVisibility = () => {
    setIsVisible(!highVisible);
  };
  return (
    <div>
      {highVisible ? (
        <button onClick={toggleVisibility}>
          <CheckCircleFilled
            style={{ color: "blue", fontSize: "25px" }}
            onClick={handleswitch}
            spin={true}
          />
        </button>
      ) : (
        <button onClick={toggleVisibility}>
          <CheckCircleFilled
            style={{ color: "#D6C6C6", fontSize: "25px" }}
            onClick={handleswitch}
            spin={false}
          />
        </button>
      )}
    </div>
  );
};

export default MLActivate;
