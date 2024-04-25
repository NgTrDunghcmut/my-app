import React, { useEffect, useState } from "react";
import { downloadcsv } from "@/app/Services";
import { AxiosResponse } from "axios";

function Downloadbutton() {
  const [response, setResponse] = useState<AxiosResponse | null | void>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await downloadcsv();
        setResponse(res);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  const handleDownload = async () => {
    try {
      const res = await downloadcsv();
      const blob = new Blob([res.data], { type: "text/csv" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "data.csv";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading CSV:", error);
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
        <a onClick={handleDownload} style={{ cursor: "pointer" }}>
          Download CSV
        </a>
      </button>
    </>
  );
}

export default Downloadbutton;
