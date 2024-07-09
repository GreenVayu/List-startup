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

      <div className="sec4 mt-12 md:mt-24 sm:relative">

        <div className="sm:absolute sm:top-[70px] sm:left-[10px] md:top-[130px] md:left-[30px] lg:top-[200px] lg:left-[100px] sm:space-y-3">
          <h1 className="text-emerald-800 sm:text-white sm:opacity-85 text-2xl font-bold tracking-widest text-center">Why LIST?</h1>
          <p className="text-stone-500 text-base sm:text-white md:text-xl font-normal leading-normal tracking-wide mx-auto text-center mb-4 sm:mb-0">Unleash your startup dream. List empowers beginners with the skills and knowledge to launch <br/>and grow their business - all in one place.</p>
        </div>

        <div>
          <video className="w-full h-2/5 rounded-xl" controls>
            <source src="/img/vide01.mp4" type="video/mp4" />
          </video>
        </div>

      </div>
    </>
  );
};

export default Home;


// <div className="w-[1440px] h-[754px] relative">
//   <div className="w-[1440px] h-[754px] left-0 top-0 absolute">
//     <div className="w-[1440px] h-[754px] left-0 top-0 absolute" />
//     <div className="w-[1440px] h-[754px] left-0 top-0 absolute bg-black/opacity-30" />
//   </div>
//   <div className="w-[930px] h-[237px] left-[284px] top-[304px] absolute">
//     <div className="w-[930px] left-0 top-[189px] absolute text-center text-white text-lg font-normal font-['Orienta'] leading-normal tracking-wide">Unleash your startup dream. List empowers beginners with the skills and knowledge to launch and grow their business - all in one place.</div>
//     <div className="w-[183.02px] h-[146px] left-[344px] top-0 absolute">
//       <div className="w-[183.02px] left-0 top-[83px] absolute text-white/opacity-70 text-[38px] font-semibold font-['Mukta'] tracking-widest">Why LIST?</div>
//       <div className="w-[65.76px] h-[62px] left-[118px] top-0 absolute origin-top-left rotate-180 bg-gray-400 rounded-full" />
//     </div>
//   </div>
// </div>