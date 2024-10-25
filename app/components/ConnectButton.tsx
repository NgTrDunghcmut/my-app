import { connectmqtt } from "../Services";
import Popup from "./Popup";

const message = "Connection: ";
const description = "Successfully";
const fail = "Failed";
const ConnectButton = () => {
  const handleConnect = async () => {
    try {
      const res = await connectmqtt();
      Popup({ message, description });
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div>
      <button
        style={{
          fontSize: "15px",
          backgroundColor: "#A4F5F5",
          fontWeight: "bolder",
          fontFamily: "Tech",
          blockSize: 35,
          marginLeft: 45,
        }}
        className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-Black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] "
      >
        <a onClick={handleConnect} style={{ cursor: "pointer" }}>
          Connect
        </a>
      </button>
    </div>
  );
};
export default ConnectButton;
