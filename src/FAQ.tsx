import React, { useState, useEffect } from "react";
import faqData from "./Data.json";
import { Button } from "@mui/material";

function FAQ1() {
  const [open, setOpen] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(faqData.categories);
  }, []);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div className="FAQsec">
      <div className="bg-gradient-to-r from-emerald-800 to-zinc-300 p-6">
        <h1 className="text-white text-lg font-semibold tracking-wide sm:text-2xl">
          FAQs
        </h1>
        <p className="text-white text-base font-normal leading-normal tracking-wide sm:text-xl">
          These are some of the most important queries that we have answered to
          help you get started on your entrepreneurial journey with LIST.
        </p>
      </div>

      {categories.map((category, categoryIndex) => (
        <div
          key={categoryIndex}
          className={`h-fit sec1 mt-12 ${
            category.category === "Category 2" ? "bg-cover bg-center" : ""
          }`}
          style={{
            backgroundImage:
              category.category === "Category 2"
                ? 'url("/team/Colorpalette.png")'
                : "none",
          }}
        >
          <h1 className="text-emerald-800 text-xl font-semibold tracking-widest sm:text-2xl mb-4">
            {category.category}
            <span className="border-b-2 border-amber-500">Questions</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {category.questions.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md">
                <div className="card-header relative">
                  <h5 className="text-emerald-800 text-sm sm:text-lg font-semibold leading-5 tracking-wide p-4">
                    <span className="border-b-2 border-gray-500">
                      {faq.question}
                    </span>
                  </h5>

                  <div className="flex justify-center items-center absolute -right-[10px] -top-[10px]">
                    <button
                      className={`btn btn-link w-full text-left p-6 ${
                        open === index
                          ? "border-pink-400"
                          : "border-transparent"
                      }`}
                      type="button"
                      onClick={() => toggle(index)}
                    >
                      <span
                        className={`ml-2 text-pink-400 ${
                          open === index ? "rotate-45" : ""
                        }`}
                      >
                        {open === index ? "-" : "+"}
                      </span>
                    </button>
                  </div>
                </div>
                {open === index && (
                  <div className="card-body px-4 py-2">
                    <p className="text-stone-500 text-xs font-normal leading-5 tracking-wide">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="bg-gradient-to-br from-emerald-800 via-emerald-900 to-neutral-400 p-4 mt-8">
        <p className="text-white text-lg sm:text-xl font-semibold tracking-widest text-center md:text-2xl p-4">
          Didn’t find an answer to your question?{" "}
        </p>
        <div className="text-center mt-2 mb-4">
          <Button variant="contained" color="success">
            Contact now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default FAQ1;
