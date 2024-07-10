import { Button } from "@mui/material";

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
        <h1 className="text-emerald-800 text-xl font-semibold tracking-widest mx-4">
          Latest Blogs
        </h1>

        <div className="p-4 mt-4">

          <div className="bg-white rounded-xl shadow-md w-[220px]">
            <img
              className="h-full rounded-xl w-full object-cover object-center mb-6"
              src="/ourstory/Rectangle1.jpg"
              alt="content"
            />
            <h2 className="text-black text-sm font-semibold tracking-wide text-center">
              How to do Rapid Prototyping?
            </h2>
            <p className="text-stone-500 text-base font-normal leading-5 tracking-wide py-3 text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the.....
            </p>
            <div className="text-center p-2"><Button variant="outlined" color="secondary">
                Read more
              </Button></div>
          </div>

        </div>

      </div>

      <div className="sec3"></div>
    </div>
  );
}

export default Resource;
