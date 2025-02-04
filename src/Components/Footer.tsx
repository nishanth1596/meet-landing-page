import Button from "./Button";
import number2 from "../assets/number02.png";

const Footer = () => {
  return (
    <footer className="relative w-full">
      <img
        src={number2}
        alt="Number 2"
        className="absolute top-0 right-1/2 translate-x-1/2"
      />

      <div className="text-White footerImg mt-[6.75rem] flex flex-col items-center gap-6 bg-cover bg-top px-8 py-16 text-center lg:mx-0 lg:flex-row lg:justify-between lg:gap-8 lg:px-40 lg:py-28 lg:text-left">
        <h3 className="text-[2rem] leading-[1.1] font-black">
          Experience more together
        </h3>
        <p className="text-base leading-6 font-medium lg:max-w-[355px] lg:text-lg">
          Stay connected with reliable HD meetings and unlimited one-on-one and
          group <span className="block lg:inline-block">video</span> sessions.
        </p>

        <Button
          type="download"
          color="#855fb1"
          spanColor="#d9b8ff"
          isFooter={true}
        />
      </div>

      <div className="absolute bottom-0 left-1/2 hidden w-full -translate-x-1/2 animate-pulse text-center text-white">
        Challenge by{""}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded with 💜 by{" "}
        <a href="https://www.frontendmentor.io/profile/nishanth1596">
          Nishanth Venkatesan
        </a>
        .
      </div>
    </footer>
  );
};

export default Footer;
