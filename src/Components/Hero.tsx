import Button from "./Button";

const Hero = () => {
  return (
    <section className="relative mx-[2.19rem] pb-8 text-center md:mx-40 md:pb-16 lg:mx-[31rem] lg:max-w-[28rem]">
      <h1 className="text-Slate-900 500p:mt-[27.44rem] mt-[17rem] text-[2.5rem] leading-[1.1] font-black md:mt-[27.44rem] md:text-5xl lg:mt-[87px] lg:text-[4rem]">
        Group Chat <span className="block">for Everyone</span>
      </h1>
      <p className="text-Slate-600 mt-6 text-base leading-6 font-medium lg:mt-8 lg:text-lg">
        Meet makes it easy to connect with others face-to-
        <span className="lg:block">
          face virtually and collaborate across any device.
        </span>
      </p>
      <div className="mt-6 flex flex-col gap-4 md:mx-auto md:flex-row lg:mt-8">
        <Button type="download" />
        <Button type="what" />
      </div>
    </section>
  );
};

export default Hero;
