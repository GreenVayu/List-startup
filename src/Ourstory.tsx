import StarIcon from "@mui/icons-material/Star";
import { Button } from "@mui/material";

function Ourstory() {
  const cardData = [
    {
      title: "500+",
      description: "Start - up ideas",
    },
    {
      title: "1500+",
      description: "Subscribers joined our program and became self employed",
    },
    {
      title: "25+",
      description: "The Ratio of theory and  practice in each course",
    },
    {
      title: "99%",
      description:
        "Discover the various funding options available for your startup",
    },
  ];

  return (
    <div className="container w-fit mx-auto">
      <div className="sec1">
        <div className="text-center mt-6">
          <div className="w-fit mx-auto">
            <span className="text-emerald-800 text-sm font-semibold leading-8 tracking-widest xsm:text-2xl sm:text-3xl">
              OUR{" "}
            </span>
            <span className="text-amber-500 text-sm font-semibold leading-8 tracking-widest xsm:text-2xl sm:text-3xl">
              JOURNEY
            </span>
            <span className="text-emerald-800 text-sm font-semibold leading-8 tracking-widest xsm:text-2xl sm:text-3xl">
              {" "}
              FOR YOUR{" "}
            </span>
          </div>
          <div className="w-fit mx-auto xsm:mt-2">
            <span className="text-emerald-800 text-sm font-semibold leading-8 tracking-widest xsm:text-2xl sm:text-3xl">
              LOW-INVESTMENT STARTUP
            </span>
          </div>
        </div>

        <div className="text-center text-stone-500 text-base font-normal leading-normal tracking-wide mt-2 w-4/5 sm:w-4/5 mx-auto">
          LIST was born from a simple desire: to empower individuals to pursue
          their entrepreneurial dreams with confidence and support. LIST was
          established as a guiding light, dispelling uncertainty and fostering a
          space where dreams can take flight.
        </div>

        <div className="w-4/5 mx-auto mt-6 h-[2px] opacity-20 border-2 border-stone-500"></div>
      </div>

      <div className="sec2 mt-6 sm:mx-auto sm:flex md:space-x-2 ">
        <img
          src="/ourstory/Colorpalette.jpg"
          className=" hidden w-[30vw] rounded-lg pl-4 ml-4 mt-8 md:block "
        />

        <div className="flex flex-col mx-auto border-gray-900 sm:mt-6">
          <div className="text-emerald-800 text-xl font-semibold tracking-widest mx-auto w-fit md:text-2xl lg:text-3xl">
            Our <span className="border-b-2 border-yellow-500">Mission</span>
          </div>

          <div className="text-stone-500 text-base font-normal leading-8 tracking-wide w-4/5 mx-auto mt-4 pl-4 md:pl-2 lg:text-lg lg:leading-8">
            LIST was created to empower individuals to pursue their
            entrepreneurial dreams with confidence.
            <br />
            We understand the fear that can hold aspiring business owners back.
            <br />
            LIST is here to discard any uncertainty and foster a space where
            dreams come true and you can make changes in the world. Let’s
            Innovate together.
          </div>

          <div className="mx-auto mt-6 bg-emerald-800 rounded-lg w-fit sm:pl-0 sm:ml-16">
            {" "}
            <Button variant="contained" color="success">
                Meet Our Coaches
              </Button>
          </div>
        </div>
      </div>

      <div className="sec3 mt-20 sm:relative">
        <div className="sm:bg-[url('/ourstory/cp.png')] sm:bg-cover sm:block sm:py-10 ">
          <div className="text-xl font-semibold tracking-widest w-fit mx-auto text-amber-500 lg:text-2xl sm:text-white sm:absolute sm:left-[40px] sm:top-[25px]">
            How we work?
          </div>

          <div className="flex flex-col md:flex-row md:justify-around px-6 py-4 mt-8">
            <div className="bg-white shadow-md p-6 rounded-lg mb-6 md:mb-0 md:mr-4 flex-1">
              <div className="flex justify-center mb-4">
                <img
                  src="/ourstory/MdStackedBarChart.png"
                  alt="Empowerment Icon"
                  className="w-12 h-12 bg-gradient-to-b from-amber-500 to-yellow-600 rounded-lg p-2"
                />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">
                Step-by-Step Guidance
              </h3>
              <p className="text-center text-stone-500">
                We provide structured guidance to help you take the first step
                and navigate the complexities of starting a business.
              </p>
            </div>

            <div className="bg-white shadow-md p-6 rounded-lg mb-6 md:mb-0 md:mr-4 flex-1">
              <div className="flex justify-center mb-4">
                <img
                  src="/ourstory/Group.png"
                  alt="Support Icon"
                  className="w-12 h-12 bg-gradient-to-b from-amber-500 to-yellow-600 rounded-lg p-2"
                />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">
                Tailored Resources
              </h3>
              <p className="text-center text-stone-500">
                Access customized resources and tools designed to meet your
                specific entrepreneurial needs.
              </p>
            </div>

            <div className="bg-white shadow-md p-6 rounded-lg flex-1">
              <div className="flex justify-center mb-4">
                <img
                  src="/ourstory/MdPeopleAlt.png"
                  alt="Education Icon"
                  className="w-12 h-12 bg-gradient-to-b from-amber-500 to-yellow-600 rounded-lg p-2"
                />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">
                Community Support
              </h3>
              <p className="text-center text-stone-500">
                Join a vibrant community of like-minded individuals who share
                your entrepreneurial spirit and are ready to support each other.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="sec4 mt-16">
        <div className="bg-[url('/ourstory/Colorpalette1.jpg')] bg-cover bg-center">
          <div className="bg-black opacity-60 md:flex w-fit mx-auto">
            <div className="firstdiv md:w-1/2 md:p-6 md:ml-5 lg:p-16 p-6">
              <div className="text-white text-base font-normal leading-normal tracking-wide">
                “At LIST Training Academy, we believe in the power of community.
                Our global network of entrepreneurs, mentors, and industry
                experts offers invaluable support and networking opportunities.
                By joining LIST, you become part of a vibrant community that
                encourages collaboration, innovation, and growth.
              </div>

              <div className="flex p-4 mt-4">
                <div className="w-fit opacity-100">
                  <img
                    src="/ourstory/abhi.jpg"
                    className="w-[38px] h-[35px] rounded-full"
                  />
                </div>
                <div className="text-white text-lg md:text-xl font-normal leading-normal tracking-wide ml-2 md:ml-4">
                  – Abhishek Rai
                </div>
              </div>
            </div>

            <div className="hidden md:block w-1/2 my-auto md:pr-16 lg:pl-16">
              <img src="/ourstory/17.jpg" className="" />
            </div>
          </div>
        </div>
      </div>

      <div className="sec5 mt-20 ml-6">
        <div className="mb-4 w-fit mx-auto p-4">
          <div className="text-center text-emerald-800 text-2xl font-semibold tracking-widest md:text-3xl">
            Our Values
          </div>
          <div className="text-center text-stone-500 text-xl font-normal leading-6 tracking-wide md:text-2xl">
            We are here only for you
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-around">
          <div className="bg-white shadow-md p-6 rounded-lg mb-6 md:mb-0 md:mr-4 flex-1">
            <div className="flex justify-center mb-4">
              <img
                src="/ourstory/Vector.png"
                alt="Empowerment Icon"
                className="w-12 h-12 bg-gradient-to-b from-amber-500 to-yellow-600 rounded-full p-2"
              />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">
              Empowerment
            </h3>
            <p className="text-center text-stone-500">
              We believe in equipping individuals with the knowledge & tools
              needed to take control of their entrepreneurial journey and
              achieve their goals.
            </p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg mb-6 md:mb-0 md:mr-4 flex-1">
            <div className="flex justify-center mb-4">
              <img
                src="/ourstory/Vector1.png"
                alt="Support Icon"
                className="w-12 h-12 bg-gradient-to-b from-amber-500 to-yellow-600 rounded-full p-4"
              />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Support</h3>
            <p className="text-center text-stone-500">
              We offer unwavering assistance and guidance, ensuring that
              entrepreneurs receive the encouragement and help necessary to
              navigate challenges and succeed.
            </p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg flex-1">
            <div className="flex justify-center mb-4">
              <img
                src="/ourstory/Vector2.png"
                alt="Education Icon"
                className="w-12 h-12 bg-gradient-to-b from-amber-500 to-yellow-600 rounded-full p-4"
              />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2 text-black">
              Education
            </h3>
            <p className="text-center text-stone-500">
              Through our workshops, mentorship programs, and resources, we
              provide valuable learning opportunities that empower entrepreneurs
              to continuously develop their skills and knowledge.
            </p>
          </div>
        </div>
      </div>

      <div className="sec6 mt-20 mb-8 lg:mr-8">

        <div className="bg-gradient-to-b from-emerald-100 py-12 md:ml-3 lg:ml-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl leading-9 font-extrabold text-emerald-800">
                Why choose us?
              </h2>
              <p className="mt-4 text-lg leading-6 text-stone-500">
                Our Low Investment Start Up Programs are tailored to meet the
                needs of entrepreneurs at every stage of their journey.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-gradient-to-b from-amber-500 to-yellow-600 rounded-2xl py-2 px-2 w-fit mx-auto mb-4 flex items-center justify-center">
                  <img
                    src="/ourstory/MdBorderColor.png"
                    alt="Icon"
                    className="h-6"
                  />
                </div>
                <h3 className="text-xl leading-7 font-semibold text-stone-500 mb-2 text-center">
                  Practical Knowledge
                </h3>
                <p className="text-base leading-6 text-stone-500 text-center">
                  We focus on practical, applied learning to better prepare you
                  for real-world challenges.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-gradient-to-b from-amber-500 to-yellow-600 rounded-2xl py-2 px-2 w-fit mx-auto mb-4 flex items-center justify-center">
                  <img src="/ourstory/Vector3.png" alt="Icon" className="h-5" />
                </div>

                <h3 className="text-xl leading-7 font-semibold text-stone-500 mb-2 text-center">
                  Theory to Application
                </h3>
                <p className="text-base leading-6 text-stone-500 text-center">
                  We focus on applied, and concise learning, replacing lengthy
                  content with techniques relevant to real-world work.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-gradient-to-b from-amber-500 to-yellow-600 rounded-2xl py-2 px-2 w-fit mx-auto mb-4 flex items-center justify-center">
                  <img src="/ourstory/Vector4.png" alt="Icon" className="h-6" />
                </div>

                <h3 className="text-xl leading-7 font-semibold text-stone-500 mb-2 text-center">
                  Interactive and Practical Examples
                </h3>
                <p className="text-base leading-6 text-stone-500 text-center">
                  Our questions and examples are crafted to stimulate critical
                  thinking and draw out ideas.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-gradient-to-b from-amber-500 to-yellow-600 rounded-2xl py-2 px-2 w-fit mx-auto mb-4 flex items-center justify-center">
                  <img
                    src="/ourstory/MdOutlineVideoLibrary.png"
                    alt="Icon"
                    className="h-6"
                  />
                </div>

                <h3 className="text-xl leading-7 font-semibold text-stone-500 mb-2 text-center">
                  Bite-Sized, Impactful Videos
                </h3>
                <p className="text-base leading-6 text-stone-500 text-center">
                  We deliver our practical learning through creatively designed,
                  and crisp videos, each under 10 minutes.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="sec7">

      <div className="p-8 bg-white">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

              <div className="p-6">
                <h3 className="text-2xl leading-7 font-extrabold text-emerald-800 mb-2 text-center md:text-3xl">
                500+
                </h3>
                <p className="text-xl leading-6 text-stone-500 text-center">
                Start - up ideas
                </p>
              </div>

              <div className="p-6">

                <h3 className="text-2xl leading-7 font-extrabold text-emerald-800 mb-2 text-center md:text-3xl">
                1500+
                </h3>
                <p className="text-xl leading-6 text-stone-500 text-center">
                Subscribers joined our program and became self employed
                </p>
              </div>

              <div className="p-6">

                <h3 className="text-2xl leading-7 font-extarbold text-emerald-800 mb-2 text-center md:text-3xl">
                25+
                </h3>
                <p className="text-xl leading-6 text-stone-500 text-center">
                The Ratio of theory and  practice in each course
                </p>
              </div>

              <div className="p-6">
                <h3 className="text-2xl leading-7 font-extrabold text-emerald-800 mb-2 text-center md:text-3xl">
                99%
                </h3>
                <p className="text-xl leading-6 text-stone-500 text-center">
                Discover the various funding options available for your startup
                </p>
              </div>
            </div>

      </div>

      </div>

      <div className="sec8 mt-12">
        <div className="bg-white rounded-2xl shadow py-4 sm:flex sm:pb-6">
          <div>
            <div className="text-emerald-800 text-xl font-semibold leading-5 tracking-widest mt-4 w-fit mx-auto px-16 sm:mt-4 sm:text-2xl lg:text-3xl sm:px-16">
              Start your journey with us
            </div>
            <div className="text-stone-500 text-lg font-normal leading-normal tracking-wide w-4/5 mx-auto mt-4 px-8">
              Explore our course and get in touch to begin your entrepreneurial
              journey today!
            </div>

            <div className="sm:flex w-fit sm:ml-16 lg:ml-24 lg:mt-6 sm:space-x-4 mx-auto">
              <Button variant="contained" color="success">
                Explore Courses
              </Button>

              <div className="mx-auto bg-white border-2 border-emerald-800 rounded-lg w-fit mt-0">
                <button className="text-emerald-800 text-base font-normal px-4 py-2">
                  Get in touch
                </button>
              </div>
            </div>
          </div>

          <div className=" hidden w-fit mx-12 my-12 md:my-6 border-l-2 border-gray-500 sm:block ">
            <img src="/ourstory/logoLISTv4.png" className="sm:py-12 md:py-0" />
          </div>
        </div>
      </div>

      <div className="sec9 mt-12 lg:ml-0">
        <div className="relative">
          <div className="text-emerald-800 text-xl font-semibold tracking-widest w-fit mx-auto sm:absolute sm:top-[0px] sm:left-[25px]">
            Latest Blogs & posts
          </div>
          <div className="hidden sm:block text-sky-700 text-base font-normal underline leading-none tracking-wide w-fit absolute top-[0px] right-[25px]">
            View all
          </div>
        </div>

        <section className="text-gray-600 body-font">
          <div className="container px-5 py-16 sm:py-24 mx-auto md:px-0 md:ml-2 lg:ml-0">
            <div className="flex flex-wrap -m-4 -mt-12">
              <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src="/ourstory/Rectangle.jpg"
                    alt="blog"
                  />
                  <div className="p-6">
                    <h1 className="text-black text-sm font-semibold tracking-wide mb-3">
                      How to do Rapid Prototyping?
                    </h1>
                    <p className="text-sm font-normal leading-5 tracking-wide mb-3">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the.....
                    </p>

                    <div className="mx-auto bg-white border-2 border-emerald-800 rounded-lg w-fit mt-4">
                      {" "}
                      <button className="text-emerald-800 text-base font-normal px-2 py-2">
                        Read more
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src="/ourstory/Rectangle.jpg"
                    alt="blog"
                  />
                  <div className="p-6">
                    <h1 className="text-black text-sm font-semibold tracking-wide mb-3">
                      How to do Rapid Prototyping?
                    </h1>
                    <p className="text-sm font-normal leading-5 tracking-wide mb-3">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the.....
                    </p>

                    <div className="mx-auto bg-white border-2 border-emerald-800 rounded-lg w-fit mt-4">
                      {" "}
                      <button className="text-emerald-800 text-base font-normal px-2 py-2">
                        Read more
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src="/ourstory/Rectangle.jpg"
                    alt="blog"
                  />
                  <div className="p-6">
                    <h1 className="text-black text-sm font-semibold tracking-wide mb-3">
                      How to do Rapid Prototyping?
                    </h1>
                    <p className="text-sm font-normal leading-5 tracking-wide mb-3">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the.....
                    </p>

                    <div className="mx-auto bg-white border-2 border-emerald-800 rounded-lg w-fit mt-4">
                      {" "}
                      <button className="text-emerald-800 text-base font-normal px-2 py-2">
                        Read more
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:hidden text-sky-700 text-base font-normal underline leading-none tracking-wide w-fit mx-auto mt-4">
              View all
            </div>
          </div>
        </section>
      </div>

      <div className="sec10 relative">
        <div className="text-black opacity-70 text-xl font-semibold tracking-widest w-fit mx-auto">
          {" "}
          Success stories{" "}
        </div>

        <section className="container sm:px-6 py-4 mx-auto mt-4">
          <div className="grid gap-4 mb-8 md:grid-cols-1 lg:grid-cols-3">
            <div className="flex items-center py-4 px-2 sm:p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm h-fit w-fit">
              <img
                alt="mountain"
                className=" w-36 sm:w-45 rounded-md border-2 border-gray-300"
                src="/ourstory/neha.jpg"
              />
              <div id="body" className="flex flex-col ml-5">
                <h4 id="name" className="text-sm font-semibold">
                  “I highly recommend this website to anyone looking to enhance
                  their knowledge.”
                </h4>
                <p
                  id="job"
                  className="text-gray-800 hidden sm:block border-b-2 border-b-black w-fit"
                >
                  <StarIcon style={{ fontSize: 20, color: "gold" }} />
                  <StarIcon style={{ fontSize: 20, color: "gold" }} />
                  <StarIcon style={{ fontSize: 20, color: "gold" }} />
                  <StarIcon style={{ fontSize: 20, color: "gold" }} />
                  <StarIcon style={{ fontSize: 20, color: "gold" }} />
                </p>

                <p
                  id="job"
                  className="text-gray-800 sm:hidden border-b-2 border-b-black w-fit"
                >
                  <StarIcon style={{ fontSize: 10, color: "gold" }} />
                  <StarIcon style={{ fontSize: 10, color: "gold" }} />
                  <StarIcon style={{ fontSize: 10, color: "gold" }} />
                  <StarIcon style={{ fontSize: 10, color: "gold" }} />
                  <StarIcon style={{ fontSize: 10, color: "gold" }} />
                </p>
                <p className="text-sm">NEHA SHARAMA</p>
              </div>
            </div>

            <div className="flex items-center py-4 px-2 sm:p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm h-fit w-fit">
              <img
                alt="mountain"
                className="w-36 sm:w-45 rounded-md border-2 border-gray-300"
                src="/ourstory/rahul.jpg"
              />
              <div id="body" className="flex flex-col ml-5">
                <h4 id="name" className="text-sm font-semibold">
                  “I highly recommend this website to anyone looking to enhance
                  their knowledge.”
                </h4>
                <p
                  id="job"
                  className="text-gray-800 hidden sm:block border-b-2 border-b-black w-fit"
                >
                  <StarIcon style={{ fontSize: 20, color: "gold" }} />
                  <StarIcon style={{ fontSize: 20, color: "gold" }} />
                  <StarIcon style={{ fontSize: 20, color: "gold" }} />
                  <StarIcon style={{ fontSize: 20, color: "gold" }} />
                  <StarIcon style={{ fontSize: 20, color: "gold" }} />
                </p>

                <p
                  id="job"
                  className="text-gray-800 sm:hidden border-b-2 border-b-black w-fit"
                >
                  <StarIcon style={{ fontSize: 10, color: "gold" }} />
                  <StarIcon style={{ fontSize: 10, color: "gold" }} />
                  <StarIcon style={{ fontSize: 10, color: "gold" }} />
                  <StarIcon style={{ fontSize: 10, color: "gold" }} />
                  <StarIcon style={{ fontSize: 10, color: "gold" }} />
                </p>
                <p className="text-sm">RAHUL JHA</p>
              </div>
            </div>

            <div className="flex items-center py-4 px-2 sm:p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm h-fit w-fit">
              <img
                alt="mountain"
                className="w-36 sm:w-45 rounded-md border-2 border-gray-300"
                src="/ourstory/neha.jpg"
              />
              <div id="body" className="flex flex-col ml-2 sm:ml-5">
                <h4 id="name" className="text-sm font-semibold">
                  “I highly recommend this website to anyone looking to enhance
                  their knowledge.”
                </h4>
                <p
                  id="job"
                  className="text-gray-800 hidden sm:block border-b-2 border-b-black w-fit"
                >
                  <StarIcon style={{ fontSize: 20, color: "gold" }} />
                  <StarIcon style={{ fontSize: 20, color: "gold" }} />
                  <StarIcon style={{ fontSize: 20, color: "gold" }} />
                  <StarIcon style={{ fontSize: 20, color: "gold" }} />
                  <StarIcon style={{ fontSize: 20, color: "gold" }} />
                </p>

                <p
                  id="job"
                  className="text-gray-800 sm:hidden border-b-2 border-b-black w-fit"
                >
                  <StarIcon style={{ fontSize: 10, color: "gold" }} />
                  <StarIcon style={{ fontSize: 10, color: "gold" }} />
                  <StarIcon style={{ fontSize: 10, color: "gold" }} />
                  <StarIcon style={{ fontSize: 10, color: "gold" }} />
                  <StarIcon style={{ fontSize: 10, color: "gold" }} />
                </p>
                <p className="text-sm">NEHA SHARAMA</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Ourstory;
