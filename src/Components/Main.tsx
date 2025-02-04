import Hero from "./Hero";
import Info from "./Info";
import heroMobileImg from "../assets/tablet/image-hero.png";
import heroTabletImg from "../assets/tablet/image-hero.png";
import heroDesktopLeftImg from "../assets/desktop/image-hero-left.png";
import heroDesktoprightImg from "../assets/desktop/image-hero-right.png";

const Main = () => {
  return (
    <main>
      <picture>
        <source srcSet={heroTabletImg} media="(min-width: 768px)" />

        <img
          src={heroMobileImg}
          alt="Photos of 12 meet users"
          className="absolute top-[140px] right-[-29px] max-w-[116%] md:left-[-26px] md:w-full md:max-w-[107%] lg:hidden"
        />
      </picture>

      <div className="hidden lg:relative lg:flex">
        <img
          src={heroDesktopLeftImg}
          alt="Desktop Left Image"
          className="lg:absolute lg:top-16 lg:left-[-26px] lg:w-[50%] lg:max-w-[394px]"
        />
        <img
          src={heroDesktoprightImg}
          alt="Desktop Right Image"
          className="lg:absolute lg:top-[7.56rem] lg:right-[-26px] lg:w-[50%] lg:max-w-[394px]"
        />
      </div>

      <Hero />
      <Info />
    </main>
  );
};

export default Main;
