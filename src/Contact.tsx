import { Button } from "@mui/material";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <div className="contactsec">

      <div className="sec1 mt-6">
        <h1 className="text-center text-emerald-800 text-2xl font-semibold leading-7 tracking-tight sm:text-3xl sm:font-bold">
          Have a question or need assistance?
        </h1>
        <div className="w-fit mx-auto mt-4">
          <Button variant="outlined" color="secondary">
            Get in touch with us
          </Button>
        </div>
      </div>

      <div className="sec2 bg-emerald-800 rounded-lg shadow mt-6 xsm:flex xsm:justify-around xms:mx-8 sm:mx-12">
        <div className="first flex flex-col justify-center p-3 xsm:w-1/2">
          <h1 className="text-center text-white text-lg font-extrabold leading-snug p-1 xsm:text-xl sm:text-2xl">
            Start your journey with us{" "}
          </h1>
          <p className="text-center p-2 text-white text-sm font-normal leading-5 tracking-tight xsm:text-lg sm:text-xl sm:my-2">
            Whether you have questions <br />
            about our programs, need <br />
            assistance with enrolment,
            <br /> we’re here to assist you.
          </p>

          <div className="w-fit mx-auto mb-2">
            <Button variant="contained" color="success">
              Register now
            </Button>
          </div>
        </div>

        <div className="secnd hidden xsm:flex w-1/2 p-8">
          <img src="/img/img24.png" />
        </div>
      </div>

    <div className="sec3 mt-8">

      <p className="text-emerald-800 text-xl font-semibold tracking-widest text-center">Contact us</p>
      <h1 className="text-center text-stone-500 text-base font-normal leading-normal tracking-wide mt-2">Reach out to us using any of the methods below, and our dedicated team will get  <br className="hidden sm:block"/>back to you promptly.</h1>

      <div className="main mt-4 md:mt-8 grid grid-cols-1 gap-y-6 mdx:grid-cols-3 mdx:gap-x-8 w-fit mx-auto">

        <div className="1st flex">
          <div className="bg-gradient-to-b from-amber-500 to-yellow-600 p-3 w-fit h-fit">
            <FaPhone className="text-3xl text-white"/>
          </div>
          <div className="translate-x-6 mdx:translate-x-2">
            <p className="text-stone-500 text-xl mdx:text-lg font-semibold leading-normal tracking-wide">Call Us</p>
            <h1 className="text-stone-500 text-base mdx:text-sm font-normal leading-normal tracking-wide">+91 91797 04005</h1>
          </div>
        </div>

        <div className="2nd flex">
          <div className="bg-gradient-to-b from-amber-500 to-yellow-600 p-3 w-fit h-fit">
            <FaEnvelope className="text-3xl text-white"/>
          </div>
          <div className="translate-x-6 mdx:translate-x-2">
            <p className="text-stone-500 text-xl mdx:text-lg font-semibold leading-normal tracking-wide">Email address</p>
            <h1 className="text-stone-500 text-base mdx:text-sm font-normal leading-normal tracking-wide">info@listartup.com</h1>
          </div>
        </div>

        <div className="3rd flex">
          <div className="bg-gradient-to-b from-amber-500 to-yellow-600 p-3 w-fit h-fit ">
            <FaMapMarkerAlt className="text-3xl text-white"/>
          </div>
          <div className="translate-x-6 mdx:translate-x-2 -translate-y-2">
            <p className="text-stone-500 text-xl mdx:text-lg font-semibold leading-normal tracking-wide">Reach Us</p>
            <h1 className="text-stone-500 text-base mdx:text-sm font-normal leading-normal tracking-wide">F-31 Aakriti Business Centre (ABC), <br className="hidden xsm:block"/>Salaiya, Misrod, Bhopal MP</h1>
          </div>
        </div>
      </div>
    </div>

      <div className="sec4 mt-6">
        <h1 className="text-emerald-800 text-xl font-semibold leading-relaxed tracking-wide text-center">
          Meet us Globally
        </h1>
        <p className="text-center text-stone-500 text-sm font-normal leading-6 tracking-wide sm:px-8">
          Connect with our global offices and meet our team in person. We have a
          presence in several major cities worldwide,<br className="hidden lg:block"/> ready to support you
          wherever you are.
        </p>

        <div className="flex overflow-x-scroll no-scrollbar space-x-4 my-4 md:hidden mx-4">
          <div className="my-4 w-[200px] bg-white rounded-lg shadow">
            <div className="w-[200px] h-[140px] text-white">
              <img src="/contact/global.png" className="w-full h-full" />
            </div>
            <p className="text-center text-stone-500 text-sm font-normal leading-5 tracking-wide p-3">
              Vadodara The Oakwood Rd C 2 Vasant Vihar, Vadodara 391410
            </p>
          </div>

          <div className="my-4 w-[200px] bg-white rounded-lg shadow">
            <div className="w-[200px] h-[140px] text-white">
              <img src="/contact/global.png" className="w-full h-full" />
            </div>
            <p className="text-center text-stone-500 text-sm font-normal leading-5 tracking-wide p-3">
              Vadodara The Oakwood Rd C 2 Vasant Vihar, Vadodara 391410
            </p>
          </div>
          <div className="my-4 w-[200px] bg-white rounded-lg shadow">
            <div className="w-[200px] h-[140px] text-white">
              <img src="/contact/global.png" className="w-full h-full" />
            </div>
            <p className="text-center text-stone-500 text-sm font-normal leading-5 tracking-wide p-3">
              Vadodara The Oakwood Rd C 2 Vasant Vihar, Vadodara 391410
            </p>
          </div>

          <div className="my-4 w-[200px] bg-white rounded-lg shadow">
            <div className="w-[200px] h-[140px] text-white">
              <img src="/contact/global.png" className="w-full h-full" />
            </div>
            <p className="text-center text-stone-500 text-sm font-normal leading-5 tracking-wide p-3">
              Vadodara The Oakwood Rd C 2 Vasant Vihar, Vadodara 391410
            </p>
          </div>
        </div>

        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8 w-fit mx-auto md:gap-x-20 mt-6">
          <div className="my-4 w-[200px] bg-white rounded-lg shadow">
            <div className="w-[200px] h-[140px] text-white">
              <img src="/contact/global.png" className="w-full h-full" />
            </div>
            <p className="text-center text-stone-500 text-sm font-normal leading-5 tracking-wide p-3">
              Vadodara The Oakwood Rd C 2 Vasant Vihar, Vadodara 391410
            </p>
          </div>

          <div className="my-4 w-[200px] bg-white rounded-lg shadow">
            <div className="w-[200px] h-[140px] text-white">
              <img src="/contact/global.png" className="w-full h-full" />
            </div>
            <p className="text-center text-stone-500 text-sm font-normal leading-5 tracking-wide p-3">
              Vadodara The Oakwood Rd C 2 Vasant Vihar, Vadodara 391410
            </p>
          </div>

          <div className="my-4 w-[200px] bg-white rounded-lg shadow">
            <div className="w-[200px] h-[140px] text-white">
              <img src="/contact/global.png" className="w-full h-full" />
            </div>
            <p className="text-center text-stone-500 text-sm font-normal leading-5 tracking-wide p-3">
              Vadodara The Oakwood Rd C 2 Vasant Vihar, Vadodara 391410
            </p>
          </div>

          <div className="my-4 w-[200px] bg-white rounded-lg shadow">
            <div className="w-[200px] h-[140px] text-white">
              <img src="/contact/global.png" className="w-full h-full" />
            </div>
            <p className="text-center text-stone-500 text-sm font-normal leading-5 tracking-wide p-3">
              Vadodara The Oakwood Rd C 2 Vasant Vihar, Vadodara 391410
            </p>
          </div>
        </div>

        <div className="text-center -mt-4 md:hidden"><span className="text-emerald-800 text-lg font-semibold leading-relaxed tracking-wide ">Scroll to see All</span></div>
      </div>

      <div className="sec5">
        <div className="max-w-screen-lg mx-auto p-3">

          <form className="md:col-span-8 p-2 md:p-12">
          <h1 className="text-emerald-800 text-sm font-bold tracking-widest mb-6 sm:text-xl sm:font-semibold">Contact Our Support Team</h1>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Name
                </label>
                <input
                  className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-4"
                  id="grid-last-name"
                  type="text"
                  placeholder=""
                />
              </div>

              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Email 
                </label>
                <input
                  className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder=""
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Phone
                </label>
                <input
                  className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-4"
                  id="grid-last-name"
                  type="text"
                  placeholder=""
                />
              </div>

              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Subject
                </label>
                <input
                  className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder=""
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Your Message
                </label>
                <textarea className="appearance-none block w-full h-28 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></textarea>
              </div>
            </div>

            <div className="mx-auto w-fit">
              <Button variant="contained" color="success">
                Get a consultation
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
