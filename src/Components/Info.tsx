import img1 from "../assets/desktop/image-woman-in-videocall.jpg";
import img2 from "../assets/desktop/image-women-videochatting.jpg";
import img3 from "../assets/desktop/image-men-in-meeting.jpg";
import img4 from "../assets/desktop/image-man-texting.jpg";
import number1 from "../assets/number01.png";

const Info = () => {
  return (
    <section className="relative mx-8 mt-8 mb-16 text-center md:mx-11">
      <img
        src={number1}
        alt="number 1"
        className="absolute top-0 left-1/2 -translate-x-1/2"
      />

      <div className="grid grid-cols-2 gap-4 pt-[12.5rem] *:rounded-lg md:grid-cols-4 md:gap-6">
        <img src={img1} alt="Woman in Videocall" />
        <img src={img2} alt="Women videochatting" />
        <img src={img3} alt="Men in meeting" />
        <img src={img4} alt="Man texting" />
      </div>

      <p className="text-Cyan-600 mt-16 text-xs leading-[1.1] font-black tracking-[4px] md:text-sm lg:text-base">
        Built For Modern Use
      </p>
      <h2 className="text-Slate-900 mt-4 text-[2rem] leading-[1.1] font-black md:mx-[7.47rem] md:text-4xl lg:mx-[23.7rem] lg:text-[2.5rem]">
        Smarter meetings, all in one place
      </h2>

      <p className="text-Slate-600 mt-8 text-base leading-6 font-medium md:mx-[5.63rem] lg:mx-[20.6rem] lg:text-lg">
        Send messages, share files, show your screen, and record your meetings -
        all in one workspace. Control who can join with invite-only team access,
        data encryption, and data export.
      </p>
    </section>
  );
};

export default Info;
