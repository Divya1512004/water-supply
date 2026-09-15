// import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faChevronDown,
//   faMagnifyingGlass,
//   faPhone,
// } from "@fortawesome/free-solid-svg-icons";

// interface FAQ {
//   question: string;
//   answer: string;
//   category: string;
// }

// const faqs: FAQ[] = [
//   {
//     question: "What materials do you provide?",
//     answer:
//       "We provide a wide range of construction materials suitable for residential, commercial, and other construction projects. You can contact us for material availability and requirements.",
//     category: "Materials",
//   },
//   {
//     question: "How can I order construction materials?",
//     answer:
//       "You can contact us directly through the Contact page or use the Call Now button. Share your required materials, quantity, and delivery location with us.",
//     category: "Orders",
//   },
//   {
//     question: "Do you provide material delivery?",
//     answer:
//       "Yes, delivery can be arranged depending on the material, quantity, and delivery location. Contact us with your requirements to confirm the available delivery options.",
//     category: "Delivery",
//   },
//   {
//     question: "How do I know the price of a material?",
//     answer:
//       "Material prices can vary based on quantity, type, quality, and current market conditions. Contact us with the material details and quantity to get the latest price.",
//     category: "Pricing",
//   },
//   {
//     question: "Can I request a quotation?",
//     answer:
//       "Yes. Send us the list of materials and required quantities. Our team can provide the applicable quotation based on your requirements.",
//     category: "Pricing",
//   },
//   {
//     question: "Can I buy materials in bulk?",
//     answer:
//       "Yes, bulk requirements can be discussed with our team. Please contact us with the material name, quantity, and project requirements.",
//     category: "Orders",
//   },
//   {
//     question: "How can I contact DhanuContracts?",
//     answer:
//       "You can contact us using the Contact page or call us directly using the Call Now button. Our team will help you with your requirements.",
//     category: "Contact",
//   },
//   {
//     question: "Can I ask about a material that is not listed on the website?",
//     answer:
//       "Yes. If you cannot find a particular material on the website, contact us and let us know what you need. We can check the availability for you.",
//     category: "Materials",
//   },
// ];

// const categories = [
//   "All",
//   "Materials",
//   "Orders",
//   "Delivery",
//   "Pricing",
//   "Contact",
// ];

// const QA = () => {
//   const [openIndex, setOpenIndex] = useState<number | null>(null);
//   const [search, setSearch] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const toggleFAQ = (index: number) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   const filteredFAQs = faqs.filter((faq) => {
//     const matchesSearch =
//       faq.question.toLowerCase().includes(search.toLowerCase()) ||
//       faq.answer.toLowerCase().includes(search.toLowerCase());

//     const matchesCategory =
//       selectedCategory === "All" ||
//       faq.category === selectedCategory;

//     return matchesSearch && matchesCategory;
//   });

//   return (
//     <div className="min-h-screen bg-gray-50">

//       {/* Hero Section */}
      
//       {/* FAQ Section */}
//       <section className="py-12 sm:py-16">
//         <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

//           {/* Categories */}
//           <div className="mb-8 flex flex-wrap justify-center gap-2">

//             {categories.map((category) => (
//               <button
//                 key={category}
//                 type="button"
//                 onClick={() => {
//                   setSelectedCategory(category);
//                   setOpenIndex(null);
//                 }}
//                 className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
//                   selectedCategory === category
//                     ? "bg-orange-500 text-white shadow-md shadow-orange-200"
//                     : "bg-white text-gray-600 shadow-sm hover:bg-orange-50 hover:text-orange-500"
//                 }`}
//               >
//                 {category}
//               </button>
//             ))}

//           </div>

//           {/* FAQ List */}
//           <div className="space-y-4">

//             {filteredFAQs.length > 0 ? (
//               filteredFAQs.map((faq, index) => {
//                 const isOpen = openIndex === index;

//                 return (
//                   <div
//                     key={faq.question}
//                     className={`overflow-hidden rounded-xl border bg-white transition-all duration-300 ${
//                       isOpen
//                         ? "border-orange-300 shadow-lg shadow-orange-100"
//                         : "border-gray-200 shadow-sm hover:border-orange-200 hover:shadow-md"
//                     }`}
//                   >

//                     {/* Question */}
//                     <button
//                       type="button"
//                       onClick={() => toggleFAQ(index)}
//                       className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
//                       aria-expanded={isOpen}
//                     >

//                       <div className="flex items-start gap-4">

//                         {/* Number */}
//                         <span
//                           className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-all duration-300 ${
//                             isOpen
//                               ? "bg-orange-500 text-white"
//                               : "bg-orange-50 text-orange-500"
//                           }`}
//                         >
//                           {index + 1}
//                         </span>

//                         <span
//                           className={`pt-1 text-base font-semibold transition-colors duration-300 sm:text-lg ${
//                             isOpen
//                               ? "text-orange-500"
//                               : "text-gray-800"
//                           }`}
//                         >
//                           {faq.question}
//                         </span>

//                       </div>

//                       {/* Arrow */}
//                       <span
//                         className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
//                           isOpen
//                             ? "rotate-180 bg-orange-500 text-white"
//                             : "bg-gray-100 text-gray-600"
//                         }`}
//                       >
//                         <FontAwesomeIcon
//                           icon={faChevronDown}
//                           className="text-sm"
//                         />
//                       </span>

//                     </button>

//                     {/* Answer */}
//                     <div
//                       className={`grid transition-all duration-500 ease-in-out ${
//                         isOpen
//                           ? "grid-rows-[1fr] opacity-100"
//                           : "grid-rows-[0fr] opacity-0"
//                       }`}
//                     >
//                       <div className="overflow-hidden">

//                         <div className="border-t border-orange-100 px-5 pb-6 pt-4 sm:px-6">

//                           <p className="pl-12 text-sm leading-7 text-gray-600 sm:text-base">
//                             {faq.answer}
//                           </p>

//                         </div>

//                       </div>
//                     </div>

//                   </div>
//                 );
//               })
//             ) : (
//               /* No Results */
//               <div className="rounded-xl border border-gray-200 bg-white px-6 py-12 text-center shadow-sm">

//                 <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-orange-50">
//                   <FontAwesomeIcon
//                     icon={faMagnifyingGlass}
//                     className="text-xl text-orange-500"
//                   />
//                 </div>

//                 <h3 className="text-lg font-bold text-gray-900">
//                   No questions found
//                 </h3>

//                 <p className="mt-2 text-sm text-gray-500">
//                   Try searching with a different keyword.
//                 </p>

//               </div>
//             )}

//           </div>

//         </div>
//       </section>

//       {/* Contact CTA */}
//       <section className="px-4 pb-16 sm:px-6 lg:px-8">

//         <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl bg-gray-900 px-6 py-10 text-center shadow-xl sm:px-10">

//           <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
//             Still have a question?
//           </h2>

//           <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-300 sm:text-base">
//             Our team is ready to help you with materials, pricing, orders,
//             delivery, and other requirements.
//           </p>

//           <a
//             href="tel:+91+919362292407"
//             className="group mx-auto mt-6 inline-flex items-center gap-3 rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-orange-500/30"
//           >
//             <FontAwesomeIcon
//               icon={faPhone}
//               className="transition-transform duration-300 group-hover:rotate-12"
//             />

//             Call Now
//           </a>

//         </div>

//       </section>

//     </div>
//   );
// };

// export default QA;



import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faMagnifyingGlass,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import { useTranslation } from "../i18n";

interface FAQ {
  questionKey: string;
  answerKey: string;
  category: string;
}

const faqs: FAQ[] = [
  {
    questionKey: "qa.question.materials",
    answerKey: "qa.answer.materials",
    category: "Materials",
  },
  {
    questionKey: "qa.question.order",
    answerKey: "qa.answer.order",
    category: "Orders",
  },
  {
    questionKey: "qa.question.delivery",
    answerKey: "qa.answer.delivery",
    category: "Delivery",
  },
  {
    questionKey: "qa.question.price",
    answerKey: "qa.answer.price",
    category: "Pricing",
  },
  {
    questionKey: "qa.question.quotation",
    answerKey: "qa.answer.quotation",
    category: "Pricing",
  },
  {
    questionKey: "qa.question.bulk",
    answerKey: "qa.answer.bulk",
    category: "Orders",
  },
  {
    questionKey: "qa.question.contact",
    answerKey: "qa.answer.contact",
    category: "Contact",
  },
  {
    questionKey: "qa.question.notListed",
    answerKey: "qa.answer.notListed",
    category: "Materials",
  },
];

const categories = [
  {
    key: "All",
    label: "qa.all",
  },
  {
    key: "Materials",
    label: "qa.materials",
  },
  {
    key: "Orders",
    label: "qa.orders",
  },
  {
    key: "Delivery",
    label: "qa.delivery",
  },
  {
    key: "Pricing",
    label: "qa.pricing",
  },
  {
    key: "Contact",
    label: "qa.contact",
  },
];

const QA = () => {
  const { t } = useTranslation();

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFAQs = faqs.filter((faq) => {
    const question = t(faq.questionKey);
    const answer = t(faq.answerKey);

    const searchValue = search.toLowerCase().trim();

    const matchesSearch =
      question.toLowerCase().includes(searchValue) ||
      answer.toLowerCase().includes(searchValue);

    const matchesCategory =
      selectedCategory === "All" ||
      faq.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">


      {/* =====================================================
          FAQ SECTION
      ===================================================== */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* =================================================
              CATEGORIES
          ================================================= */}
          <div className="mb-8 flex flex-wrap justify-center gap-2">

            {categories.map((category) => (
              <button
                key={category.key}
                type="button"
                onClick={() => {
                  setSelectedCategory(category.key);
                  setOpenIndex(null);
                }}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  selectedCategory === category.key
                    ? "bg-orange-500 text-white shadow-md shadow-orange-200"
                    : "bg-white text-gray-600 shadow-sm hover:bg-orange-50 hover:text-orange-500"
                }`}
              >
                {t(category.label)}
              </button>
            ))}

          </div>

          {/* =================================================
              FAQ LIST
          ================================================= */}
          <div className="space-y-4">

            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={faq.questionKey}
                    className={`overflow-hidden rounded-xl border bg-white transition-all duration-300 ${
                      isOpen
                        ? "border-orange-300 shadow-lg shadow-orange-100"
                        : "border-gray-200 shadow-sm hover:border-orange-200 hover:shadow-md"
                    }`}
                  >

                    {/* =================================================
                        QUESTION
                    ================================================= */}
                    <button
                      type="button"
                      onClick={() => toggleFAQ(index)}
                      className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                      aria-expanded={isOpen}
                    >

                      <div className="flex items-start gap-4">

                        {/* NUMBER */}
                        <span
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-all duration-300 ${
                            isOpen
                              ? "bg-orange-500 text-white"
                              : "bg-orange-50 text-orange-500"
                          }`}
                        >
                          {index + 1}
                        </span>

                        {/* QUESTION */}
                        <span
                          className={`pt-1 text-base font-semibold transition-colors duration-300 sm:text-lg ${
                            isOpen
                              ? "text-orange-500"
                              : "text-gray-800"
                          }`}
                        >
                          {t(faq.questionKey)}
                        </span>

                      </div>

                      {/* =================================================
                          ARROW
                      ================================================= */}
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                          isOpen
                            ? "rotate-180 bg-orange-500 text-white"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          className="text-sm"
                        />
                      </span>

                    </button>

                    {/* =================================================
                        ANSWER
                    ================================================= */}
                    <div
                      className={`grid transition-all duration-500 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">

                        <div className="border-t border-orange-100 px-5 pb-6 pt-4 sm:px-6">

                          <p className="pl-12 text-sm leading-7 text-gray-600 sm:text-base">
                            {t(faq.answerKey)}
                          </p>

                        </div>

                      </div>
                    </div>

                  </div>
                );
              })
            ) : (

              /* =================================================
                 NO RESULTS
              ================================================= */
              <div className="rounded-xl border border-gray-200 bg-white px-6 py-12 text-center shadow-sm">

                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-orange-50">

                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="text-xl text-orange-500"
                  />

                </div>

                <h3 className="text-lg font-bold text-gray-900">
                  {t("qa.noQuestions")}
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  {t("qa.tryDifferentKeyword")}
                </p>

              </div>
            )}

          </div>

        </div>
      </section>

      {/* =====================================================
          CONTACT CTA
      ===================================================== */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl bg-gray-900 px-6 py-10 text-center shadow-xl sm:px-10">

          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
            {t("qa.stillQuestion")}
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-300 sm:text-base">
            {t("qa.contactDescription")}
          </p>

          <a
            href="tel:+919362292407"
            className="group mx-auto mt-6 inline-flex items-center gap-3 rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-orange-500/30"
          >
            <FontAwesomeIcon
              icon={faPhone}
              className="transition-transform duration-300 group-hover:rotate-12"
            />

            {t("qa.callNow")}
          </a>

        </div>

      </section>

    </div>
  );
};

export default QA;