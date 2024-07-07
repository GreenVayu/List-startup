import React from 'react'

function newsletter() {
  return (
    <div className='newslettersec mt-8' >
    <div className="text-center text-emerald-800 text-sm font-bold font-['Palanquin Dark'] leading-5 tracking-widest px-4 py-2 xsm:text-2xl xsm:w-4/5 xsm:mx-auto lg:w-3/5 xsm:px-0" >Get the Latest Insights, Tips, and Success Stories Delivered to Your Inbox</div>
    <div className="text-center text-stone-500 text-sm font-normal font-['Orienta'] leading-normal tracking-wide px-6 py-2 xsm:text-xl xsm:w-4/5 xsm:mx-auto xsm:mt-2" >Subscribe to our newsletter and be the first to receive exclusive insights, expert tips, success stories, and upcoming event announcements.</div>

    <div  className='flex my-4 space-x-4 mx-auto w-fit xsm:mt-4'>
        <div className="w-[48.073vw] "><input type="text" placeholder='Your Email' className="border-2 border-gray-600 rounded-lg px-2 w-full h-8 " /></div>
        <div className=" bg-emerald-800 rounded-lg w-fit" > <button className="text-white text-base font-normal font-['Roboto'] px-2 py-2 h-8 flex justify-center items-center" >Subscribe</button></div>
    </div>


    </div>
  )
}


export default newsletter



