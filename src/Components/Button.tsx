type ButtonProps = {
  type: string;
  color?: string;
  spanColor?: string;
};

const Button = ({ type, color, spanColor }: ButtonProps) => {
  const base =
    "text-White rounded-4xl text-base leading-6 block font-black px-10 py-4";

  if (type === "download") {
    return (
      <button
        className={`bg-Cyan-600 ${base} mx-14`}
        style={{ backgroundColor: color }}
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
      <button className={`${base} bg-Purple-600 mx-[4.5rem]`}>
        What is it?
      </button>
    );
  }
};

export default Button;
