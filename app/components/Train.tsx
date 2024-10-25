import React, { useEffect, useState } from "react";
import { downloadcsv, traindevice } from "@/app/Services";
import { AxiosResponse } from "axios";
import LoadingSpinner from "./Spiner";

const Trainbutton = ({ device_id }: any) => {
  const [loading, setLoading] = useState<boolean>(false);
  const handleTrain = async () => {
    try {
      setLoading(true);
      const res = await traindevice(device_id);
    } catch (error) {
      console.error("Error downloading CSV:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <button
        type="button"
        style={{
          fontSize: "15px",
          backgroundColor: "#A4F5F5",
          fontWeight: "bolder",
          fontFamily: "Tech",
          blockSize: 35,
        }}
        className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-Black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] "
      >
        <a onClick={handleTrain} style={{ cursor: "pointer" }}>
          Train data with available data
        </a>
        {loading ? <LoadingSpinner /> : null}
      </button>
    </>
  );
};

export default Trainbutton;
