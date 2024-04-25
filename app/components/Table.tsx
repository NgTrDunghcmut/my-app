import { useEffect, useState } from "react";
import { getinfo } from "../Services";

const Table = ({ data }: any) => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    getdevice();
  }, []);
  const getdevice = async () => {
    const res = await getinfo(data);
    setInfo(res.data);
  };
  return (
    <div style={{ fontFamily: "Tech", fontSize: 20 }} className="Table">
      <table
        style={{
          marginTop: "30px",
          width: "100%",
          borderCollapse: "collapse",
          border: "4px solid black",
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                border: "2px solid black",
                padding: "8px",
                textAlign: "center",
                backgroundColor: "#A4F5F5",
              }}
            >
              Name
            </th>
            <th
              style={{
                border: "2px solid black",
                padding: "8px",
                textAlign: "center",
                backgroundColor: "#A4F5F5",
              }}
            >
              ID
            </th>
            <th
              style={{
                border: "2px solid black",
                padding: "8px",
                textAlign: "center",
                backgroundColor: "#A4F5F5",
              }}
            >
              Type
            </th>
          </tr>
        </thead>
        <tbody>
          {info.map((val: any, key: any) => (
            <tr key={key} style={{ border: "1px solid black" }}>
              <td
                style={{
                  border: "2px solid black",
                  padding: "8px",
                  textAlign: "center",
                }}
              >
                {val.name}
              </td>
              <td
                style={{
                  border: "2px solid black",
                  padding: "8px",
                  textAlign: "center",
                }}
              >
                {val.id}
              </td>
              <td
                style={{
                  border: "2px solid black",
                  padding: "8px",
                  textAlign: "center",
                }}
              >
                {val.type}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
