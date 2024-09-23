import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";

//component
import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28  bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* test */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Web Developer
            </div>
            <h1 className="h1 mb-4">Hello, my name is Saint Wongsathon</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Obcaecati, in, sed corporis quisquam ratione ad repellat libero
              quia vel quod eius expedita!
            </p>
            {/* button */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact me <Send size={18} />
                </Button>
              </Link>
              <Link
                href="/Wongsathon_Chuijit_Resume.pdf"
                target="_blank"
                download
              >
                <Button variant="secondary" className="gap-x-2">
                  Download Resume <Download size={18} />
                </Button>
              </Link>
            </div>
            {/* socials */}
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          {/* image */}
          <div className="hidden xl:flex relative">
            {/* badge1 */}

            <Badge
              containerStyle="absolute top-[10%] -left-[5rem]"
              icon={<RiBriefcase4Fill />}
              endCountNum={9}
              badgeText="(4 + 5) Pillars to MAKE SAINT"
            />

            {/* badge2 */}
            <Badge
              containerStyle="absolute top-[80%] -left-[1rem]"
              icon={<RiBriefcase4Fill />}
              endCountNum={5}
              badgeText="Pillars to SAINT"
              badgeTextContent1="S = Super"
              badgeTextContent2="A = Ambition"
              badgeTextContent3="I = Ideas"
              badgeTextContent4="N = Noteworthy"
              badgeTextContent5="T = Teamwork"
            />
            {/* badge3 */}
            <Badge
              containerStyle="absolute top-[55%] -right-8"
              icon={<RiBriefcase4Fill />}
              endCountNum={4}
              badgeText="Pillars to MAKE"
              badgeTextContent1="M = Motivate"
              badgeTextContent2="A = Agile"
              badgeTextContent3="K = Key Sucess"
              badgeTextContent4="E = Entrepreneurial Skill"
            />
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
            <DevImg
              containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
              imgSrc="/hero/devs.png"
            />
          </div>
        </div>
        {/* icon */}
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
