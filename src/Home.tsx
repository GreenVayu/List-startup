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

      <div className="sec3">

      <div className="p-8 bg-gradient-to-br from-emerald-900 via-emerald-900 to-neutral-400">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

              <div className="p-6">
                <h3 className="text-2xl leading-7 font-bold text-white mb-2 text-center lg:text-3xl">
                500+
                </h3>
                <p className="text-xl leading-6 text-extrawhite text-center">
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
                The Ratio of theory and  practice in each course
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

    </>
  );
};

export default Home;


{/* <div className="w-[1440px] h-[381px] relative">
  <div className="w-[1440px] h-[381px] left-0 top-0 absolute">
    <img className="w-[1440px] h-[380.85px] left-0 top-0 absolute" src="https://via.placeholder.com/1440x381" />
    <div className="w-[1440px] h-[380.39px] left-0 top-[0.61px] absolute bg-gradient-to-br from-emerald-900 via-emerald-900 to-neutral-400" />
  </div>
  <div className="w-[1052px] h-[202px] left-[194px] top-[79px] absolute">
    <div className="w-[196px] h-[154px] left-0 top-0 absolute">
      <div className="left-0 top-0 absolute text-white text-[75px] font-bold font-['Palanquin Dark'] tracking-[3.75px]">500+</div>
      <div className="left-[33px] top-[143px] absolute text-white text-base font-normal font-['Orienta'] leading-normal tracking-wide">Start - up ideas</div>
    </div>
    <div className="w-[236px] h-[202px] left-[268px] top-0 absolute">
      <div className="left-0 top-0 absolute text-white text-[75px] font-bold font-['Palanquin Dark'] tracking-[3.75px]">1500+</div>
      <div className="w-[230px] left-[3px] top-[143px] absolute text-center text-white text-base font-normal font-['Orienta'] leading-normal tracking-wide">Subscribers joined our program and became self employed</div>
    </div>
    <div className="w-[172px] h-[202px] left-[576px] top-0 absolute">
      <div className="left-[21px] top-0 absolute text-white text-[75px] font-bold font-['Palanquin Dark'] tracking-[3.75px]">25+</div>
      <div className="w-[172px] left-0 top-[143px] absolute text-center text-white text-base font-normal font-['Orienta'] leading-normal tracking-wide">The Ratio of theory and  practice in each course</div>
    </div>
    <div className="w-[232px] h-[202px] left-[820px] top-0 absolute">
      <div className="left-[29px] top-0 absolute text-white text-[75px] font-bold font-['Palanquin Dark'] tracking-[3.75px]">99%</div>
      <div className="w-[232px] left-0 top-[143px] absolute text-center text-white text-base font-normal font-['Orienta'] leading-normal tracking-wide">Discover the various funding options available for your startup</div>
    </div>
  </div>
</div> */}
