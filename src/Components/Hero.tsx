import Button from "./Button";
// import heroImg from "../assets/tablet/image-hero.png";

const Hero = () => {
  return (
    <section className="relative mx-[2.19rem] mt-[17rem] mb-8 text-center">
      {/* <img
        src={heroImg}
        alt="Photos of 12 meet users"
        className="absolute top-0"
      /> */}
      {/* <div style={{ backgroundImage: `url(${heroImg})` }}></div> */}
      <h1 className="text-Slate-900 text-[2.5rem] leading-[1.1] font-black">
        Group Chat <span className="block">for Everyone</span>
      </h1>
      <p className="text-Slate-600 mt-6 text-base leading-6 font-medium">
        Meet makes it easy to connect with others face-to-face virtually and
        collaborate across any device.
      </p>
      <div className="mt-6 flex flex-col gap-4">
        <Button type="download" />
        <Button type="what" />
      </div>
    </section>
  );
};

export default Hero;
