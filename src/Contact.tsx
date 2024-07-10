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

      <div className="sec3 mt-6">
        <h1 className="text-emerald-800 text-2xl font-semibold leading-relaxed tracking-wide text-center p-2">
          Contact us
        </h1>
        <p className="text-center text-stone-500 text-sm font-normal leading-5 tracking-wide px-2">
          Reach out to us using any of the methods below, and our dedicated team
          will get back to you promptly.
        </p>

        <div className="flex flex-col md:flex-row w-fit mx-auto">
          <div className="flex p-4">
            <div className="mx-2 h-fit my-auto">
              <div className="w-fit p-2 bg-amber-500 h-fit mx-auto my-auto">
                <FaPhone className="text-2xl md:text-4xl text-white" />
              </div>
            </div>

            <div className="mx-4 flex flex-col h-fit my-auto">
              <h1 className="text-stone-500 text-sm font-normal leading-5 tracking-wide">
                Call Us
              </h1>
              <p className="text-stone-500 text-xs font-normal leading-4 tracking-wide">
                +91 91797 04005
              </p>
            </div>
          </div>

          <div className="flex p-4">
            <div className="mx-2 h-fit my-auto">
              <div className="w-fit p-2 bg-amber-500 h-fit mx-auto my-auto">
                <FaEnvelope className="text-2xl md:text-4xl text-white" />
              </div>
            </div>

            <div className="mx-4 flex flex-col h-fit my-auto">
              <h1 className="text-stone-500 text-sm font-normal leading-5 tracking-wide">
                Email address
              </h1>
              <p className="text-stone-500 text-xs font-normal leading-4 tracking-wide">
                info@listartup.com
              </p>
            </div>
          </div>

          <div className="flex p-4">
            <div className="mx-2 h-fit my-auto">
              <div className="w-fit p-2 bg-amber-500 h-fit mx-auto my-auto">
                <FaMapMarkerAlt className="text-2xl md:text-4xl text-white" />
              </div>
            </div>

            <div className="mx-4 flex flex-col h-fit my-auto">
              <h1 className="text-stone-500 text-sm font-normal leading-5 tracking-wide">
                Reach Us
              </h1>
              <p className="text-stone-500 text-xs font-normal leading-4 tracking-wide">
                F-31 Aakriti Business{" "}
                <span className="lg:hidden">
                  <br />
                </span>
                Centre (ABC),Salaiya,
                <span className="lg:hidden">
                  <br />
                </span>{" "}
                Misrod, Bhopal MP
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <div className="w-full h-full">
            <iframe
              className="w-full h-72"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="sec4 mt-6">
        <h1 className="text-emerald-800 text-xl font-semibold leading-relaxed tracking-wide text-center">
          Meet us Globally
        </h1>
        <p className="text-center text-stone-500 text-sm font-normal leading-6 tracking-wide">
          Connect with our global offices and meet our team in person. We have a
          presence in several major cities worldwide, ready to support you
          wherever you are.
        </p>

        <div className="flex overflow-x-scroll no-scrollbar space-x-4 border-2 my-4 md:hidden mx-4">
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
