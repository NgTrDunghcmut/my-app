import Link from "next/link";
import Image from "next/image";
import { disconnectmqtt } from "../Services";

const LogoWithLink = () => {
  const disconnect = () => {
    disconnectmqtt();
  };
  return (
    <Link href="/">
      <Image
        width={60}
        height={60}
        className="h-auto"
        src="/images/logoBK.png"
        alt="logo"
        onClick={disconnect}
      />
    </Link>
  );
};

export default LogoWithLink;
