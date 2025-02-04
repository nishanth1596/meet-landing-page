type ButtonProps = {
  type: string;
  color?: string;
  spanColor?: string;
  isFooter?: boolean;
};

const Button = ({ type, color, spanColor, isFooter }: ButtonProps) => {
  const base =
    "text-White rounded-4xl text-base leading-6  font-black px-10 py-4 hover:cursor-pointer";

  if (type === "download") {
    return (
      <button
        className={`bg-Cyan-600 hover:bg-Cyan-hover ${base} mx-14 inline-block md:mr-0 md:ml-auto`}
        style={{ backgroundColor: color, margin: isFooter ? "0" : undefined }}
      >
        Download{" "}
        <span className="text-Cyan-300" style={{ color: spanColor }}>
          v1.3
        </span>
      </button>
    );
  }

  if (type == "what") {
    return (
      <button
        className={`${base} bg-Purple-600 hover:bg-Purple-hover mx-[4.5rem] inline-block md:mr-auto md:ml-0`}
      >
        What is it?
      </button>
    );
  }
};

export default Button;
