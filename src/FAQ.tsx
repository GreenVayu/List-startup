import { useState } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import data from "./data.json";

interface Question {
  question: string;
  answer: string;
}

interface Category {
  category: string;
  questions: Question[];
}

const Accordion = () => {
  const [faqData] = useState<Category[]>(data.categories);

  return (
    <div className="FAQcont">
      <div className="sec1 mt-6">
        <div className="bg-gradient-to-r from-emerald-800 to-zinc-300 p-5 md:p-8 md:px-12">
          <h1 className="text-white text-2xl md:text-3xl lg:text-5xl font-bold tracking-wide">
            FAQs
          </h1>
          <p className="text-white text-base lg:text-lg font-normal leading-7 tracking-wide py-2">
            These are some of the most important queries that we have answered
            to help you get started on your entrepreneurial journey with LIST.
          </p>
        </div>
      </div>

      <div className="sec2 flex flex-col gap-2 sm:flex-row md:gap-1 justify-evenly items-center my-4 sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto mt-8">
        <input
          type="text"
          placeholder="Search for Question"
          className="border-2 border-gray-600 rounded-lg px-2 w-full h-10"
        />
        <Button variant="contained" color="success">
          Search
        </Button>
      </div>

      <div className="sec3 relative z-20 overflow-hidden bg-white mt-3">
        <div className="container mx-auto">
          {faqData.map((category, index) => (
            <div
              key={index}
              className={`mt-4 md:mt-8 p-4 ${
                category.category === "Plans & Pricing "
                  ? "bg-[url('/team/Cp1.png')] bg-cover bg-center"
                  : "bg-white"
              }`}
            >
              <h2 className="text-emerald-800 text-base sm:text-2xl font-semibold tracking-widest leading-7 mb-4 md:ml-7 md:font-bold">
                {category.category}{" "}
                <span className="border-b-2 border-amber-500">Questions</span>
              </h2>
              <div className="-mx-4 flex flex-wrap">
                <div className="w-full px-4 md:w-1/2">
                  {category.questions
                    .slice(0, Math.ceil(category.questions.length / 2))
                    .map((item, idx) => (
                      <AccordionItem
                        key={idx}
                        header={item.question}
                        text={item.answer}
                      />
                    ))}
                </div>
                <div className="w-full px-4 md:w-1/2 ">
                  {category.questions
                    .slice(Math.ceil(category.questions.length / 2))
                    .map((item, idx) => (
                      <AccordionItem
                        key={idx}
                        header={item.question}
                        text={item.answer}
                      />
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="sec4 mt-6">
        <div className="bg-gradient-to-br from-emerald-800 via-emerald-900 to-neutral-400 p-7 md:p-10 md:px-14">
          <h1 className="text-white text-lg md:text-2xl lg:text-3xl font-bold tracking-widest text-center">
            Didn't find an answer to your question?
          </h1>
          <div className="text-center mt-4">
            <Link to="/contact">
              <Button variant="contained" color="success">
                Contact us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;

interface AccordionItemProps {
  header: string;
  text: string;
}

const AccordionItem = ({ header, text }: AccordionItemProps) => {
  const [active, setActive] = useState(false);

  const handleToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setActive(!active);
  };

  return (
    <div className="mb-8 w-full rounded-lg bg-white shadow sm:p-3 md:p-2 lg:px-2 lg:py-2 xl:px-2 relative">
      <button
        className="faq-btn flex w-full items-center text-left p-4"
        onClick={handleToggle}
      >
        <div className="flex-1 ">
          <h4 className="text-emerald-800 text-base md:text-base lg:text-2xl font-semibold leading-6 tracking-wide border-b-2 border-stone-500 w-fit">
            {header}
          </h4>
        </div>
        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-amber-500 text-white absolute right-4 ">
          <svg
            className={`fill-white stroke-white duration-200 ease-in-out ${
              active ? "rotate-180" : ""
            }`}
            width="17"
            height="10"
            viewBox="0 0 17 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
              fill="white"
              stroke="white"
            />
          </svg>
        </div>
      </button>
      <div
        className={`px-4 duration-200 ease-in-out ${
          active ? "block" : "hidden"
        }`}
      >
        <p className="py-3 text-stone-500 text-sm md:text-base lg:text-xl font-normal leading-6 tracking-wide ">
          {text}
        </p>
      </div>
    </div>
  );
};
