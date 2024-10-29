import { ArrowRight, Linkedln, Mail, Twitter } from "react-huge-icons/solid";
import image from "../../../../assets/mother.jpg";
const Footer = () => {
  return (
    <>
      <div className="relative py-10 px-20 max-md:px-0 max-sm:px-0 gap-5 max-sm:gap-2 max-sm:py-5 bg-black max-sm:mr-0 flex flex-col">
        <div className="relative flex items-center justify-start">
          <h1 className="font-bold max-sm:text-sm  max-md:text-xl text-white text-2xl">
            Disability and Motherhood
          </h1>
          <ArrowRight className="text-2xl max-sm:text-xl text-white inline" />
        </div>
        <hr className="border-t border-gray-400 mt-2" />
        <div className="relative w-full flex justify-between max-sm:px-1">
          <div className="relative max-sm:flex-col max-sm:px-1 max-md:grid grid-cols-2 max-md:gap-10 max-md:px-2 max-md:w-4/5 flex gap-5 max-sm:gap-3 justify-between w-1/2 max-sm:w-auto h-auto ">
            <div className="relative flex flex-col">
              <h1 className="text-white text-xl max-sm:text-sm font-bold">
                {" "}
                Connect with Us
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
                <Mail className="text-2xl text-white" />
              </div>
            </div>

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

          <div
            className="relative w-28 h-28 max-md:h-24  max-md:w-24 max-sm:w-24 max-sm:w-h-24 flex justify-center items-center rounded-full"
            style={{
              backgroundImage: `url(${image})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
        </div>

        <div className="relative max-sm:px-2 ">
          <p className=" font-extrabold max-sm:text-sm  max-md:text-xl text-white text-2xl">
            Disability and Motherhood &copy; • {new Date().getFullYear()}{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
