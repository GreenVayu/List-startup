import { Button } from "@mui/material";

function Contact() {
  return (
    <div className="contactsec">

      <div className="sec1 mt-6">
        <h1 className="text-center text-emerald-800 text-2xl font-semibold leading-7 tracking-tight sm:text-3xl sm:font-bold">Have a question or need assistance?</h1>
        <div className="w-fit mx-auto mt-4">
        <Button variant="outlined" color="secondary">
          Get in touch with us
        </Button></div>
      </div>

    <div className="sec2 bg-emerald-800 rounded-lg shadow mt-6 xsm:flex xsm:justify-around xms:mx-8 sm:mx-12">

      <div className="first flex flex-col justify-center p-3 xsm:w-1/2">
        <h1 className="text-center text-white text-lg font-extrabold leading-snug p-1 xsm:text-xl sm:text-2xl">Start your journey with us </h1>
        <p className="text-center p-2 text-white text-sm font-normal leading-5 tracking-tight xsm:text-lg sm:text-xl sm:my-2">Whether you have questions <br/>about our programs, need <br/>assistance with enrolment,<br/> we’re here to assist you.</p>

        <div className="w-fit mx-auto mb-2">
        <Button variant="contained" color="success">
        Register now
              </Button>
        </div>

      </div>

      <div className="secnd hidden xsm:flex w-1/2 p-8">
      <img src="/img/img24.png" />
        {/* <div className="bg-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem modi et atque incidunt fugiat suscipit nisi odio possimus quibusdam recusandae aut blanditiis, fuga eum. Qui quibusdam facilis beatae ut itaque!</div> */}
      </div>
    </div>

    </div>
  );
}

export default Contact;
