import Button from "./Button";
import number2 from "../assets/number02.png";
import bgImg from "../assets/mobile/image-footer.jpg";

const Footer = () => {
  return (
    <footer className="relative">
      <img
        src={number2}
        alt="Number 2"
        className="absolute top-0 right-1/2 translate-x-1/2"
      />

      <div
        className="text-White mt-[6.75rem] bg-cover bg-center px-8 py-16 text-center"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <h3 className="text-[2rem] leading-[1.1] font-black">
          Experience more together
        </h3>
        <p className="my-6 text-base leading-6 font-medium">
          Stay connected with reliable HD meetings and unlimited one-on-one and
          group <span className="block">video sessions.</span>
        </p>
        <Button type="download" color="#855fb1" spanColor="#d9b8ff" />
      </div>
    </footer>
  );
};

export default Footer;

{
  /* <footer className="hidden absolute bottom-0 left-1/2 w-full -translate-x-1/2 animate-pulse text-center text-white">
Challenge by{""}
<a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
  Frontend Mentor
</a>
. Coded with 💜 by{" "}
<a href="https://www.frontendmentor.io/profile/nishanth1596">
  Nishanth Venkatesan
</a>
.
</footer> */
}
