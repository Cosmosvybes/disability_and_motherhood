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
      <div className="relative w-auto h-44 flex px-2 justify-start gap-5 items-center border  rounded-bl-3xl rounded-tr-3xl py-5">
        <div className="relative rounded-full w-20 max-sm:rounded-md  h-20 bg-black flex  items-center justify-center">
          {icon}
        </div>

        <div className="relative block">
          <h1 className="font-bold text-2xl">{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default Indicator;
