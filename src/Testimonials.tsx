const testimonials = [
  {
    name: "Yashas",
    text: "List: More than courses, it's a startup support system",
    image: "/img/yashas.png",
  },
  {
    name: "Neha sharma",
    text: "Zero to bakery owner. List made it possible!",
    image: "/img/neha.png",
  },
  {
    name: "Yashas",
    text: "List: More than courses, it's a startup support system",
    image: "/img/yashas.png",
  },
  {
    name: "Neha sharma",
    text: "Zero to bakery owner. List made it possible!",
    image: "/img/neha.png",
  },
  {
    name: "Yashas",
    text: "List: More than courses, it's a startup support system",
    image: "/img/yashas.png",
  },
  {
    name: "Neha sharma",
    text: "Zero to bakery owner. List made it possible!",
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

      <div className="text-center mt-6 md:hidden"><p className="text-emerald-800 text-lg underline">Scroll to see All</p></div>

      <div className="">
      <div className="hidden md:block">
      <div className="md:grid md:grid-cols-2 gap-x-16 gap-y-6 lg:grid-cols-3 lg:gap-16">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex border rounded-lg shadow-lg p-6 bg-white w-[320px] lg:w-[290px]"
          >
            <div className="flex-shrink-0 flex items-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="h-24 w-24 rounded-full object-cover"
              />
            </div>
            <div className="ml-4 flex flex-col justify-center">
              <h2 className="text-stone-500 text-base font-normal leading-normal tracking-wide">{testimonial.name}</h2>
              <p className="text-stone-500 text-[10px] font-normal leading-normal tracking-wide">{testimonial.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
  );
};

export default Testimonials;
