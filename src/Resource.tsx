import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb,faCalendarMinus,faChevronRight,faFileAlt,faChartLine ,faCheckCircle} from "@fortawesome/free-solid-svg-icons";

function Resource() {

  const newsItems = [
    { title: 'Startup News & Updates', imgSrc: '/ourcoaches/purpose.jpg' },
    { title: 'Business', imgSrc: '/ourcoaches/purpose.jpg' },
    { title: 'Startup', imgSrc: '/ourcoaches/purpose.jpg'  },
    { title: 'Finance', imgSrc: '/ourcoaches/purpose.jpg'  },
    { title: 'Legal', imgSrc: '/ourcoaches/purpose.jpg' },
  ];

  return (
    <div className="container w-full mx-auto">
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
        <Link to="/Blog">
          <Button variant="contained" color="success">
            view All
          </Button></Link>
        </div>
      </div>

      <div className="sec3 mt-6">
        <div className="text-center md:text-start md:ml-14">
        <h1 className="text-emerald-800 text-lg font-semibold tracking-widest p-2 xsm:text-2xl">
          Step - by - Step Guide to Start your Startup
        </h1>
        <p className="text-stone-500 text-base font-normal leading-5 tracking-wide px-2 py-1 xsm:text-xl">
          At LIST, we've crafted a detailed, step-by-step guide to help you
          navigate the process with confidence and clarity.
        </p>
        </div>

        <div className="main mt-8 grid grid-cols-1 gap-y-6 md:grid-cols-5 relative">

          <div className="hidden w-[80%] bg-emerald-800 h-1 absolute translate-y-7 translate-x-20 mx-4 md:block"></div>

          <div className="1st z-10">
             <div className="flex justify-center items-center">
              <div className="bg-gradient-to-b from-amber-500 to-yellow-600 rounded-full p-3 w-fit">
              <FontAwesomeIcon
                  icon={faLightbulb}
                  className="text-white text-4xl"
                />

              </div>
             </div>
             <div className="mt-2">
              <p className="text-stone-500 text-lg font-semibold leading-5 tracking-wide text-center md:text-base">Idea Generation and <br/> Validation</p>
             </div>
             </div>

             <div className="2nd z-10">
             <div className="flex justify-center items-center">
              <div className="bg-gradient-to-b from-amber-500 to-yellow-600 rounded-full p-3 w-fit">
              <FontAwesomeIcon
                  icon={faCalendarMinus}
                  className="text-white text-4xl"
                />

              </div>
             </div>
             <div className="mt-2">
              <p className="text-stone-500 text-lg font-semibold leading-5 tracking-wide text-center md:text-base"> Business Planning</p>
             </div>
             </div>

             <div className="3rd z-10">
             <div className="flex justify-center items-center">
              <div className="bg-gradient-to-b from-amber-500 to-yellow-600 rounded-full p-3 w-fit">
              <FontAwesomeIcon
                  icon={faFileAlt}
                  className="text-white text-4xl"
                />

              </div>
             </div>
             <div className="mt-2">
              <p className="text-stone-500 text-lg font-semibold leading-5 tracking-wide text-center md:text-base">Legal Considerations <br/>and Funding Opportunities</p>
             </div>
             </div>

             <div className="4th z-10">
             <div className="flex justify-center items-center">
              <div className="bg-gradient-to-b from-amber-500 to-yellow-600 rounded-full p-3 w-fit">
              <FontAwesomeIcon
                  icon={faChartLine }
                  className="text-white text-4xl"
                />

              </div>
             </div>
             <div className="mt-2">
              <p className="text-stone-500 text-lg font-semibold leading-5 tracking-wide text-center md:text-base">Setting Up Your <br/> Business</p>
             </div>
             </div>

             <div className="5th z-10">
             <div className="flex justify-center items-center">
              <div className="bg-gradient-to-b from-amber-500 to-yellow-600 rounded-full p-3 w-fit">
              <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-white text-4xl"
                />

              </div>
             </div>
             <div className="mt-2">
              <p className="text-stone-500 text-lg font-semibold leading-5 tracking-wide text-center md:text-base">Marketing & Sublime <br/> Customer Support</p>
             </div>
             </div>

        </div>

      </div>

      <div className="sec4 mt-20 mx-auto w-full">
        <div className="bg-[url('/resources/Colorpalette.png')] bg-cover p-4 min-w-full">
          <div className="p-4">
        <h1 className="text-amber-500 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold underline tracking-widest text-center z-10">Upcoming events</h1>
        </div> 

        <div className="flex overflow-x-scroll no-scrollbar space-x-4 my-4 py-5 mx-4 sm:hidden">

        <div className="min-w-[250px] bg-white p-6 rounded-md h-fit">
                <div className="bg-emerald-800 w-14 h-14 mx-auto flex justify-center items-center rounded-full -translate-y-3/4">
                <FontAwesomeIcon
                  icon={faCalendarMinus}
                  className="text-white text-xl md:text-3xl"
                />
                </div>

                <div className="flex space-x-4 -mt-5">
                  <h1 className="text-stone-500 text-sm font-normal leading-5 text-center tracking-tight border border-stone-500 p-2 rounded-lg">07 Aug, 2024</h1>
                  <h1 className="text-stone-500 text-sm font-normal leading-5 text-center tracking-tight border border-stone-500 p-2 rounded-lg">10:00am IST</h1>
                </div>

                <div className="rounded-lg border border-stone-500 border-opacity-20 p-2 mt-4">
                  <h1 className="text-stone-500 text-sm font-normal underline leading-5 tracking-tight">Topic</h1>
                  <p className="text-black text-xs font-semibold leading-5 tracking-wide mt-2">How to use Digital Tools?</p>

                  <hr className="mt-4"/>
                  <p className="text-stone-500 text-sm font-normal leading-5 tracking-wide text-right mt-3">-Boot Camp by Harshith</p>        
                </div>

                <div className="text-center mt-4">
                <Button variant="outlined" color="secondary">
                know more
              </Button>
                </div>
            </div>     

            <div className="min-w-[250px] bg-white p-6 rounded-md h-fit">
                <div className="bg-emerald-800 w-14 h-14 mx-auto flex justify-center items-center rounded-full -translate-y-3/4">
                <FontAwesomeIcon
                  icon={faCalendarMinus}
                  className="text-white text-xl md:text-3xl"
                />
                </div>

                <div className="flex space-x-4 -mt-5">
                  <h1 className="text-stone-500 text-sm font-normal leading-5 text-center tracking-tight border border-stone-500 p-2 rounded-lg">07 Aug, 2024</h1>
                  <h1 className="text-stone-500 text-sm font-normal leading-5 text-center tracking-tight border border-stone-500 p-2 rounded-lg">10:00am IST</h1>
                </div>

                <div className="rounded-lg border border-stone-500 border-opacity-20 p-2 mt-4">
                  <h1 className="text-stone-500 text-sm font-normal underline leading-5 tracking-tight">Topic</h1>
                  <p className="text-black text-xs font-semibold leading-5 tracking-wide mt-2">How to use Digital Tools?</p>

                  <hr className="mt-4"/>
                  <p className="text-stone-500 text-sm font-normal leading-5 tracking-wide text-right mt-3">-Boot Camp by Harshith</p>        
                </div>

                <div className="text-center mt-4">
                <Button variant="outlined" color="secondary">
                know more
              </Button>
                </div>
            </div>    


            <div className="min-w-[250px] bg-white p-6 rounded-md h-fit">
                <div className="bg-emerald-800 w-14 h-14 mx-auto flex justify-center items-center rounded-full -translate-y-3/4">
                <FontAwesomeIcon
                  icon={faCalendarMinus}
                  className="text-white text-xl md:text-3xl"
                />
                </div>

                <div className="flex space-x-4 -mt-5">
                  <h1 className="text-stone-500 text-sm font-normal leading-5 text-center tracking-tight border border-stone-500 p-2 rounded-lg">07 Aug, 2024</h1>
                  <h1 className="text-stone-500 text-sm font-normal leading-5 text-center tracking-tight border border-stone-500 p-2 rounded-lg">10:00am IST</h1>
                </div>

                <div className="rounded-lg border border-stone-500 border-opacity-20 p-2 mt-4">
                  <h1 className="text-stone-500 text-sm font-normal underline leading-5 tracking-tight">Topic</h1>
                  <p className="text-black text-xs font-semibold leading-5 tracking-wide mt-2">How to use Digital Tools?</p>

                  <hr className="mt-4"/>
                  <p className="text-stone-500 text-sm font-normal leading-5 tracking-wide text-right mt-3">-Boot Camp by Harshith</p>        
                </div>

                <div className="text-center mt-4">
                <Button variant="outlined" color="secondary">
                know more
              </Button>
                </div>
            </div>    


            <div className="min-w-[250px] bg-white p-6 rounded-md h-fit">
                <div className="bg-emerald-800 w-14 h-14 mx-auto flex justify-center items-center rounded-full -translate-y-3/4">
                <FontAwesomeIcon
                  icon={faCalendarMinus}
                  className="text-white text-xl md:text-3xl"
                />
                </div>

                <div className="flex space-x-4 -mt-5">
                  <h1 className="text-stone-500 text-sm font-normal leading-5 text-center tracking-tight border border-stone-500 p-2 rounded-lg">07 Aug, 2024</h1>
                  <h1 className="text-stone-500 text-sm font-normal leading-5 text-center tracking-tight border border-stone-500 p-2 rounded-lg">10:00am IST</h1>
                </div>

                <div className="rounded-lg border border-stone-500 border-opacity-20 p-2 mt-4">
                  <h1 className="text-stone-500 text-sm font-normal underline leading-5 tracking-tight">Topic</h1>
                  <p className="text-black text-xs font-semibold leading-5 tracking-wide mt-2">How to use Digital Tools?</p>

                  <hr className="mt-4"/>
                  <p className="text-stone-500 text-sm font-normal leading-5 tracking-wide text-right mt-3">-Boot Camp by Harshith</p>        
                </div>

                <div className="text-center mt-4">
                <Button variant="outlined" color="secondary">
                know more
              </Button>
                </div>
            </div>                 

        </div>
        
        <div className="text-center mb-4 sm:hidden"><span className="text-purple-700 text-xl ">scroll to see more</span></div>

        <div className="py-4 hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 sm:gap-12 my-6 mx-auto w-fit">

        <div className="w-fit bg-white p-6 rounded-md ">
                <div className="bg-emerald-800 w-14 h-14 mx-auto flex justify-center items-center rounded-full -translate-y-3/4">
                <FontAwesomeIcon
                  icon={faCalendarMinus}
                  className="text-white text-xl md:text-3xl"
                />
                </div>

                <div className="flex space-x-4 -mt-5">
                  <h1 className="text-stone-500 text-sm font-normal leading-5 text-center tracking-tight border border-stone-500 p-2 rounded-lg">07 Aug, 2024</h1>
                  <h1 className="text-stone-500 text-sm font-normal leading-5 text-center tracking-tight border border-stone-500 p-2 rounded-lg">10:00am IST</h1>
                </div>

                <div className="rounded-lg border border-stone-500 border-opacity-20 p-2 mt-4">
                  <h1 className="text-stone-500 text-sm font-normal underline leading-5 tracking-tight">Topic</h1>
                  <p className="text-black text-xs font-semibold leading-5 tracking-wide mt-2">How to use Digital Tools?</p>

                  <hr className="mt-4"/>
                  <p className="text-stone-500 text-sm font-normal leading-5 tracking-wide text-right mt-3">-Boot Camp by Harshith</p>        
                </div>

                <div className="text-center mt-4">
                <Button variant="outlined" color="secondary">
                know more
              </Button>
                </div>
            </div>

            <div className="w-fit bg-white p-6 rounded-md ">
                <div className="bg-emerald-800 w-14 h-14 mx-auto flex justify-center items-center rounded-full -translate-y-3/4">
                <FontAwesomeIcon
                  icon={faCalendarMinus}
                  className="text-white text-xl md:text-3xl"
                />
                </div>

                <div className="flex space-x-4 -mt-5">
                  <h1 className="text-stone-500 text-sm font-normal leading-5 text-center tracking-tight border border-stone-500 p-2 rounded-lg">07 Aug, 2024</h1>
                  <h1 className="text-stone-500 text-sm font-normal leading-5 text-center tracking-tight border border-stone-500 p-2 rounded-lg">10:00am IST</h1>
                </div>

                <div className="rounded-lg border border-stone-500 border-opacity-20 p-2 mt-4">
                  <h1 className="text-stone-500 text-sm font-normal underline leading-5 tracking-tight">Topic</h1>
                  <p className="text-black text-xs font-semibold leading-5 tracking-wide mt-2">How to use Digital Tools?</p>

                  <hr className="mt-4"/>
                  <p className="text-stone-500 text-sm font-normal leading-5 tracking-wide text-right mt-3">-Boot Camp by Harshith</p>        
                </div>

                <div className="text-center mt-4">
                <Button variant="outlined" color="secondary">
                know more
              </Button>
                </div>
            </div>

            <div className="w-fit bg-white p-6 rounded-md ">
                <div className="bg-emerald-800 w-14 h-14 mx-auto flex justify-center items-center rounded-full -translate-y-3/4">
                <FontAwesomeIcon
                  icon={faCalendarMinus}
                  className="text-white text-xl md:text-3xl"
                />
                </div>

                <div className="flex space-x-4 -mt-5">
                  <h1 className="text-stone-500 text-sm font-normal leading-5 text-center tracking-tight border border-stone-500 p-2 rounded-lg">07 Aug, 2024</h1>
                  <h1 className="text-stone-500 text-sm font-normal leading-5 text-center tracking-tight border border-stone-500 p-2 rounded-lg">10:00am IST</h1>
                </div>

                <div className="rounded-lg border border-stone-500 border-opacity-20 p-2 mt-4">
                  <h1 className="text-stone-500 text-sm font-normal underline leading-5 tracking-tight">Topic</h1>
                  <p className="text-black text-xs font-semibold leading-5 tracking-wide mt-2">How to use Digital Tools?</p>

                  <hr className="mt-4"/>
                  <p className="text-stone-500 text-sm font-normal leading-5 tracking-wide text-right mt-3">-Boot Camp by Harshith</p>        
                </div>

                <div className="text-center mt-4">
                <Button variant="outlined" color="secondary">
                know more
              </Button>
                </div>
            </div>

            <div className="w-fit bg-white p-6 rounded-md ">
                <div className="bg-emerald-800 w-14 h-14 mx-auto flex justify-center items-center rounded-full -translate-y-3/4">
                <FontAwesomeIcon
                  icon={faCalendarMinus}
                  className="text-white text-xl md:text-3xl"
                />
                </div>

                <div className="flex space-x-4 -mt-5">
                  <h1 className="text-stone-500 text-sm font-normal leading-5 text-center tracking-tight border border-stone-500 p-2 rounded-lg">07 Aug, 2024</h1>
                  <h1 className="text-stone-500 text-sm font-normal leading-5 text-center tracking-tight border border-stone-500 p-2 rounded-lg">10:00am IST</h1>
                </div>

                <div className="rounded-lg border border-stone-500 border-opacity-20 p-2 mt-4">
                  <h1 className="text-stone-500 text-sm font-normal underline leading-5 tracking-tight">Topic</h1>
                  <p className="text-black text-xs font-semibold leading-5 tracking-wide mt-2">How to use Digital Tools?</p>

                  <hr className="mt-4"/>
                  <p className="text-stone-500 text-sm font-normal leading-5 tracking-wide text-right mt-3">-Boot Camp by Harshith</p>        
                </div>

                <div className="text-center mt-4">
                <Button variant="outlined" color="secondary">
                know more
              </Button>
                </div>
            </div>

        </div>
      
      </div>
      </div>

      <div className="sec5 mt-12 min-w-full">

      <div className="max-w-7xl mx-auto p-4">

      <div className="text-center sm:text-start sm:ml-4">
        <h1 className="text-emerald-800 text-2xl sm:text-3xl font-semibold tracking-widest">Latest news and updates</h1>
        <p className="text-stone-500 text-lg font-normal sm:text-2xl leading-normal tracking-wide mt-2">Stay Updated With the Latest News & Articles!</p>
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="relative group row-span-2">
          <img src={newsItems[0].imgSrc} alt={newsItems[0].title} className="w-full h-64 sm:h-full object-cover rounded-lg" />

          <div className="bg-black w-full p-4 absolute bottom-0 opacity-70 flex">
            <p className="text-white text-sm sm:text-xl">{newsItems[0].title}</p>
            <div className="bg-white rounded-full absolute right-4 bottom-2 z-10"><FontAwesomeIcon
                  icon={faChevronRight}
                  className="text-black text-xl m-2"
                /></div>

            </div>

        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-fit sm:mt-4">
          {newsItems.slice(1).map((item, index) => (
            <div key={index} className="relative group">
              <img src={item.imgSrc} alt={item.title} className="w-full h-64 object-cover rounded-lg" />

              <div className="bg-black w-full p-4 absolute bottom-0 opacity-70 flex">
            <p className="text-white text-xl">{item.title}</p>
            <div className="bg-white rounded-full absolute right-4 bottom-2 z-10"><FontAwesomeIcon
                  icon={faChevronRight}
                  className="text-black text-xl m-2"
                /></div>

            </div>

            </div>
          ))}
        </div>
      </div>
    </div>

      </div>
    
    </div>
  );
}

export default Resource;


