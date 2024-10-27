const Indicator = ({
  icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) => {
  return (
    <>
      <div className="relative w-full h-44 flex px-2 justify-start max-sm:justify-start  gap-5 max-sm:gap-3 items-center  bg-gray-50  rounded-bl-3xl rounded-tr-3xl py-5">
        <div className="relative rounded-full w-20 max-sm:rounded-full max-sm:w-14 max-sm:h-14  h-20 bg-black flex  items-center justify-center">
          {icon}
        </div>

        <div className="relative w-3/4 block">
          <h1 className="font-bold text-2xl">{title}</h1>
          <p className="max-sm:text-sm text-gray-700">{description}</p>
        </div>
      </div>
    </>
  );
};

export default Indicator;
