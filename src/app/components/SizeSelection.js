import Image from "next/image";

const SizeSelection = ({ pizza, size, setSize }) => {
  return (
    <div className="mx-auto max-w-sm bg-red-200 lg:max-w-none flex items-center justify-center">
      <div className="flex gap-x-12 items-baseline mb0-10 font-medium">
        <label className=" flex flex-col items-center gap-x-2 py-2 cursor-pointer">
          <Image
            src={pizza.image}
            width={60}
            height={60}
            alt=""
            className={`${
              size === "small"
                ? "border-2 border-orange p-[2px] rounded-full"
                : "border-transparent filter saturate-[0.1]"
            }`}
          />
          <input
            type="radio"
            name="size"
            value="small"
            checked={size === "small"}
            onChange={(e) => setSize(e.target.value)}
            className="appearance-none"
          />
          Small
        </label>

        <label className=" flex flex-col items-center gap-x-2 py-2 cursor-pointer">
          <Image
            src={pizza.image}
            width={70}
            height={70}
            alt=""
            className={`${
              size === "medium"
                ? "border-2 border-orange p-[2px] rounded-full"
                : "border-transparent filter saturate-[0.1]"
            }`}
          />
          <input
            type="radio"
            name="size"
            value="medium"
            checked={size === "medium"}
            onChange={(e) => setSize(e.target.value)}
            className="appearance-none"
          />
          Medium
        </label>

        <label className=" flex flex-col items-center gap-x-2 py-2 cursor-pointer">
          <Image
            src={pizza.image}
            width={80}
            height={80}
            alt=""
            className={`${
              size === "large"
                ? "border-2 border-orange p-[2px] rounded-full"
                : "border-transparent filter saturate-[0.1]"
            }`}
          />
          <input
            type="radio"
            name="size"
            value="large"
            checked={size === "large"}
            onChange={(e) => setSize(e.target.value)}
            className="appearance-none"
          />
          Large
        </label>
      </div>
    </div>
  );
};

export default SizeSelection;
