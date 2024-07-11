import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb,faCalendarMinus} from "@fortawesome/free-solid-svg-icons";

function Resource() {
  return (
    <div className="container">
      <div className="sec1 mt-6">
        <h1 className="text-emerald-800 text-2xl font-semibold leading-5 tracking-wider border-b-2 border-amber-400 w-fit mx-auto p-2 sm:text-3xl">
          Resources
        </h1>
        <p className="p-4 text-center text-stone-500 text-base sm:text-xl sm:w-4/5 sm:mx-auto font-normal leading-normal tracking-wide md:text-2xl sm:mt-2">
          Explore a wealth of resources at LIST designed to support your
          entrepreneurial journey. From comprehensive step-by-step guides to the
          latest news and updates, our resources are tailored to give you the
          knowledge and tools you need to launch and grow your startup. So, stay
          connected with our community, attend upcoming events, and access
          expert advice to ensure your success.
        </p>
      </div>

      <div className="sec2 bg-[url('/team/Colorpalette.png')] bg-cover mt-6 p-6">
        <h1 className="text-emerald-800 text-xl font-semibold tracking-widest mx-4 xmd:text-2xl">
          Latest Blogs
        </h1>

        <div className="">
          <div className="flex overflow-x-scroll no-scrollbar space-x-4 my-2 xmd:hidden mx-4 p-2 mt-4">
            <div className="bg-white rounded-xl shadow-md min-w-48">
              <img
                className="w-48 h-32 rounded-xl object-cover object-center mb-6"
                src="/ourstory/Rectangle1.jpg"
                alt="content"
              />
              <h2 className="text-black text-sm font-semibold tracking-wide text-center">
                How to do Rapid Prototyping?
              </h2>
              <p className="text-stone-500 text-base font-normal leading-5 tracking-wide py-3 px-2 text-center">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.....
              </p>
              <div className="text-center p-2">
                <Button variant="outlined" color="secondary">
                  Read more
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md min-w-48">
              <img
                className="w-48 h-32 rounded-xl object-cover object-center mb-6"
                src="/ourstory/Rectangle1.jpg"
                alt="content"
              />
              <h2 className="text-black text-sm font-semibold tracking-wide text-center">
                How to do Rapid Prototyping?
              </h2>
              <p className="text-stone-500 text-base font-normal leading-5 tracking-wide py-3 px-2 text-center">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.....
              </p>
              <div className="text-center p-2">
                <Button variant="outlined" color="secondary">
                  Read more
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md min-w-44">
              <img
                className="w-44 h-32 rounded-xl object-cover object-center mb-6"
                src="/ourstory/Rectangle1.jpg"
                alt="content"
              />
              <h2 className="text-black text-sm font-semibold tracking-wide text-center">
                How to do Rapid Prototyping?
              </h2>
              <p className="text-stone-500 text-base font-normal leading-5 tracking-wide py-3 px-2 text-center">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.....
              </p>
              <div className="text-center p-2">
                <Button variant="outlined" color="secondary">
                  Read more
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md min-w-48">
              <img
                className="w-48 h-32 rounded-xl object-cover object-center mb-6"
                src="/ourstory/Rectangle1.jpg"
                alt="content"
              />
              <h2 className="text-black text-sm font-semibold tracking-wide text-center">
                How to do Rapid Prototyping?
              </h2>
              <p className="text-stone-500 text-base font-normal leading-5 tracking-wide py-3 px-2 text-center">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry......
              </p>
              <div className="text-center p-2">
                <Button variant="outlined" color="secondary">
                  Read more
                </Button>
              </div>
            </div>
          </div>

          <div className="hidden xmd:grid xmd:grid-cols-2 xmd:gap-16 xmd:w-fit mx-auto lg:grid-cols-4 gap-8 mt-8">
            <div className="bg-white rounded-xl shadow-md max-w-56">
              <img
                className="w-56 h-32 rounded-xl object-cover object-center mb-6"
                src="/ourstory/Rectangle1.jpg"
                alt="content"
              />
              <h2 className="text-black text-sm font-semibold tracking-wide text-center">
                How to do Rapid Prototyping?
              </h2>
              <p className="text-stone-500 text-base font-normal leading-5 tracking-wide py-3 px-2 text-center">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.....
              </p>
              <div className="text-center p-2">
                <Button variant="outlined" color="secondary">
                  Read more
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md max-w-56">
              <img
                className="w-56 h-32 rounded-xl object-cover object-center mb-6"
                src="/ourstory/Rectangle1.jpg"
                alt="content"
              />
              <h2 className="text-black text-sm font-semibold tracking-wide text-center">
                How to do Rapid Prototyping?
              </h2>
              <p className="text-stone-500 text-base font-normal leading-5 tracking-wide py-3 px-2 text-center">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.....
              </p>
              <div className="text-center p-2">
                <Button variant="outlined" color="secondary">
                  Read more
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md max-w-56">
              <img
                className="w-56 h-32 rounded-xl object-cover object-center mb-6"
                src="/ourstory/Rectangle1.jpg"
                alt="content"
              />
              <h2 className="text-black text-sm font-semibold tracking-wide text-center">
                How to do Rapid Prototyping?
              </h2>
              <p className="text-stone-500 text-base font-normal leading-5 tracking-wide py-3 px-2 text-center">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.....
              </p>
              <div className="text-center p-2">
                <Button variant="outlined" color="secondary">
                  Read more
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md max-w-56">
              <img
                className="w-56 h-32 rounded-xl object-cover object-center mb-6"
                src="/ourstory/Rectangle1.jpg"
                alt="content"
              />
              <h2 className="text-black text-sm font-semibold tracking-wide text-center">
                How to do Rapid Prototyping?
              </h2>
              <p className="text-stone-500 text-base font-normal leading-5 tracking-wide py-3 px-2 text-center">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.....
              </p>
              <div className="text-center p-2">
                <Button variant="outlined" color="secondary">
                  Read more
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-4 xsm:mt-8">
          <Button variant="contained" color="success">
            view All
          </Button>
        </div>
      </div>

      <div className="sec3 mt-6">
        <h1 className="text-emerald-800 text-lg font-semibold tracking-widest p-2 xsm:text-2xl">
          Step - by - Step Guide to Start your Startup
        </h1>
        <p className="text-stone-500 text-sm font-normal leading-5 tracking-wide px-2 py-1 xsm:text-xl">
          At LIST, we've crafted a detailed, step-by-step guide to help you
          navigate the process with confidence and clarity.
        </p>

        <div className="mx-4 lg:mx-20">
          <div className="relative flex flex-col items-start md:items-center space-y-8 md:space-y-0 md:flex-row md:justify-between mt-8">

            <div className="hidden md:block absolute top-[20px] left-0 right-0 h-0.5 mx-4 bg-green-500 "></div>

            {/* Vertical line for below md */}
            <div className="block md:hidden absolute top-0 bottom-0 left-[18px] w-0.5 bg-green-500 "></div>

            <div className="flex md:flex-col md:w-16 z-10 md:-translate-y-2">
              <div className="min-w-10 h-10 md:w-14 md:h-14 bg-amber-500 rounded-full flex items-center justify-center mx-auto">
                <FontAwesomeIcon
                  icon={faLightbulb}
                  className="text-white text-xl md:text-3xl"
                />
              </div>
              <p className="text-stone-500 text-lg font-semibold leading-5 tracking-wide flex items-center justify-center text-center ml-2 xsm:ml-6 md:ml-0 md:mt-4" >
                Idea Generation and Validation
              </p>
            </div>

            <div className="flex md:flex-col md:w-16 z-10 md:-translate-y-6">
              <div className="min-w-10 md:w-14 h-10 md:h-14 bg-amber-500 rounded-full flex items-center justify-center mx-auto">
                <FontAwesomeIcon
                  icon={faCalendarMinus}
                  className="text-white text-xl md:text-3xl"
                />
              </div>
              <p className="text-stone-500 text-lg font-semibold leading-5 tracking-wide flex items-center justify-center text-center ml-6 md:ml-0 md:mt-4">
              Business Planning
              </p>
            </div>

            <div className="flex md:flex-col md:w-16 z-10 md:-translate-y-2">
              <div className="min-w-10 md:w-14 h-10 md:h-14 bg-amber-500 rounded-full flex items-center justify-center mx-auto  xsm:mr-4">
                <FontAwesomeIcon
                  icon={faLightbulb}
                  className="text-white text-xl md:text-2xl"
                />
              </div>
              <p className="text-stone-500 text-lg font-semibold leading-5 tracking-wide flex items-center justify-center text-center sm:ml-6 md:ml-0 md:mt-4">
              Legal Considerations and Funding <br/> Opportunities
              </p>
            </div>

            <div className="flex md:flex-col md:w-16 z-10 md:-translate-y-4">
              <div className="min-w-10 md:w-14 h-10 md:h-14 bg-amber-500 rounded-full flex items-center justify-center mx-auto">
                <FontAwesomeIcon
                  icon={faLightbulb}
                  className="text-white text-xl md:text-2xl"
                />
              </div>
              <p className="text-stone-500 text-lg font-semibold leading-5 tracking-wide flex items-center justify-center text-center ml-6 md:ml-0 md:mt-4">
              Setting Up Your Business
              </p>
            </div>

            <div className="flex md:flex-col md:w-16 z-10 md:-translate-y-2">
              <div className="min-w-10 md:w-14 h-10 md:h-14 bg-amber-500 rounded-full flex items-center justify-center mx-auto">
                <FontAwesomeIcon
                  icon={faLightbulb}
                  className="text-white text-xl md:text-2xl"
                />
              </div>
              <p className="text-stone-500 text-lg font-semibold leading-5 tracking-wide flex items-center justify-center text-center ml-2 xsm:ml-6 md:ml-0 md:mt-4">
              Marketing & Sublime Customer Support
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Resource;
