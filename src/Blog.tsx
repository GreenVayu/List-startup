import { Button } from "@mui/material";

function Blog() {
  return (
    <div className="container w-full mx-auto">
      <div className="sec1 mt-6 md:flex justify-between space-x-14">
        <div className="p-2 md:w-[45%] lg:mt-16 flex flex-col justify-center items-center pt-4">
          <div className="md:min-w-[45%] w-full min-h-64 xsm:min-h-4/5 md:min-h-72 flex justify-center items-center">
            <img src="/Blog/Rectangle.png" className="w-full min-h-72 " />
          </div>

          <div className="mt-4 lg:mt-14">
            <h1 className="text-black text-lg lg:text-2xl font-semibold leading-6 tracking-wider">
              Low cost business ideas with high profits
            </h1>
            <p className="py-1 lg:py-3 text-stone-500 text-sm lg:text-xl font-normal leading-normal tracking-wide">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy.....
            </p>

            <div className="my-2">
              <Button variant="outlined" color="secondary">
                Read more
              </Button>
            </div>
          </div>
        </div>

        <div className="hidden md:flex  md:flex-col md:w-[55%] p-2 my-auto mx-auto ">
          <div className="relative">
            {/* <hr className="bg-black h-0.5 w-auto absolute bottom-3"/> */}

            <div className="text-emerald-800 text-2xl font-normal px-4 z-10 text-center -mt-8">
              Recent posts
            </div>
          </div>

          <div className=" space-y-4 lg:space-y-10 xl:space-y-5 mt-6">
            <div className="flex justify-between ">
              <div className="flex justify-center items-center min-w-[32%] xl:min-h-32 my-auto">
                <img
                  src="/Blog/G.png"
                  className="min-w-28 lg:min-h-44 xl:w-full h-36 xl:min-h-40"
                />
              </div>

              <div className="px-4 flex flex-col justify-center items-center py-2">
                <h1 className="text-black text-sm xl:text-lg font-semibold leading-5 tracking-wide lg:text-xl">
                  5 mistakes to avoid while selecting financial planner
                </h1>
                <p className="text-stone-500 text-xs xl:text-base font-normal leading-5 tracking-wide mt-1 lg:text-base">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the.....
                </p>
              </div>
            </div>

            <div className="flex justify-between ">
              <div className="flex justify-center items-center min-w-[32%] xl:min-h-32 my-auto">
                <img
                  src="/Blog/G.png"
                  className="min-w-28 lg:min-h-44 xl:w-full h-36 xl:min-h-40"
                />
              </div>

              <div className="px-4 flex flex-col justify-center items-center py-2">
                <h1 className="text-black text-sm xl:text-lg font-semibold leading-5 tracking-wide lg:text-xl">
                  5 mistakes to avoid while selecting financial planner
                </h1>
                <p className="text-stone-500 text-xs xl:text-base font-normal leading-5 tracking-wide mt-1 lg:text-base">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the.....
                </p>
              </div>
            </div>

            <div className="flex justify-between ">
              <div className="flex justify-center items-center min-w-[32%] xl:min-h-32 my-auto">
                <img
                  src="/Blog/G.png"
                  className="min-w-28 lg:min-h-44 xl:w-full h-36 xl:min-h-40"
                />
              </div>

              <div className="px-4 flex flex-col justify-center items-center py-2">
                <h1 className="text-black text-sm xl:text-lg font-semibold leading-5 tracking-wide lg:text-xl">
                  5 mistakes to avoid while selecting financial planner
                </h1>
                <p className="text-stone-500 text-xs xl:text-base font-normal leading-5 tracking-wide mt-1 lg:text-base">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the.....
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sec1part2 mt-4 md:hidden bg-gradient-to-br from-emerald-900 via-emerald-900 to-neutral-400 py-2">

        <h1 className="text-white text-lg text-center font-semibold leading-relaxed tracking-wide pt-2"> Recent Post </h1>

          <div className="flex overflow-x-scroll no-scrollbar space-x-4 my-2 md:hidden mx-4 p-2 mt-4">

            <div className="bg-white rounded-xl shadow-md min-w-48 sm:min-w-64">
              <img
                className="w-48 sm:w-64 h-44 rounded-xl object-cover object-center mb-6"
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
              
            </div>

            <div className="bg-white rounded-xl shadow-md min-w-48 sm:min-w-64">
              <img
                className="w-48 sm:w-64 h-44 rounded-xl object-cover object-center mb-6"
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
              
            </div>

            <div className="bg-white rounded-xl shadow-md min-w-48 sm:min-w-64">
              <img
                className="w-48 sm:w-64 h-44 rounded-xl object-cover object-center mb-6"
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
              
            </div>

          </div>

<div className="text-center my-4 md:hidden">
          <span className="text-white">Swipe to see all</span>
        </div>

        </div>

      <div className="sec2 bg-gradient-to-br from-emerald-800 via-emerald-900 to-neutral-400 mt-12">
        <div className="container mx-auto flex p-6 sm:p-16 md:flex-row flex-col items-center">

          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center justify-center ">
            <h1 className="text-white font-semibold leading-5 tracking-widest sm:text-xl text-lg mb-4 px-2 lg:text-2xl">
              The Best Ways to Build a Strong Customer Community for Your
              Startup
            </h1>
            <p className="mb-8 text-white text-base font-normal leading-relaxed tracking-wide px-2 lg:text-xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the.....
            </p>

<div className="px-4">
            <Button variant="contained" color="success">
            Read more
              </Button></div>

          </div>
          <div className="w-full h-full lg:max-w-lg lg:w-full md:w-1/2 md:min-h-full -mt-6 md:mt-0 flex items-center justify-center">
            <img
              className="w-full h-full object-cover object-center rounded"
              alt="hero"
              src="/ourstory/Colorpalette.jpg"
            />
          </div>
        </div>
      </div>

      <div className="sec3 mt-12 p-4">
        <h1 className="text-emerald-800 text-xl sm:text-2xl font-semibold tracking-widest p-2">
          Most viewed Blogs
        </h1>
        <p className="text-stone-500 text-lg font-normal leading-normal tracking-wide p-2 md:w-2/3">
          Discover the blog posts that resonate most with our community. These
          popular articles provide valuable advice and insights to help you
          succeed.
        </p>

        <div className="">
          <div className="flex overflow-x-scroll no-scrollbar space-x-4 my-2 md:hidden mx-4 p-2 mt-4">
            <div className="bg-white rounded-xl shadow-md min-w-48 sm:min-w-64">
              <img
                className="w-48 sm:w-64 h-44 rounded-xl object-cover object-center mb-6"
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
              <div className="text-center p-2 mb-2">
                <Button variant="outlined" color="secondary">
                  Read more
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md min-w-48 sm:min-w-64">
              <img
                className="w-48 sm:w-64 h-44 rounded-xl object-cover object-center mb-6"
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
              <div className="text-center p-2 mb-2">
                <Button variant="outlined" color="secondary">
                  Read more
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md min-w-48 sm:min-w-64">
              <img
                className="w-48 sm:w-64 h-44 rounded-xl object-cover object-center mb-6"
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
              <div className="text-center p-2 mb-2">
                <Button variant="outlined" color="secondary">
                  Read more
                </Button>
              </div>
            </div>
          </div>

          <div className="hidden md:grid md:w-fit mx-auto md:grid-cols-3 gap-16 mt-8">
            <div className="bg-white rounded-xl shadow-md max-w-64">
              <img
                className="w-64 h-36 rounded-xl object-cover object-center mb-6"
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

            <div className="bg-white rounded-xl shadow-md max-w-64">
              <img
                className="w-64 h-36 rounded-xl object-cover object-center mb-6"
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

            <div className="bg-white rounded-xl shadow-md max-w-64">
              <img
                className="w-64 h-36 rounded-xl object-cover object-center mb-6"
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

        <div className="text-center mt-4 md:hidden">
          <span className="text-violet-500">Swipe to see all</span>
        </div>
      </div>

      <div className="sec4 mt-12 bg-[url('/team/Colorpalette.png')] p-4 ">
        <h1 className="text-emerald-800 text-xl font-semibold tracking-widest text-center md:text-start p-2 -mt-10 md:mt-0 md:px-8 ">
          Blogs on finance
        </h1>
        <p className="text-stone-500 text-base font-normal leading-normal tracking-wide px-8">
          Gain expert knowledge on managing your startup finances. Our finance
          blogs offer practical tips and strategies to help you make informed
          financial decisions.
        </p>

        <div className=" w-fit md:grid md:w-fit mx-auto md:grid-cols-3 gap-16 mt-8 mb-6">
          <div className="bg-white rounded-xl shadow-md max-w-64">
            <img
              className="w-72 h-44 rounded-xl object-cover object-center mb-6"
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
            <div className="text-center p-2 mb-6">
              <Button variant="outlined" color="secondary">
                Read more
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md max-w-64">
            <img
              className="w-72 h-44 rounded-xl object-cover object-center mb-6"
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
            <div className="text-center p-2 mb-6">
              <Button variant="outlined" color="secondary">
                Read more
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md max-w-64">
            <img
              className="w-72 h-44 rounded-xl object-cover object-center mb-6"
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
            <div className="text-center p-2 mb-6">
              <Button variant="outlined" color="secondary">
                Read more
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="sec5 mt-12 p-4 ">
        <h1 className="text-emerald-800 text-xl font-semibold tracking-widest text-center md:text-start p-2 -mt-10 md:mt-0 md:px-8 ">
          Our best picks
        </h1>
        <p className="text-stone-500 text-base font-normal leading-normal tracking-wide px-8">
          Explore our curated selection of top blog posts. These articles are
          handpicked by our team for their exceptional value and relevance to
          aspiring entrepreneurs.
        </p>

        <div className="flex overflow-x-scroll no-scrollbar space-x-4 my-2 md:hidden mx-4 p-2 mt-4">
          <div className="bg-white rounded-xl shadow-md min-w-48 sm:min-w-64">
            <img
              className="w-48 sm:w-64 h-44 rounded-xl object-cover object-center mb-6"
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
            <div className="text-center p-2 mb-2">
              <Button variant="outlined" color="secondary">
                Read more
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md min-w-48 sm:min-w-64">
            <img
              className="w-48 sm:w-64 h-44 rounded-xl object-cover object-center mb-6"
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
            <div className="text-center p-2 mb-2">
              <Button variant="outlined" color="secondary">
                Read more
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md min-w-48 sm:min-w-64">
            <img
              className="w-48 sm:w-64 h-44 rounded-xl object-cover object-center mb-6"
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
            <div className="text-center p-2 mb-2">
              <Button variant="outlined" color="secondary">
                Read more
              </Button>
            </div>
          </div>
        </div>

        <div className="hidden md:grid md:w-fit mx-auto md:grid-cols-3 gap-16 mt-8 mb-6">
          <div className="bg-white rounded-xl shadow-md max-w-64">
            <img
              className="w-72 h-44 rounded-xl object-cover object-center mb-6"
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
            <div className="text-center p-2 mb-6">
              <Button variant="outlined" color="secondary">
                Read more
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md max-w-64">
            <img
              className="w-72 h-44 rounded-xl object-cover object-center mb-6"
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
            <div className="text-center p-2 mb-6">
              <Button variant="outlined" color="secondary">
                Read more
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md max-w-64">
            <img
              className="w-72 h-44 rounded-xl object-cover object-center mb-6"
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
            <div className="text-center p-2 mb-6">
              <Button variant="outlined" color="secondary">
                Read more
              </Button>
            </div>
          </div>
        </div>

        <div className="text-center mt-4 md:hidden">
          <span className="text-violet-500">Swipe to see all</span>
        </div>
      </div>

    </div>
  );
}

export default Blog;
