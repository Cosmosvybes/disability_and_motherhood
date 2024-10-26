import { ArrowRight, Linkedln, Twitter } from "react-huge-icons/solid";

const Footer = () => {
  return (
    <>
      <div className="relative h-24 bg-gray-50 mt-2"></div>
      <div className="relative py-10 px-20 max-sm:px-2 gap-5 max-sm:gap-2 max-sm:py-5 bg-black flex flex-col">
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

          <div className="relative w-96 max-sm:w-full   flex justify-between rounded-md ">
            <input
              type="email"
              placeholder="email address here"
              className="h-full px-2 py-2 rounded-tl-md rounded-bl-md outline-none w-60 max-sm:w-full border-none"
            />
            <button className="bg-red-600 max-sm:w-1/3  text-white font-bold text-center rounded-tr-md rounded-br-md border-none w-full">
              Subscribe
            </button>
          </div>
        </div>
        <hr className="border-t border-gray-400 mt-2" />

        <div className="relative max-sm:px-0 flex py-5 justify-between max-sm:flex-row-reverse mt-2">
          <h1 className="text-2xl text-white"> Logo</h1>
          {/*  */}

          <div className="relative max-sm:flex-col px-5 max-sm:px-1  flex gap-5 max-sm:gap-3 justify-around w-1/2 max-sm:w-auto h-auto ">
            <div className="relative flex flex-col">
              <h1 className="text-white text-xl max-sm:text-sm font-bold">
                {" "}
                Find us on social media
              </h1>
              <div className="flex items-center mt-2 gap-2 justify-start">
                <Linkedln
                  className="text-2xl text-white"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/company/disability-and-motherhood/"
                    )
                  }
                />
                <Twitter
                  className="text-2xl text-white"
                  onClick={() =>
                    window.open("https://www.x.com/dismotherhood/")
                  }
                />
              </div>
            </div>

            {/* 
            
            */}

            <div className="relative flex flex-col">
              <h1 className="text-white text-xl max-sm:text-sm font-bold">
                {" "}
                Useful links
              </h1>
              <div className="flex items-start flex-col justify-start">
                <p className="text-white text-xl max-sm:text-sm">
                  Terms of use.
                </p>
                <p className="text-white text-xl max-sm:text-sm">Policies</p>
                <p className="text-white text-xl max-sm:text-sm">Others</p>
              </div>
            </div>

            {/*  */}
            <div className="relative flex flex-col">
              <h1 className="text-white text-xl max-sm:text-sm font-bold">
                {" "}
                Community
              </h1>
              <div className="flex items-start flex-col justify-start">
                <p className="text-white text-xl max-sm:text-sm">Blog</p>
                <p className="text-white text-xl max-sm:text-sm">Ideas</p>
                <p className="text-white text-xl max-sm:text-sm">Developers</p>
              </div>
            </div>
          </div>
        </div>

        <p className=" text-white text-2xl max-sm:text-xl max-sm:px-1">
          Mum ability &copy; • {new Date().getFullYear()}{" "}
        </p>
      </div>
    </>
  );
};

export default Footer;
