import { Button } from "@mui/material";

function newsletter() {
  return (
    <div className="newslettersec mt-8">
      <div className="text-center text-emerald-800 text-sm font-bold leading-5 tracking-widest px-4 py-2 xsm:text-2xl xsm:w-4/5 xsm:mx-auto lg:w-3/5 xsm:px-0">
        Get the Latest Insights, Tips, and Success Stories Delivered to Your
        Inbox
      </div>
      <div className="text-center text-stone-500 text-sm font-normal leading-normal tracking-wide px-6 py-2 xsm:text-xl xsm:w-4/5 xsm:mx-auto xsm:mt-2">
        Subscribe to our newsletter and be the first to receive exclusive
        insights, expert tips, success stories, and upcoming event
        announcements.
      </div>

      <div className="flex flex-col md:flex-row gap-2 justify-evenly items-center my-4 space-x-4 ">
        {/* <div className="w-5/6 h-10"> */}
          <input
            type="text"
            placeholder="Your Email"
            className="border-2 border-gray-600 rounded-lg px-2 w-full h-10"
          />
        {/* </div> */}
        {/* <div className="w-1/6"> */}
        <Button variant="contained" color="success">
          Subscribe
        </Button>
        {/* </div> */}

      </div>
    </div>
  );
}

export default newsletter;
