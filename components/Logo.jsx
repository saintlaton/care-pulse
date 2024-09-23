import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const Logo = () => {
  return (
    <Link href="/">
      {/* <Image src="/logo.svg" width={54} height={54} priority alt="" /> */}
      <div className="bg-primary p-0 h-[26px] w-[120px] text-md text-center text-secondary rounded-lg">
        MAKE SAINT.
      </div>
    </Link>
  );
};

export default Logo;
