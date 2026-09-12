// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faBoxOpen,
//   faTruckFast,
//   faHeadset,
//   faTags,
// } from "@fortawesome/free-solid-svg-icons";

// const features = [
//   {
//     icon: faBoxOpen,
//     title: "Quality Materials",
//     description:
//       "Reliable materials supplied according to your requirement.",
//   },
//   {
//     icon: faTruckFast,
//     title: "Reliable Delivery",
//     description:
//       "Material and water delivery available to your location.",
//   },
//   {
//     icon: faHeadset,
//     title: "Easy Enquiry",
//     description:
//       "Contact us easily to check availability and service details.",
//   },
//   {
//     icon: faTags,
//     title: "Competitive Rates",
//     description:
//       "Get competitive pricing based on quantity and requirement.",
//   },
// ];

// const WhyChooseUs = () => {
//   return (
//     <section className="bg-gray-900 py-20">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="mb-12 text-center">
//           <p className="font-semibold uppercase tracking-wider text-orange-400">
//             Why Choose Us
//           </p>

//           <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
//             Simple. Reliable. Convenient.
//           </h2>
//         </div>

//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//           {features.map((feature) => (
//             <div
//               key={feature.title}
//               className="rounded-2xl border border-gray-700 bg-gray-800 p-7"
//             >
//               <FontAwesomeIcon
//                 icon={feature.icon}
//                 className="text-3xl text-orange-500"
//               />

//               <h3 className="mt-5 text-xl font-bold text-white">
//                 {feature.title}
//               </h3>

//               <p className="mt-3 leading-7 text-gray-400">
//                 {feature.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;



import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxOpen,
  faTruckFast,
  faHeadset,
  faTags,
} from "@fortawesome/free-solid-svg-icons";

import { useTranslation } from "../i18n";

const features = [
  {
    icon: faBoxOpen,
    titleKey: "whyChooseUs.qualityTitle",
    descriptionKey: "whyChooseUs.qualityDescription",
  },
  {
    icon: faTruckFast,
    titleKey: "whyChooseUs.deliveryTitle",
    descriptionKey: "whyChooseUs.deliveryDescription",
  },
  {
    icon: faHeadset,
    titleKey: "whyChooseUs.enquiryTitle",
    descriptionKey: "whyChooseUs.enquiryDescription",
  },
  {
    icon: faTags,
    titleKey: "whyChooseUs.ratesTitle",
    descriptionKey: "whyChooseUs.ratesDescription",
  },
];

const WhyChooseUs = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-gray-900 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="mb-12 text-center">

          <p className="font-semibold uppercase tracking-wider text-orange-400">
            {t("whyChooseUs.label")}
          </p>

          <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
            {t("whyChooseUs.title")}
          </h2>

        </div>

        {/* FEATURES */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => (
            <div
              key={feature.titleKey}
              className="rounded-2xl border border-gray-700 bg-gray-800 p-7"
            >

              {/* ICON */}
              <FontAwesomeIcon
                icon={feature.icon}
                className="text-3xl text-orange-500"
              />

              {/* TITLE */}
              <h3 className="mt-5 text-xl font-bold text-white">
                {t(feature.titleKey)}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-3 leading-7 text-gray-400">
                {t(feature.descriptionKey)}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;