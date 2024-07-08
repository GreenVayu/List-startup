function Contact() {

  const persons = [
    { id: 1, name: 'Person 1', image: '/ourcoaches/abhi.jpg', description: 'Description 1' },
    { id: 2, name: 'Person 2', image: '/ourcoaches/abhi.jpg', description: 'Description 2' },
    { id: 3, name: 'Person 3', image: '/ourcoaches/abhi.jpg', description: 'Description 3' },
    { id: 4, name: 'Person 4', image: '/ourcoaches/abhi.jpg', description: 'Description 4' },
    { id: 5, name: 'Person 5', image: '/ourcoaches/abhi.jpg', description: 'Description 5' },
];


  return (
    <div className="contactsbody">

        <div className='sec1 mt-8 lg:w-[70vw] lg:mx-auto'>
          <div className="bg-[url('/ourcoaches/33.jpg')] bg-cover bg-center lg:bg-cover">
            <div className="bg-black opacity-60 pb-12 ">
            <div className="text-center text-amber-500 text-xl font-semibold font-['Mukta'] leading-[3.75rem] tracking-[0.2rem] pt-8 px-2 lg:text-2xl lg:pt-24 ">OUR COACHES
            </div>
              <div className="text-center text-white text-lg font-normal font-['Orienta'] leading-normal tracking-wide py-0 px-8 lg:text-xl lg:pt-6 lg:px-28 lg:mb-12 " >Meet Our Professional Coaches who will train, help, and guide you step-by-step to launch your Low-Investment Startup in no time.</div>
            </div>
          </div>
        </div>

<div className="sec2">

</div>

    <hr className="border-t-2 border-gray-500 my-4" />


    <div className='sec3 mt-16 lg:w-[70vw] lg:mx-auto lg:flex lg:space-x-20'>

      <img src='/ourcoaches/purpose.jpg' className=" hidden w-[28.125vw] rounded-lg pl-8 mt-8 lg:block " />
    <div className='pt-4'>
    <div className="text-emerald-800 px-4 text-center text-xl font-semibold font-['Mukta'] lg:text-left lg:text-2xl" >Our Purpose </div>
    <div className="text-stone-500 text-base font-normal font-['Orienta'] py-4 px-4 " >
    At LIST Training Academy, we are proud to have a team of experienced and passionate coaches who are dedicated to helping you succeed<br/><br/>Our coaches bring a wealth of knowledge and a genuine passion for teaching. Get to know the experts who will guide you on your entrepreneurial journey.
    </div>

    <div className="mx-auto mt-2 bg-emerald-800 rounded-lg w-fit lg:mx-0" > <button className="text-white text-base font-normal font-['Roboto'] px-4 py-4" >Contact us to know more </button></div>

    </div>
     

    </div>

    <hr className="border-t-2 border-gray-500 my-4 lg:hidden" />

<div className="sec4 mt-16 lg:w-[70vw] lg:mx-auto lg:flex lg:space-x-20">
  <div className=' py-8'>
    <div  className=" text-emerald-800 text-center text-xl font-semibold font-['Mukta'] lg:pt-8">From Founder’s Desk </div>
    <div className="text-stone-500 text-base font-normal font-['Orienta'] pt-4 px-4 lg:pt-8" > I remember the day GreenVayu was born as if it were yesterday. I was sitting at my small kitchen table, filled with a burning desire to start my own company. This longing wasn’t just a dream; it felt like a beacon, guiding me through a sea of uncertainty and fear. </div>

    <div className="mx-auto bg-emerald-800 rounded-lg w-fit mt-4" > <button className="text-white text-base font-normal font-['Roboto'] px-2 py-2" >Read more</button></div>

  </div>

  <img src='/ourcoaches/abhi.jpg' className=" hidden w-[28.125vw] rounded-lg pl-8 mt-8 lg:block " />

</div>

<hr className="border-t-2 border-gray-500 my-4 lg:hidden" />

<div className="sec5 mt-12 mb-8 ">
  <div className="bg-[url('/ourcoaches/image5.jpg')] bg-cover" >
    <div className='bg-black opacity-75 pb-8 h-full '>
    <div className="text-center text-amber-500 text-sm font-semibold font-['Mukta'] tracking-wides py-4 px-2 leading-10">Become a Coach at LIST Training Academy
    </div>
    <div className="text-center text-white text-sm font-normal font-['Orienta'] leading-5 tracking-wide py-2 px-8" >Inspire and Guide the Next Generation of Entrepreneurs.<br/>Are you a seasoned entrepreneur or industry expert with a passion for teaching and mentorship? Join LIST Training Academy as an advisor or coach and help shape the future of aspiring business leaders. Share your expertise, offer invaluable guidance, and make a lasting impact by mentoring the next wave of innovative entrepreneurs.</div>

    <div className="mx-auto bg-amber-500 rounded-lg w-fit mt-4 " > <button className="text-black text-base font-normal font-['Roboto'] px-2 py-2" >Join now</button></div>

    </div>
    </div>
</div>


    </div>
  )
}

export default Contact


{/*
<img className="w-[540px] h-[358px] rounded-lg" src="https://via.placeholder.com/540x358" />
*/}