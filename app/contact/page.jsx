import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const Contact = () => {
  return (
    <section>
      <div className="container mx-auto">
        {/* text&illustration */}
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          {/* text */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Hello, I'm Saint Wongsathon 👋
            </div>
            <h1 className="h1 max-w-md mb-8">Let's Work Together.</h1>
            <p className="subtitle max-w-[400px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              cupiditate sint aspernatur animi.
            </p>
          </div>
          {/* illustration */}
          <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"></div>
        </div>
        {/* Info text & form */}
        <div>
          {/* info text */}
          <div className="flex flex-col items-start xl:items-center mb-10">
            {/* mail */}
            <div className="flex items-center gap-x-5 text-xl mb-5">
              <MailIcon size={18} className="text-primary" />
              <div>chuijit_wongsathon@hotmail.com</div>
              <a href="mailto:chuijit_wongsathon@hotmail.com">
                <button className="w-9 h-9 bg-primary text-center p-2 rounded-full transition-all duration-500 ease-in-out hover:bg-accent">
                  <Send size={18} className="text-white" />
                </button>
              </a>
            </div>

            <div className="flex items-center gap-x-5 text-md xl:text-xl mb-5">
              <HomeIcon size={18} className="text-primary" />
              <div>Emerald Ratchada, Soi Gidjakan, Din Daeng, Bangkok</div>
            </div>
            <div className="flex items-center gap-x-5 text-xl mb-5">
              <PhoneCall size={18} className="text-primary" />
              <div>+66 926301187</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
