import { useState } from "react";
import { Button } from "@mui/material";
import RocketIcon from "@mui/icons-material/Rocket";
import PsychologyIcon from "@mui/icons-material/Psychology";
import CallSplitIcon from "@mui/icons-material/CallSplit";

interface Section2PicProps {
  alt: string;
  src: string;
}

const Section2Pic: React.FC<Section2PicProps> = ({ alt, src }) => {
  return (
    <img
      className="object-cover object-center rounded w-1/2"
      alt={alt}
      src={src}
    />
  );
};

const Section2Text: React.FC<{
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
  const [currentIndex, setCurrentIndex] = useState(0);

  const coaches = [
    {
      name: "ABHISHEK RAI",
      title: "Start-up Coach, Entrepreneur",
      description: "Founder GreenVayu, LIST",
      imageSrc: "/ourcoaches/abhi.jpg",
    },
    {
      name: "Rohit Gupta",
      title: "Start-up Coach, Entrepreneur",
      description: "Founder GreenVayu, LIST",
      imageSrc: "/ourcoaches/rohit.png",
    },
    {
      name: "RICHA RAI",
      title: "Start-up Coach, Entrepreneur",
      description: "Founder GreenVayu, LIST",
      imageSrc: "/ourcoaches/richa.png",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? coaches.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === coaches.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <section className="text-gray-600 body-font">
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
      </section>

      <section className="text-gray-600 body-font py-10">
        <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#005D3E] mb-4">
          What is LIST?
        </p>
        <div className="flex px-0 flex-col md:flex-row items-center justify-between">
          <div className="hidden md:block lg:max-w-lg md:w-1/2 lg:w-full">
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-2">
                <Section2Pic alt="Plan" src="img/sec2-1.png" />
                <Section2Pic alt="Train" src="img/sec2-2.png" />
              </div>
              <div className="flex flex-row gap-2">
                <Section2Pic alt="Collaborate" src="img/sec2-3.png" />
                <Section2Pic alt="Succeed" src="img/sec2-4.png" />
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
                <Section2Text Icon={RocketIcon}>
                  Startup Focused - The course content is tailored to the
                  challenges and opportunities faced by early-stage businesses.
                </Section2Text>
                <Section2Text Icon={PsychologyIcon}>
                  Beginner Friendly - If you're unfamiliar with the startup
                  ecosystem, List is a perfect starting point.
                </Section2Text>
                <Section2Text Icon={CallSplitIcon}>
                  Topic Variety - List offers a broad range of courses covering
                  various essential startup topics.
                </Section2Text>
              </div>
            </div>

            <div className="mt-2 flex item-center gap-3">
              <Button variant="contained" color="success">
                About us
              </Button>
            </div>
          </div>
        </div>
      </section>

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

      <div className="sec mt-6">
        <div>
          <h1 className="text-emerald-800 text-xl font-semibold tracking-widest text-center">
            Popular course/videos
          </h1>
          <p className="text-stone-500 text-base font-normal leading-normal tracking-wide text-center">
            Ready to Launch? Discover the secrets to startup success with our
            most popular courses.
          </p>

          <div className="flex justify-between md:hidden">
            <h1 className="text-center text-stone-500 text-sm font-semibold leading-normal tracking-wide">
              Categories
            </h1>

            <select
              name=""
              id=""
              className=" text-center text-emerald-800 text-sm font-medium leading-3 tracking-wide p-2 mr-2 bg-white"
            >
              <option className=" text-center text-emerald-800 text-sm font-medium leading-3 tracking-wide">
                Mindset
              </option>
              <option className=" text-center text-emerald-800 text-sm font-medium leading-3 tracking-wide">
                Legal
              </option>
              <option className=" text-center text-emerald-800 text-sm font-medium leading-3 tracking-wide">
                Idea
              </option>
              <option className=" text-center text-emerald-800 text-sm font-medium leading-3 tracking-wide">
                Finance
              </option>
            </select>
          </div>

          <div className="md:hidden mt-6">
            <div className="flex overflow-x-scroll no-scrollbar space-x-6 px-4 ">
              <video className="w-60 rounded-xl" controls>
                <source src="/img/vide01.mp4" type="video/mp4" />
              </video>

              <video className="w-60 rounded-xl" controls>
                <source src="/img/vide01.mp4" type="video/mp4" />
              </video>

              <video className="w-60 rounded-xl" controls>
                <source src="/img/vide01.mp4" type="video/mp4" />
              </video>

              <video className="w-60 rounded-xl" controls>
                <source src="/img/vide01.mp4" type="video/mp4" />
              </video>
              
            </div>
          </div>

          <div className="mt-4 hidden md:block mx-6">
          <ul className="border-2 border-slate-200 flex justify-between p-2 px-4 rounded-lg">
            <li className="text-center text-emerald-800 text-sm font-medium leading-4 tracking-wide border-b-2 border-amber-500">Mindset</li>
            <li className="text-center text-emerald-800 text-sm font-medium leading-4 tracking-wide">Idea</li>
            <li className="text-center text-emerald-800 text-sm font-medium leading-4 tracking-wide">Legal</li>
            <li className="text-center text-emerald-800 text-sm font-medium leading-4 tracking-wide">Finance</li>

          </ul>
          </div>

<div className="hidden md:block container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16 lg:mx-4 my-4 md:mx-10">
        
      <div className="overflow-hidden h-[330px] rounded-lg">
            <video
              className="w-full h-full object-cover border-none outline-none"
              controls
            >
              <source src="/img/vide01.mp4" type="video/mp4" />
            </video>
      </div>

      <div className="overflow-hidden h-[330px] rounded-lg">
            <video
              className="w-full h-full object-cover border-none outline-none"
              controls
            >
              <source src="/img/vide01.mp4" type="video/mp4" />
            </video>
      </div>

      <div className="overflow-hidden h-[330px] rounded-lg">
            <video
              className="w-full h-full object-cover border-none outline-none"
              controls
            >
              <source src="/img/vide01.mp4" type="video/mp4" />
            </video>
      </div>

      <div className="overflow-hidden h-[330px] rounded-lg">
            <video
              className="w-full h-full object-cover border-none outline-none"
              controls
            >
              <source src="/img/vide01.mp4" type="video/mp4" />
            </video>
      </div>

</div>
    </div>

        </div>
      </div>

      <div className="sec4 mt-12 md:mt-24 sm:relative">
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

      <div className="sec5 mt-12">
        <h1 className="text-emerald-800 text-2xl font-semibold leading-relaxed tracking-wide mb-4 text-center md:text-start">
          Our Coaches
        </h1>

        <div className="flex flex-col items-center space-y-4 md:hidden">
          <div className="md:hidden flex items-center">
            <button
              className="p-2 rounded-full bg-gray-300 mr-4"
              onClick={handlePrev}
            >
              &lt;
            </button>
            <div className="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-gray-500">
              <div className="relative">
                <img
                  className="w-full h-full object-cover"
                  src={coaches[currentIndex].imageSrc}
                  alt="Profile Image"
                />
              </div>
              <div className="px-6 py-4">
                <div className="text-emerald-800 text-xl font-semibold text-center leading-3 tracking-wide">
                  {coaches[currentIndex].name}
                </div>
                <p className="text-center text-emerald-800 text-base font-normal leading-5 tracking-tight mt-2">
                  {coaches[currentIndex].title}, <br />
                  {coaches[currentIndex].description}
                </p>
              </div>
            </div>
            <button
              className="p-2 rounded-full bg-gray-300 ml-4"
              onClick={handleNext}
            >
              &gt;
            </button>
          </div>
        </div>

        <div className="hidden md:flex md:justify-around gap-10">
          <div className="max-w-80 mx-auto overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-gray-500">
            <div className="relative">
              <img
                className="w-full h-full lg:h-80 object-cover"
                src="/ourcoaches/abhi.jpg"
                alt="Profile Image"
              />
            </div>
            <div className="px-6 py-4">
              <div className="text-xl text-emerald-800 font-semibold text-center leading-3 tracking-wide">
                ABHISHEK RAI
              </div>
              <p className="text-center text-emerald-800 text-lg font-normal leading-5 tracking-tight mt-4">
                Start-up Coach, Entrepreneur, <br />
                Founder GreenVayu, LIST
              </p>
            </div>
          </div>

          <div className="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-gray-500">
            <div className="relative">
              <img
                className="w-full h-full object-cover"
                src="/ourcoaches/rohit.png"
                alt="Profile Image"
              />
            </div>
            <div className="px-6 py-4">
              <div className="text-xl text-emerald-800 font-semibold text-center leading-3 tracking-wide">
                Rohit Gupta
              </div>
              <p className="text-center text-emerald-800 text-lg font-normal leading-5 tracking-tight mt-4">
                Start-up Coach, Entrepreneur, <br />
                Founder GreenVayu, LIST
              </p>
            </div>
          </div>

          <div className="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-gray-500">
            <div className="relative">
              <img
                className="w-full h-full object-cover"
                src="/ourcoaches/richa.png"
                alt="Profile Image"
              />
            </div>
            <div className="px-6 py-4">
              <div className="text-xl text-emerald-800 font-semibold text-center leading-3 tracking-wide">
                RICHA RAI
              </div>
              <p className="text-center text-emerald-800 text-lg font-normal leading-5 tracking-tight mt-4">
                Start-up Coach, Entrepreneur, <br />
                Founder GreenVayu, LIST
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="sec6 mt-12">
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
    </>
  );
};

export default Home;

{
  /* 


<div className="w-[1200px] h-[560px] relative">
  <div className="w-[1199px] h-[435px] left-[1px] top-[125px] absolute">
    <div className="w-[1106px] h-9 pr-[221.20px] left-0 top-0 absolute border border-slate-200 justify-start items-start inline-flex">
      <div className="w-[221.20px] h-[34px] border-b border-amber-500 justify-center items-center inline-flex">
        <div className="text-center text-emerald-800 text-sm font-bold font-['Mukta'] leading-normal tracking-wide">Mindset</div>
      </div>
      <div className="w-[221.20px] h-9 pt-3 pb-[15px] border-b border-slate-200 justify-center items-center inline-flex">
        <div className="text-center text-emerald-800 text-sm font-medium font-['Mukta'] leading-[14px] tracking-wide">Idea</div>
      </div>
      <div className="w-[221.20px] h-9 pt-3 pb-[15px] border-b border-slate-200 justify-center items-center inline-flex">
        <div className="text-center text-emerald-800 text-sm font-medium font-['Mukta'] leading-[14px] tracking-wide">Legal</div>
      </div>
      <div className="w-[221.20px] h-9 pl-[76.10px] pr-[77.10px] pt-3 pb-[15px] border-b border-slate-200 justify-center items-center inline-flex">
        <div className="w-[68px] text-center text-emerald-800 text-sm font-medium font-['Mukta'] leading-[14px] tracking-wide">Finance</div>
      </div>
    </div>
    <div className="w-[1198px] h-[347px] left-[1px] top-[88px] absolute">
      <div className="w-[280px] h-[346px] left-[609px] top-0 absolute bg-gradient-to-b from-neutral-500 to-zinc-300 rounded-lg border">
        <div className="w-[280px] h-[348px] left-0 top-0 absolute rounded-lg" />
        <div className="w-[280px] h-[347px] left-0 top-0 absolute bg-black/opacity-50 rounded-lg" />
        <div className="w-[202px] left-[27px] top-[59px] absolute text-white text-2xl font-normal font-['Orienta'] leading-normal tracking-wide">Apple’s Mindset</div>
        <div className="left-[27px] top-[36px] absolute text-white text-sm font-normal font-['Orienta'] leading-[18px] tracking-wide">FREE</div>
        <div className="w-[55.15px] h-[52px] left-[112px] top-[183px] absolute">
          <div className="w-[55.15px] h-[52px] left-[55.15px] top-0 absolute origin-top-left rotate-180 bg-gray-400 rounded-full" />
        </div>
        <div className="w-6 h-6 left-[247px] top-[12px] absolute" />
      </div>
      <div className="w-[280px] h-[346px] left-[304px] top-0 absolute">
        <div className="w-[280px] h-[346px] left-0 top-0 absolute bg-gradient-to-b from-neutral-500 to-zinc-300 rounded-lg border">
          <div className="w-[280.10px] h-[348px] left-0 top-0 absolute">
            <div className="w-[280px] h-[348px] left-[0.10px] top-0 absolute rounded-lg" />
            <div className="w-[280px] h-[347px] left-0 top-0 absolute bg-black/opacity-50 rounded-lg" />
          </div>
          <div className="w-[55.15px] h-[52px] left-[112px] top-[186px] absolute">
            <div className="w-[55.15px] h-[52px] left-[55.15px] top-0 absolute origin-top-left rotate-180 bg-gray-400 rounded-full" />
          </div>
        </div>
        <div className="w-[224.44px] left-[30px] top-[59px] absolute text-white text-2xl font-normal font-['Orienta'] leading-normal tracking-wide">Apple’s Mindset</div>
        <div className="w-[33.33px] left-[30px] top-[36px] absolute text-white text-sm font-normal font-['Orienta'] leading-[18px] tracking-wide">FREE</div>
        <div className="w-6 h-6 left-[247px] top-[11px] absolute" />
      </div>
      <div className="w-[280px] h-[347px] left-0 top-0 absolute">
        <div className="w-[267.27px] h-[346px] left-[8.48px] top-[1px] absolute rounded-lg border" />
        <div className="w-[280px] h-[346px] left-0 top-[1px] absolute rounded-lg" />
        <div className="w-[280px] h-[347px] left-0 top-0 absolute bg-black/opacity-50 rounded-lg" />
        <div className="w-[55.15px] h-[52px] left-[114.55px] top-[186px] absolute">
          <div className="w-[55.15px] h-[52px] left-[55.15px] top-0 absolute origin-top-left rotate-180 bg-gray-400 rounded-full" />
        </div>
        <div className="w-[43px] left-[39px] top-[38px] absolute text-white text-sm font-normal font-['Orienta'] leading-[18px] tracking-wide">FREE</div>
        <div className="w-[214.24px] left-[37.12px] top-[59px] absolute text-white text-2xl font-normal font-['Orienta'] leading-normal tracking-wide">Apple’s Mindset</div>
        <div className="w-6 h-6 left-[249px] top-[11px] absolute" />
      </div>
      <div className="w-[280px] h-[347px] left-[918px] top-0 absolute">
        <div className="w-[267.27px] h-[346px] left-[8.48px] top-[1px] absolute rounded-lg border" />
        <div className="w-[280px] h-[346px] left-0 top-[1px] absolute rounded-lg" />
        <div className="w-[280px] h-[347px] left-0 top-0 absolute bg-black/opacity-50 rounded-lg" />
        <div className="w-[55.15px] h-[52px] left-[114.55px] top-[184px] absolute">
          <div className="w-[55.15px] h-[52px] left-[55.15px] top-0 absolute origin-top-left rotate-180 bg-gray-400 rounded-full" />
        </div>
        <div className="w-[55px] left-[37px] top-[36px] absolute text-white text-sm font-normal font-['Orienta'] leading-[18px] tracking-wide">FREE</div>
        <div className="w-[214.24px] left-[37.12px] top-[60px] absolute text-white text-2xl font-normal font-['Orienta'] leading-normal tracking-wide">Apple’s Mindset</div>
        <div className="w-6 h-6 left-[249px] top-[11px] absolute" />
      </div>
    </div>
  </div>
  <div className="w-[969px] h-[75px] left-0 top-0 absolute">
    <div className="left-0 top-0 absolute text-emerald-800 text-[38px] font-semibold font-['Mukta'] tracking-widest">Popular course/videos</div>
    <div className="w-[968px] left-[1px] top-[64px] absolute text-stone-500 text-base font-normal font-['Orienta'] leading-normal tracking-wide">Ready to Launch? Discover the secrets to startup success with our most popular courses.</div>
  </div>
</div>

*/
}
