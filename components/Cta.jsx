import { Button } from "./ui/button";
import Link from "next/link";

const Cta = () => {
  return (
    <section className="py-24 bg-wave-gradient">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="h2 max-w-xl text-center mb-8 text-white">
            If it makes sense to you, I'm here to{" "}
            <span className="text-blue-900 dark:text-primary">MAKE SAINT</span>{" "}
            too. 👨‍💻
          </h2>
          <Link href="/contact">
            <Button>Contact me</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
