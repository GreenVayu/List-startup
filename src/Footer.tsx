import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Button } from "@mui/material";

const Footer = () => {
  return (
    <footer className='mt-12'>
      <div className="bg-emerald-800 p-6 md:flex md:relative md:pb-12">

        <div className='md:w-1/3 md:pt-6'>
          <div className="bg-zinc-300 w-fit mx-auto md:mx-4" >
            <img
              src="/ourstory/logoLISTv4.png"
              alt="Logo"
              className="mb-4 w-24"
            />
          </div>
          <p className="text-white text-sm font-normal tracking-tight px-8 mx-auto sm:text-xl sm:px-16 md:mx-0 md:pl-4 md:text-sm ">
            Unlock the code of enterpreneurship and develop a winning mindset
          </p>
        </div>

        <div className='sm:flex sm:mt-4 sm:justify-between items-center sm:space-x-4 sm:mx-28 md:w-1/3 md:ml-4 md:px-0 md:mt-0'>
          <ul className="mt-4 sm:w-1/3 md:w-fit w-fit mx-auto space-y-1 ">
            <li className="text-white text-lg font-normal leading-normal tracking-wide md:text-sm lg:text-lg">
              Home
            </li>
            <li className="text-white text-lg font-normal leading-normal tracking-wide md:text-sm lg:text-lg w-fit
            ">
              Our story
            </li>
            <li className="text-white text-lg font-normal leading-normal tracking-wide md:text-sm lg:text-lg">
              Our coaches
            </li>
            <li className="text-white text-lg font-normal leading-normal tracking-wide md:text-sm lg:text-lg">
              Our team
            </li>
            <li className="text-white text-lg font-normal leading-normal tracking-wide sm:hidden md:block lg:hidden md:text-sm lg:text-lg">
              Resources
            </li>
            <li className="text-white text-lg font-normal leading-normal tracking-wide sm:hidden md:block lg:hidden md:text-sm ">
              Blog
            </li>
            <li className="text-white text-lg font-normal leading-normal tracking-wide sm:hidden md:block lg:hidden md:text-sm">
              FAQs
            </li>
          </ul>

          <ul className=" hidden sm:block sm:w-1/3 sm:mx-auto md:hidden lg:block">
            <li className="text-white text-lg font-normal leading-normal tracking-wide md:text-sm lg:text-lg">
              Resources
            </li>
            <li className="text-white text-lg font-normal leading-normal tracking-wide md:text-sm lg:text-lg">
              Blog
            </li>
            <li className="text-white text-lg font-normal leading-normal tracking-wide md:text-sm lg:text-lg">
              FAQs
            </li>
            <li className="text-white text-lg font-normal leading-normal tracking-wide md:text-sm lg:text-lg">
              Contact
            </li>
          </ul>
        </div>


        <div className="flex flex-col items-center mt-6 md:w-1/3 md:mr-8">
          <h3 className="text-white text-2xl font-normal tracking-wide mb-2 w-fit mx-auto">
            Contact Us
          </h3>
          <form className="w-full max-w-xs flex flex-col gap-2">
            <input type="text" placeholder="Email" className="p-2 rounded-md sm:full " />
            <textarea
              placeholder="Message"
              className="p-2 rounded-md h-24 "
            ></textarea>
            <Button variant="contained" color="success">
              Submit
            </Button>{" "}
          </form>
        </div>

        <div className="col-span-1 flex flex-col items-center mt-4 md:absolute md:bottom-[10px] md:left-[40px] ">
          <h3 className="text-white text-2xl font-normal tracking-wide mt-4">Follow Us</h3>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:underline">
              <InstagramIcon style={{ fontSize: 30,color:'#E4405F' }} />
            </a>
            <a href="#" className="hover:underline">
              <LinkedInIcon style={{ fontSize: 30,color:'#0A66C2 '  }} />
            </a>
            <a href="#" className="hover:underline">
              <TwitterIcon style={{ fontSize: 30 ,color:'#00acee' }} />
            </a>
          </div>
        </div>


        

      </div>
      <div className=" bg-zinc-300 min-h-8 py-2 px-4">
        <p className='text-center text-stone-500 text-base sm:text-sm font-normal tracking-wide' >LiStartup @ All rights reserved Copyrights 2024</p>
      </div>
    </footer>
  );
};

export default Footer;

{
  /* <div className="w-[1440px] h-[448px] relative">
  <div className="w-[1440px] h-[448px] left-0 top-0 absolute">
    <div className="w-[1440px] h-[448px] left-0 top-0 absolute bg-emerald-800" />
    <div className="w-[378px] h-[114px] left-[400px] top-[101px] absolute">
      <div className="w-[131px] h-[114px] left-0 top-0 absolute">
        <div className="w-[53.84px] left-0 top-0 absolute text-white text-base font-normal font-['Orienta'] tracking-wide">Home</div>
        <div className="w-[98px] left-0 top-[32px] absolute text-white text-base font-normal font-['Orienta'] tracking-wide">Our story</div>
        <div className="w-[131px] left-0 top-[71px] absolute text-white text-base font-normal font-['Orienta'] leading-normal tracking-wide">Our coaches</div>
        <div className="w-[119px] left-0 top-[103px] absolute text-white text-base font-normal font-['Orienta'] leading-normal tracking-wide">Our team</div>
      </div>
      <div className="w-[81px] h-[43px] left-[297px] top-[7px] absolute">
        <div className="w-[43.87px] left-0 top-0 absolute text-white text-base font-normal font-['Orienta'] leading-normal tracking-wide">FAQs</div>
        <div className="w-[81px] left-0 top-[32px] absolute text-white text-base font-normal font-['Orienta'] leading-normal tracking-wide">Contact</div>
      </div>
      <div className="w-[98px] h-[75px] left-[165px] top-[7px] absolute">
        <div className="w-[88px] left-0 top-0 absolute text-white text-base font-normal font-['Orienta'] leading-normal tracking-wide">Courses</div>
        <div className="w-[98px] left-0 top-[32px] absolute text-white text-base font-normal font-['Orienta'] leading-normal tracking-wide">Resources</div>
        <div className="w-[98px] left-0 top-[64px] absolute text-white text-base font-normal font-['Orienta'] leading-normal tracking-wide">Blog</div>
      </div>
    </div>
  </div>
  <div className="w-[374px] h-[258px] left-[924px] top-[101px] absolute">
    <div className="left-0 top-0 absolute text-white text-lg font-normal font-['Orienta'] tracking-wide">Contact us</div>
    <div className="w-[374px] h-[43px] left-0 top-[36px] absolute bg-zinc-300 rounded-lg" />
    <div className="w-[374px] h-[100px] left-0 top-[96px] absolute bg-zinc-300 rounded-lg" />
    <div className="w-[110px] h-[35px] px-7 py-1 left-0 top-[223px] absolute bg-white rounded-lg justify-center items-center gap-4 inline-flex">
      <div className="text-emerald-800 text-base font-semibold font-['Mukta'] tracking-wide">Submit</div>
    </div>
  </div>
  <div className="w-[1440px] h-[37px] left-0 top-[411px] absolute bg-zinc-300" />
  <div className="left-[546px] top-[421px] absolute text-stone-500 text-sm font-normal font-['Orienta'] tracking-wide">LiStartup @ All rights reserved Copyrights 2024</div>
  <div className="w-[161px] h-[88px] left-[136px] top-[271px] absolute">
    <div className="left-0 top-0 absolute text-white text-lg font-normal font-['Orienta'] tracking-wide">Follow us</div>
    <div className="w-[161px] h-[46px] left-0 top-[42px] absolute">
      <div className="w-[46px] h-[46px] left-0 top-0 absolute bg-zinc-300 rounded-full" />
      <div className="w-[46px] h-[46px] left-[59px] top-0 absolute bg-zinc-300 rounded-full" />
      <div className="w-[46px] h-[46px] left-[115px] top-0 absolute bg-zinc-300 rounded-full" />
      <img className="w-[30px] h-[30px] left-[7px] top-[8px] absolute" src="https://via.placeholder.com/30x30" />
      <img className="w-[34px] h-[34px] left-[64px] top-[6px] absolute" src="https://via.placeholder.com/34x34" />
      <img className="w-[25px] h-[25px] left-[125px] top-[12px] absolute" src="https://via.placeholder.com/25x25" />
    </div>
  </div>
  <div className="w-9 h-9 left-[1407.25px] top-[353.26px] absolute origin-top-left rotate-[90.82deg] bg-zinc-300 rounded-full" />
  <img className="w-[23px] h-[23px] left-[1400px] top-[359px] absolute origin-top-left rotate-90" src="https://via.placeholder.com/23x23" />
  <div className="w-[163px] h-[77px] left-[136px] top-[101px] absolute">
    <div className="w-[76px] h-[43px] left-[7px] top-[3px] absolute bg-zinc-300" />
    <div className="w-[163px] h-[77px] left-0 top-0 absolute">
      <div className="w-[156px] left-[7px] top-[57px] absolute text-white text-[8px] font-normal font-['Orienta'] tracking-tight">Unlock the code of enterpreneurship and develop a winning mindset</div>
      <img className="w-[90px] h-[50px] left-0 top-0 absolute" src="https://via.placeholder.com/90x50" />
    </div>
  </div>
</div> */
}
