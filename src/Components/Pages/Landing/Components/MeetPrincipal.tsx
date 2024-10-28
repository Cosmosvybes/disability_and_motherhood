import image from "../../../../assets/bolarinwa.jpg";
const MeetPrincipal = () => {
  return (
    <>
      <div
        id="Meet the Principal Investigator"
        className="relative h-auto py-1 max-sm:py-2  flex gap-5 max-sm:gap-0 justify-between max-sm:flex-col-reverse px-20 max-sm:px-2"
      >
        <div className="relative h-auto  max-sm:justify-center items-center flex max-sm:py-2 px-2">
          <div
            className="w-96 h-96 max-sm:w-52  max-sm:h-52  rounded-full  shadow drop-shadow-md      max-sm:object-contain"
            style={{
              backgroundImage: `url(${image})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
        </div>

        <div className="relative w-3/4  max-sm:w-full flex flex-col gap-2  max-sm:gap-1 justify-center items-center">
          <h1 className="text-center text-black  max-sm:text-2xl max-sm:py-2 text-4xl font-extrabold">
            Meet the Principal investigator
          </h1>
          <h1 className="text-8xl font-extrabold max-sm:text-center max-sm:text-4xl ">
            OBASANJO BOLARINWA
          </h1>
          <h1 className="text-3xl max-sm:text-xl text-gray-500 max-sm:text-center font-extrabold ">
            Senior Lecturer & School Researcher Knowledge Transfer Co-Lead.
          </h1>
        </div>
      </div>

      <div className="relative w-full  h-auto flex justify-end px-20   max-sm:px-2">
        <div className="relative w-5/6  py-0 flex justify-end px-10 max-sm:px-2 max-sm:py-5   max-sm:w-full ">
          <div className="relative w-3/4 max-sm:w-full  px-5 py-5 max-sm:px-3 bg-white max-sm:bg-gray-50 rounded-xl flex flex-col gap-5 max-sm:gap-4 h-auto">
            <p className="text-black max-sm:text-sm text-sm font-bold">
              Welcome to the Disability and Motherhood. I’m Obasanjo Bolarinwa,
              a Senior Lecturer and the Research Knowledge Transfer Co-Lead at
              York St John University, London. I’m also the lead researcher for
              this project, which is funded by the Union for African Population
              Studies and supported by York St John University.
            </p>
            <p className="text-black max-sm:text-sm text-sm font-bold">
              I’m a public health professional focused on improving health for
              everyone, with a special interest in addressing challenges faced
              by people with disabilities. I’ve led projects that look into
              important health issues like disability, sexuality, COVID-19, and
              access to reproductive health services. My work has been
              recognized with several awards, and I’ve shared my findings at
              international conferences.
            </p>
            <p className="text-black max-sm:text-sm text-sm font-bold">
              For more information about my work, click {" "}
              <a
                className="text-blue-700"
                href="https://www.yorksj.ac.uk/our-staff/staff-profiles/obasanjo-bolarinwa.php"
              >
                {" "}
                here.
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MeetPrincipal;
