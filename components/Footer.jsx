import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-secondary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          {/* social */}
          <Socials
            containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4"
            iconsStyles=" dark:text-white/70 text-[20px] hover:text-primary dark:hover:text-primary transition-all"
          />
          {/* copyright */}
          <div className="text-muted-foreground">
            Copyright &copy; Saint Wongsathon. All right reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
