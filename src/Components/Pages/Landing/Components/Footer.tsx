import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedln,
  Twitter,
} from "react-huge-icons/solid";

const Footer = () => {
  return (
    <>
      <div className="relative h-24 bg-gray-50 mt-2"></div>
      <div className="relative py-10 px-20 max-sm:px-2 max-sm:py-5 bg-black flex flex-col">
        <div className="relative flex justify-between max-sm:flex-col gap-2">
          <div className="relative flex flex-col justify-normal">
            <h1 className="font-extrabold text-white text-2xl">
              Sign up for our newsletter{" "}
              <ArrowRight className="text-2xl text-white inline" />
            </h1>
            <p className="text-white font-bold  max-sm:text-sm">
              Get email updates about our disabilities and motherhood
              <span className="text-red-600 font-bold  max-sm:text-sm">
                {" "}
                events.{" "}
              </span>
            </p>
          </div>

          <div className="relative w-96   flex justify-between rounded-md ">
            <input
              type="email"
              placeholder="email address here"
              className="h-full px-2 py-2 rounded-tl-md rounded-bl-md outline-none w-60 border-none"
            />
            <button className="bg-red-600 text-white font-bold text-center rounded-tr-md rounded-br-md border-none w-full">
              Subscribe
            </button>
          </div>
        </div>
        <hr className="borde-t border-gray-400 mt-2" />

        <div className="relative flex py-5 justify-between mt-2">
          <h1 className="text-2xl text-white"> Logo</h1>
          {/*  */}

          <div className="relative flex gap-5 justify-around w-1/2 max-sm:w-auto h-auto">
            <div className="relative flex flex-col">
              <h1 className="text-white font-bold"> Find us on social media</h1>
              <div className="flex items-center  gap-2 justify-start">
                <Linkedln className="text-2xl text-white" />
                <Twitter className="text-2xl text-white" />
                <Facebook className="text-2xl text-white" />
                <Instagram className="text-2xl text-white" />
              </div>
            </div>

            {/* 
            
            */}

            <div className="relative flex flex-col">
              <h1 className="text-white font-bold"> Useful links</h1>
              <div className="flex items-center flex-col justify-start">
                <p className="text-white">Terms of use.</p>
                <p className="text-white">Policies</p>
                <p className="text-white">Others</p>
              </div>
            </div>

            {/*  */}
            <div className="relative flex flex-col">
              <h1 className="text-white font-bold"> Community</h1>
              <div className="flex items-center flex-col justify-start">
                <p className="text-white">Blog</p>
                <p className="text-white">Ideas</p>
                <p className="text-white">Developers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
