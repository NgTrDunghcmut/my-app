import Link from "next/link";
import Image from "next/image";

const LogoWithLink = () => (
  <Link href="/">
    <Image
      width={60}
      height={60}
      className="h-auto"
      src="/images/Batman-Logo.png"
      alt="logo"
    />
  </Link>
);

export default LogoWithLink;
