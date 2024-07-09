const testimonials = [
  {
    name: "Neha Sharma1",
    text: "I highly recommend this website to anyone looking to enhance their knowledge.",
    image: "/img/neha1.png",
  },
  {
    name: "Neha Sharma2",
    text: "I highly recommend this website to anyone looking to enhance their knowledge.",
    image: "/img/neha.png",
  },
  {
    name: "Neha Sharma3",
    text: "I highly recommend this website to anyone looking to enhance their knowledge.",
    image: "/img/neha.png",
  },
  {
    name: "Neha Sharma4",
    text: "I highly recommend this website to anyone looking to enhance their knowledge.",
    image: "/img/neha.png",
  },
  {
    name: "Neha Sharma5",
    text: "I highly recommend this website to anyone looking to enhance their knowledge.",
    image: "/img/neha.png",
  },
  {
    name: "Neha Sharma6",
    text: "I highly recommend this website to anyone looking to enhance their knowledge.",
    image: "/img/neha.png",
  },
];

const Testimonials = () => {
  return (
    <div className="py-8 bg-white">
      <h2 className="text-emerald-800 text-3xl font-semibold leading-relaxed tracking-wide text-center mb-8">
        Testimonials
      </h2>

      <div className="md:hidden flex overflow-x-scroll no-scrollbar space-x-6 px-4 ">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex bg-white p-6 shadow-lg min-w-[350px] rounded"
          >
            <div className="flex-shrink-0 flex items-center">
              <img
                src={testimonial.image}
                alt="Neha Sharma1"
                className="h-24 w-24 rounded-full object-cover"
              />
            </div>
            <div className="ml-4 flex flex-col justify-center">
              <p className="text-stone-500 text-sm sm:text-lg font-normal leading-5 tracking-tight mb-4 text-center">
                {testimonial.text}
              </p>
              <h2 className="text-zinc-700 text-lg font-semibold uppercase leading-6 text-center">
                {testimonial.name}
              </h2>
            </div>
          </div>
        ))}
      </div>

      <div className="hidden md:block">

      <div className="md:grid md:grid-cols-2 col-span-4 lg:grid-cols-3 gap-12 lg:gap-16 justify-center">

      <div className="flex border rounded-lg shadow-lg p-6 bg-white w-[350px]">
          <div className="flex-shrink-0 flex items-center">
            <img
              src="/img/yashas.png"
              alt="Neha Sharma1"
              className="h-24 w-24 rounded-full object-cover"
            />
          </div>
          <div className="ml-8 flex flex-col justify-center">
            <h2 className="text-stone-500 text-base font-normal leading-normal tracking-wide">Yashas</h2>
            <p className="text-stone-500 text-[10px] font-normal leading-normal tracking-wide">List: More than courses, it's a startup support system</p>
          </div>
        </div>

        <div className="flex border rounded-lg shadow-lg p-6 bg-white w-[350px]">
          <div className="flex-shrink-0 flex items-center">
            <img
              src="/img/neha.png"
              alt="Neha Sharma1"
              className="h-24 w-24 rounded-full object-cover"
            />
          </div>
          <div className="ml-4 flex flex-col justify-center">
            <h2 className="text-stone-500 text-base font-normal leading-normal tracking-wide">Neha sharma</h2>
            <p className="text-stone-500 text-[10px] font-normal leading-normal tracking-wide">Zero to bakery owner. List made it possible!</p>
          </div>
        </div>

        <div className="flex border rounded-lg shadow-lg p-6 bg-white w-[350px]">
          <div className="flex-shrink-0 flex items-center">
            <img
              src="/img/yashas.png"
              alt="Neha Sharma1"
              className="h-24 w-24 rounded-full object-cover"
            />
          </div>
          <div className="ml-8 flex flex-col justify-center">
            <h2 className="text-stone-500 text-base font-normal leading-normal tracking-wide">Yashas</h2>
            <p className="text-stone-500 text-[10px] font-normal leading-normal tracking-wide">List: More than courses, it's a startup support system</p>
          </div>
        </div>

        <div className="flex border rounded-lg shadow-lg p-6 bg-white w-[350px]">
          <div className="flex-shrink-0 flex items-center">
            <img
              src="/img/neha.png"
              alt="Neha Sharma1"
              className="h-24 w-24 rounded-full object-cover"
            />
          </div>
          <div className="ml-4 flex flex-col justify-center">
            <h2 className="text-stone-500 text-base font-normal leading-normal tracking-wide">Neha sharma</h2>
            <p className="text-stone-500 text-[10px] font-normal leading-normal tracking-wide">Zero to bakery owner. List made it possible!</p>
          </div>
        </div>

        <div className="flex border rounded-lg shadow-lg p-6 bg-white w-[350px]">
          <div className="flex-shrink-0 flex items-center">
            <img
              src="/img/yashas.png"
              alt="Neha Sharma1"
              className="h-24 w-24 rounded-full object-cover"
            />
          </div>
          <div className="ml-8 flex flex-col justify-center">
            <h2 className="text-stone-500 text-base font-normal leading-normal tracking-wide">Yashas</h2>
            <p className="text-stone-500 text-[10px] font-normal leading-normal tracking-wide">List: More than courses, it's a startup support system</p>
          </div>
        </div>

        <div className="flex border rounded-lg shadow-lg p-6 bg-white w-[350px]">
          <div className="flex-shrink-0 flex items-center">
            <img
              src="/img/neha.png"
              alt="Neha Sharma1"
              className="h-24 w-24 rounded-full object-cover"
            />
          </div>
          <div className="ml-4 flex flex-col justify-center">
            <h2 className="text-stone-500 text-base font-normal leading-normal tracking-wide">Neha sharma</h2>
            <p className="text-stone-500 text-[10px] font-normal leading-normal tracking-wide">Zero to bakery owner. List made it possible!</p>
          </div>
        </div>

        <div className="flex border rounded-lg shadow-lg p-6 bg-white w-[350px]">
          <div className="flex-shrink-0 flex items-center">
            <img
              src="/img/yashas.png"
              alt="Neha Sharma1"
              className="h-24 w-24 rounded-full object-cover"
            />
          </div>
          <div className="ml-8 flex flex-col justify-center">
            <h2 className="text-stone-500 text-base font-normal leading-normal tracking-wide">Yashas</h2>
            <p className="text-stone-500 text-[10px] font-normal leading-normal tracking-wide">List: More than courses, it's a startup support system</p>
          </div>
        </div>

        <div className="flex border rounded-lg shadow-lg p-6 bg-white w-[350px]">
          <div className="flex-shrink-0 flex items-center">
            <img
              src="/img/neha.png"
              alt="Neha Sharma1"
              className="h-24 w-24 rounded-full object-cover"
            />
          </div>
          <div className="ml-4 flex flex-col justify-center">
            <h2 className="text-stone-500 text-base font-normal leading-normal tracking-wide">Neha sharma</h2>
            <p className="text-stone-500 text-[10px] font-normal leading-normal tracking-wide">Zero to bakery owner. List made it possible!</p>
          </div>
        </div>

        <div className="hidden lg:flex border rounded-lg shadow-lg p-6 bg-white w-[350px]">
          <div className="flex-shrink-0 flex items-center">
            <img
              src="/img/neha.png"
              alt="Neha Sharma1"
              className="h-24 w-24 rounded-full object-cover"
            />
          </div>
          <div className="ml-4 flex flex-col justify-center">
            <h2 className="text-stone-500 text-base font-normal leading-normal tracking-wide">Neha sharma</h2>
            <p className="text-stone-500 text-[10px] font-normal leading-normal tracking-wide">Zero to bakery owner. List made it possible!</p>
          </div>
        </div>

        </div>

      </div>

    </div>
  );
};

export default Testimonials;
