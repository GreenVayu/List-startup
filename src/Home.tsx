import { useState } from "react";
import { Button } from "@mui/material";
import RocketIcon from "@mui/icons-material/Rocket";
import PsychologyIcon from "@mui/icons-material/Psychology";
import CallSplitIcon from "@mui/icons-material/CallSplit";
import Testimonials from "./Testimonials";

interface div2PicProps {
  alt: string;
  src: string;
}

interface Videos {
  Mindset: string[];
  Idea: string[];
  Legal: string[];
  Finance: string[];
}

const div2Pic: React.FC<div2PicProps> = ({ alt, src }) => {
  return (
    <img
      className="object-cover object-center rounded w-1/2"
      alt={alt}
      src={src}
    />
  );
};

const div2Text: React.FC<{
  Icon: React.ElementType;
  children: React.ReactNode;
}> = ({ Icon, children }) => {
  return (
    <div className="lg:max-w-lg  lg:w-full">
      <div className="flex flex-row items-center mb-6">
        <div className="w-1/8 items-center">
          <div className="relative flex justify-center items-center w-12 h-12 bg-[#005D3E] rounded-full">
            <Icon className="w-15 h-15 text-white" />
          </div>
        </div>
        <div className="w-7/8">
          <p className="text-base font-normal text-[#686868] text-left pl-2 md:pl-4">
            {children}
          </p>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const [selectedTab, setSelectedTab] = useState<'Mindset' | 'Idea' | 'Legal' | 'Finance'>('Mindset');

  const videos: Videos = {
    Mindset: [
      '/img/vide01.mp4',
      '/img/vide01.mp4',
      '/img/vide02.mp4',
      '/img/vide03.mp4',
    ],
    Idea: [
      '/img/vide01.mp4',
      '/img/vide02.mp4',
      '/img/vide01.mp4',
      '/img/vide02.mp4',
    ],
    Legal: [
      '/img/vide02.mp4',
      '/img/vide01.mp4',
      '/img/vide02.mp4',
      '/img/vide01.mp4',
    ],
    Finance: [
      '/img/vide03.mp4',
      '/img/vide02.mp4',
      '/img/vide01.mp4',
      '/img/vide02.mp4',
    ],
  };

  return (
    <>
      <div className="text-gray-600 body-font">
        <div className="flex px-0 py-10 flex-col md:flex-row items-center justify-between">
          <div className="lg:flex-grow md:w-1/2 lg:pr-8 md:pr-2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <p className="mb-4 title-font text-base md:text-xl md:font-medium text-[#686868]">
              LEARN THE ART OF INNOVATION <br />
              CRACK THE CODE OF ENTREPRENEURSHIP
            </p>
            <p className="mb-4 text-2xl md:text-4xl lg:text-6xl font-bold text-[#005D3E]">
              Build Your Low Investment{" "}
              <span className="text-[#FFA70B]">Startup</span>
            </p>
            <p className="mb-4 text-base font-normal text-[#686868]">
              Unleash your startup potential with LIST (Low Investment Startup).
              We'll train and mentor you to launch your venture with our expert
              coaches, inspiring courses, hands-on training, and a supportive
              community.
            </p>

            <div className="flex item-center gap-3">
              <Button variant="contained" color="success">
                Register now
              </Button>
              <Button variant="outlined" color="secondary">
                Contact to know more
              </Button>
            </div>
          </div>
          <div className="lg:max-w-lg w-5/6 md:w-1/2 lg:w-full">
            <img
              className="object-cover object-center rounded md:w-full"
              alt="Startup"
              src="img/sec1.png"
            />
          </div>
        </div>
      </div>

      <div className="sec2 text-gray-600 body-font py-10">
        <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#005D3E] mb-4">
          What is LIST?
        </p>
        <div className="flex px-0 flex-col md:flex-row items-center justify-between">
          <div className="hidden md:block lg:max-w-lg md:w-1/2 lg:w-full">
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-2">
                <div2Pic alt="Plan" src="img/sec2-1.png" />
                <div2Pic alt="Train" src="img/sec2-2.png" />
              </div>
              <div className="flex flex-row gap-2">
                <div2Pic alt="Collaborate" src="img/sec2-3.png" />
                <div2Pic alt="Succeed" src="img/sec2-4.png" />
              </div>
            </div>
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-12 md:pl-8 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <p className="mb-4 title-font text-base font-medium text-[#686868]">
              LIST is a comprehensive online platform designed to empower
              aspiring entrepreneurs, especially those new to the startup world.
            </p>
            <div className="flex px-0 flex-col md:flex-row items-center gap-3">
              <div className="lg:max-w-lg  lg:w-full">
                <div2Text Icon={RocketIcon}>
                  Startup Focused - The course content is tailored to the
                  challenges and opportunities faced by early-stage businesses.
                </div2Text>
                <div2Text Icon={PsychologyIcon}>
                  Beginner Friendly - If you're unfamiliar with the startup
                  ecosystem, List is a perfect starting point.
                </div2Text>
                <div2Text Icon={CallSplitIcon}>
                  Topic Variety - List offers a broad range of courses covering
                  various essential startup topics.
                </div2Text>
              </div>
            </div>

            <div className="mt-2 flex item-center gap-3">
              <Button variant="contained" color="success">
                About us
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="sec3 mt-6">
        <div className="p-8 bg-gradient-to-br from-emerald-900 via-emerald-900 to-neutral-400">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6">
              <h3 className="text-2xl leading-7 font-bold text-white mb-2 text-center lg:text-3xl">
                500+
              </h3>
              <p className="text-xl leading-6 text-extra text-white text-center">
                Start - up ideas
              </p>
            </div>

            <div className="p-6">
              <h3 className="text-2xl leading-7 font-extrabold text-white mb-2 text-center lg:text-3xl">
                1500+
              </h3>
              <p className="text-xl leading-6 text-white text-center">
                Subscribers joined our program and became self employed
              </p>
            </div>

            <div className="p-6">
              <h3 className="text-2xl leading-7 font-extrabold text-white mb-2 text-center lg:text-3xl">
                25+
              </h3>
              <p className="text-xl leading-6 text-white text-center">
                The Ratio of theory and practice in each course
              </p>
            </div>

            <div className="p-6">
              <h3 className="text-2xl leading-7 font-extrabold text-white mb-2 text-center lg:text-3xl">
                99%
              </h3>
              <p className="text-xl leading-6 text-white text-center">
                Discover the various funding options available for your startup
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="sec4 mt-16">
        <div>
          <h1 className="text-emerald-800 text-xl font-semibold tracking-widest text-center">
            Popular course/videos
          </h1>
          <p className="text-stone-500 text-base font-normal leading-normal tracking-wide text-center">
            Ready to Launch? Discover the secrets to startup success with our
            most popular courses.
          </p>

          <div>
      <div className="border-2 border-gray-500 rounded-lg flex justify-between md:hidden px-2 mt-6">
        <h1 className="text-center text-stone-500 text-sm font-semibold leading-normal tracking-wide h-fit my-auto">
          Categories
        </h1>

        <select
          name="category"
          id="category"
          className="text-center text-emerald-800 text-sm font-medium leading-3 tracking-wide p-2 mr-2 bg-white"
          onChange={(e) => setSelectedTab(e.target.value as 'Mindset' | 'Idea' | 'Legal' | 'Finance')}
          value={selectedTab}
        >
          <option value="Mindset">Mindset</option>
          <option value="Legal">Legal</option>
          <option value="Idea">Idea</option>
          <option value="Finance">Finance</option>
        </select>
      </div>

      <div className="md:hidden mt-6">
        <div
          key={selectedTab} 
          className="flex overflow-x-scroll no-scrollbar space-x-6 px-4"
        >
          {videos[selectedTab].map((video, index) => (
            <video key={index} className="w-60 rounded-xl" controls>
              <source src={video} type="video/mp4" />
            </video>
          ))}
        </div>
      </div>
    </div>

          <div className="fortab&laptop">
      <div className="mt-8 hidden md:block w-fit mx-auto lg:w-full">
        <ul className="border-2 border-slate-200 flex justify-between p-2 px-16 rounded-lg space-x-32 lg:space-x-0">
          {['Mindset', 'Idea', 'Legal', 'Finance'].map((tab) => (
            <li
              key={tab}
              className={`text-center text-emerald-800 text-sm font-medium leading-4 tracking-wide cursor-pointer ${
                selectedTab === tab ? 'border-b-2 border-amber-500' : ''
              }`}
              onClick={() => setSelectedTab(tab as 'Mindset' | 'Idea' | 'Legal' | 'Finance')}
            >
              {tab}
            </li>
          ))}
        </ul>
      </div>

      <div className="hidden md:block container w-fit mx-auto">
        <div
          key={selectedTab} 
          className="md:grid md:grid-cols-2 lg:grid-cols-4 lg:gap-x-6 md:gap-x-20 md:gap-y-12 lg:mx-4 my-4 md:mx-10"
        >
          {videos[selectedTab].map((video, index) => (
            <div key={index} className="overflow-hidden h-[330px] w-[240px] rounded-lg">
              <video className="w-full h-full object-cover border-none outline-none" controls>
                <source src={video} type="video/mp4" />
              </video>
            </div>
          ))}
        </div>
      </div>
    </div>

        </div>
      </div>

      <div className="sec5 mt-12 md:mt-24 sm:relative">
        <div className="sm:absolute sm:top-[70px] sm:left-[10px] md:top-[130px] md:left-[30px] lg:top-[200px] lg:left-[100px] sm:space-y-3">
          <h1 className="text-emerald-800 sm:text-white sm:opacity-85 text-2xl font-bold tracking-widest text-center">
            Why LIST?
          </h1>
          <p className="text-stone-500 text-base sm:text-white md:text-xl font-normal leading-normal tracking-wide mx-auto text-center mb-4 sm:mb-0">
            Unleash your startup dream. List empowers beginners with the skills
            and knowledge to launch <br />
            and grow their business - all in one place.
          </p>
        </div>

        <div>
          <video className="w-full h-2/5 rounded-xl" controls>
            <source src="/img/vide01.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="sec6 mt-10">
        <h1 className="text-emerald-800 text-xl font-semibold tracking-widest text-center mb-4 md:mb-12 md:text-2xl">
          Our coaches
        </h1>

        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-16 lg:gap-x-24 gap-y-10 w-fit mx-auto">
          <div className="w-56 rounded-lg">
            <div className="w-52 h-48 ">
              <img
                className="w-full h-full border-2 border-gray-200 border-opacity-20 rounded-2xl"
                src="/ourcoaches/abhi.jpg"
                alt="blog"
              />
            </div>
            <div className="p-2">
              <h1 className="text-emerald-800 text-lg font-semibold leading-relaxed tracking-wide text-center">
                ABHISHEK RAI
              </h1>
              <p className="font-normal leading-5 tracking-wide text-center text-emerald-800 text-xs">
                Start-up Coach, Entrepreneur, Founder GreenVayu, LIST
              </p>
            </div>
          </div>

          <div className="w-56 rounded-lg">
            <div className="w-52 h-48 ">
              <img
                className="w-full h-full border-2 border-gray-200 border-opacity-20 rounded-2xl"
                src="/ourcoaches/rohit.png"
                alt="blog"
              />
            </div>
            <div className="p-2">
              <h1 className="text-emerald-800 text-lg font-semibold leading-relaxed tracking-wide text-center">
                ROHIT GUPTA
              </h1>
              <p className="font-normal leading-5 tracking-wide text-center text-emerald-800 text-xs">
                Start-up Coach, Entrepreneur, Founder GreenVayu, LIST
              </p>
            </div>
          </div>

          <div className="w-56 rounded-lg">
            <div className="w-52 h-48 ">
              <img
                className="w-full h-full border-2 border-gray-200 border-opacity-20 rounded-2xl"
                src="/ourcoaches/richa.png"
                alt="blog"
              />
            </div>
            <div className="p-2">
              <h1 className="text-emerald-800 text-lg font-semibold leading-relaxed tracking-wide text-center">
                RICHA KHARE
              </h1>
              <p className="font-normal leading-5 tracking-wide text-center text-emerald-800 text-xs">
                Start-up Coach, Entrepreneur, Founder GreenVayu, LIST
              </p>
            </div>
          </div>

          <div className="w-56 rounded-lg">
            <div className="w-52 h-48 ">
              <img
                className="w-full h-full border-2 border-gray-200 border-opacity-20 rounded-2xl"
                src="/ourcoaches/niraj.jpg"
                alt="blog"
              />
            </div>
            <div className="p-2">
              <h1 className="text-emerald-800 text-lg font-semibold leading-relaxed tracking-wide text-center">
                NIRAJ SHRIVASTAVA
              </h1>
              <p className="font-normal leading-5 tracking-wide text-center text-emerald-800 text-xs">
                Start-up Coach, Entrepreneur, Founder GreenVayu, LIST
              </p>
            </div>
          </div>

          <div className="w-56 rounded-lg">
            <div className="w-52 h-48 ">
              <img
                className="w-full h-full border-2 border-gray-200 border-opacity-20 rounded-2xl"
                src="/ourcoaches/sudeep.jpg"
                alt="blog"
              />
            </div>
            <div className="p-2">
              <h1 className="text-emerald-800 text-lg font-semibold leading-relaxed tracking-wide text-center">
                SUDEEP SHRIVASTAVA
              </h1>
              <p className="font-normal leading-5 tracking-wide text-center text-emerald-800 text-xs">
                Start-up Coach, Entrepreneur, Founder GreenVayu, LIST
              </p>
            </div>
          </div>

          <div className="w-56 rounded-lg">
            <div className="w-52 h-48 ">
              <img
                className="w-full h-full border-2 border-gray-200 border-opacity-20 rounded-2xl"
                src="/ourcoaches/Aparna.jpg"
                alt="blog"
              />
            </div>
            <div className="p-2">
              <h1 className="text-emerald-800 text-lg font-semibold leading-relaxed tracking-wide text-center">
                APARNA DAS
              </h1>
              <p className="font-normal leading-5 tracking-wide text-center text-emerald-800 text-xs">
                Start-up Coach, Entrepreneur, Founder GreenVayu, LIST
              </p>
            </div>
          </div>
        </div>

        <div className="sm:hidden flex overflow-x-scroll no-scrollbar space-x-4 mt-2 mx-4">
          <div className="w-56 rounded-lg">
            <div className="w-56 h-48 ">
              <img
                className="w-full h-full border-2 border-gray-200 border-opacity-20 rounded-2xl"
                src="/ourcoaches/abhi.jpg"
                alt="blog"
              />
            </div>
            <div className="p-2">
              <h1 className="text-emerald-800 text-lg font-semibold leading-relaxed tracking-wide text-center">
                ABHISHEK RAI
              </h1>
              <p className="font-normal leading-5 tracking-wide text-center text-emerald-800 text-xs">
                Start-up Coach, Entrepreneur, Founder GreenVayu, LIST
              </p>
            </div>
          </div>

          <div className="w-56 rounded-lg">
            <div className="w-56 h-48 ">
              <img
                className="w-full h-full border-2 border-gray-200 border-opacity-20 rounded-2xl"
                src="/ourcoaches/rohit.png"
                alt="blog"
              />
            </div>
            <div className="p-2">
              <h1 className="text-emerald-800 text-lg font-semibold leading-relaxed tracking-wide text-center">
                ROHIT GUPTA
              </h1>
              <p className="font-normal leading-5 tracking-wide text-center text-emerald-800 text-xs">
                Start-up Coach, Entrepreneur, Founder GreenVayu, LIST
              </p>
            </div>
          </div>

          <div className="w-56 rounded-lg">
            <div className="w-56 h-48 ">
              <img
                className="w-full h-full border-2 border-gray-200 border-opacity-20 rounded-2xl"
                src="/ourcoaches/richa.png"
                alt="blog"
              />
            </div>
            <div className="p-2">
              <h1 className="text-emerald-800 text-lg font-semibold leading-relaxed tracking-wide text-center">
                RICHA KHARE
              </h1>
              <p className="font-normal leading-5 tracking-wide text-center text-emerald-800 text-xs">
                Start-up Coach, Entrepreneur, Founder GreenVayu, LIST
              </p>
            </div>
          </div>

          <div className="w-56 rounded-lg">
            <div className="w-56 h-48 ">
              <img
                className="w-full h-full border-2 border-gray-200 border-opacity-20 rounded-2xl"
                src="/ourcoaches/niraj.jpg"
                alt="blog"
              />
            </div>
            <div className="p-2">
              <h1 className="text-emerald-800 text-lg font-semibold leading-relaxed tracking-wide text-center">
                NIRAJ SHRIVASTAVA
              </h1>
              <p className="font-normal leading-5 tracking-wide text-center text-emerald-800 text-xs">
                Start-up Coach, Entrepreneur, Founder GreenVayu, LIST
              </p>
            </div>
          </div>

          <div className="w-56 rounded-lg">
            <div className="w-56 h-48 ">
              <img
                className="w-full h-full border-2 border-gray-200 border-opacity-20 rounded-2xl"
                src="/ourcoaches/sudeep.jpg"
                alt="blog"
              />
            </div>
            <div className="p-2">
              <h1 className="text-emerald-800 text-lg font-semibold leading-relaxed tracking-wide text-center">
                SUDEEP SHRIVASTAVA
              </h1>
              <p className="font-normal leading-5 tracking-wide text-center text-emerald-800 text-xs">
                Start-up Coach, Entrepreneur, Founder GreenVayu, LIST
              </p>
            </div>
          </div>

          <div className="w-56 rounded-lg">
            <div className="w-56 h-48 ">
              <img
                className="w-full h-full border-2 border-gray-200 border-opacity-20 rounded-2xl"
                src="/ourcoaches/Aparna.jpg"
                alt="blog"
              />
            </div>
            <div className="p-2">
              <h1 className="text-emerald-800 text-lg font-semibold leading-relaxed tracking-wide text-center">
                APARNA DAS
              </h1>
              <p className="font-normal leading-5 tracking-wide text-center text-emerald-800 text-xs">
                Start-up Coach, Entrepreneur, Founder GreenVayu, LIST
              </p>
            </div>
          </div>
        </div>

        <div className="sm:hidden text-center mt-6 ">
          <span className="text-emerald-800 mb-4">
            Scroll to See all Coaches
          </span>
        </div>
      </div>

      <div className="sec7 mt-12">
        <div className="flex justify-around p-4 bg-white rounded-2xl shadow min-h-40">
          <div className="p-2 w-full xsm:w-1/2 sm:ml-12 h-fit my-auto">
            <h1 className="text-center text-emerald-800 text-lg xsm:text-2xl font-bold leading-none md:text-3xl sm:text-start">
              Discover the key to <br />
              start your business
            </h1>
            <p className="text-center text-stone-500 text-base font-normal leading-5 tracking-wide pt-4 pb-4 xsm:text-xl md:text-xl sm:text-start">
              Learn the fundamentals{" "}
              <span className="sm:hidden">
                <br />
              </span>
              of starting a business
              <br /> with List.
            </p>
            <div className="mt-2 w-fit mx-auto sm:hidden">
              <Button variant="outlined" color="secondary">
                Get in touch
              </Button>
            </div>

            <div className="hidden sm:flex items-center space-x-4 mt-4">
              <Button variant="contained" color="success">
                Get in touch
              </Button>

              <Button variant="outlined" color="secondary">
                Learn more
              </Button>
            </div>
          </div>

          <img
            src="/img/img24.png"
            className="hidden xsm:block w-[45%] sm:w-[35%] md:w-[40%] "
          />
        </div>
      </div>

      <div className="sec8 -mt-2">
        <Testimonials/>
      </div>

      <div className="sec9 mt-6 md:mt-10">
            <div className=" bg-[url('/img/R.png')]">
            <div className="bg-teal-900 opacity-75 px-4 py-8 md:py-20 md:px-32">
              <h1 className="text-center text-white text-lg md:text-2xl font-semibold leading-6 tracking-normal z-20">Network, Learn, and Grow with LIST Training Academy</h1>
              <p className="text-center text-white text-base md:text-xl font-normal leading-normal tracking-wide mt-4 z-20">At LIST Training Academy, you’re not just enrolling in a course – you’re joining a vibrant community of innovators from around the world. Transform your entrepreneurial dreams into reality and become part of a global network pushing boundaries and achieving greatness. </p>
              <div className="mt-6 text-center z-20">
              <Button variant="contained" color="success">
              Join our Community
              </Button>
              </div>
            </div>

            </div>
      </div>
    </>
  );
};

export default Home;

{
  /*
  


  */
}