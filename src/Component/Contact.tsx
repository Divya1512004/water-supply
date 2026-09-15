
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faPhone,
//   faEnvelope,
//   faLocationDot,
//   faClock,
// } from "@fortawesome/free-solid-svg-icons";
// import QuoteForm from "./QuoteForm";

// const Contact = () => {
//   return (
//     <section className="bg-gray-50 py-20">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="mb-12 text-center">
//           <p className="font-semibold uppercase tracking-wider text-orange-500">
//             Contact Us
//           </p>

//           <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
//             Tell Us What You Need
//           </h2>

//           <p className="mx-auto mt-4 max-w-2xl text-gray-600">
//             Need sand, M-Sand, tank water, rock or JCB service?
//             Send your requirement and contact us.
//           </p>
//         </div>

//         <div className="grid gap-10 lg:grid-cols-2">
//           <div className="space-y-5">
//             <div className="rounded-xl bg-white p-6 shadow-sm">
//               <FontAwesomeIcon
//                 icon={faPhone}
//                 className="text-2xl text-orange-500"
//               />

//               <h3 className="mt-3 font-bold text-gray-900">
//                 Call Us
//               </h3>

//               <p className="mt-1 text-gray-600">
//                 +919362292407
//               </p>
//             </div>

//             <div className="rounded-xl bg-white p-6 shadow-sm">
//               <FontAwesomeIcon
//                 icon={faEnvelope}
//                 className="text-2xl text-orange-500"
//               />

//               <h3 className="mt-3 font-bold text-gray-900">
//                 Email
//               </h3>

//               <p className="mt-1 text-gray-600">
//                 pravien072005@gmail.com
//               </p>
//             </div>

//             <div className="rounded-xl bg-white p-6 shadow-sm">
//               <FontAwesomeIcon
//                 icon={faLocationDot}
//                 className="text-2xl text-orange-500"
//               />

//               <h3 className="mt-3 font-bold text-gray-900">
//                 Service Location
//               </h3>

//               <p className="mt-1 text-gray-600">
//                 Tiruchendur, Tamil Nadu
//               </p>
//             </div>

//             <div className="rounded-xl bg-white p-6 shadow-sm">
//               <FontAwesomeIcon
//                 icon={faClock}
//                 className="text-2xl text-orange-500"
//               />

//               <h3 className="mt-3 font-bold text-gray-900">
//                 Working Hours
//               </h3>

//               <p className="mt-1 text-gray-600">
//                 Monday - Saturday: 8:00 AM - 7:00 PM
//               </p>
//             </div>
//           </div>

//           <QuoteForm />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;



import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import QA from "../pages/QA";
import QuoteForm from "./QuoteForm";
import { useTranslation } from "../i18n";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="mb-12 text-center">

          {/* Label */}
          <p className="font-semibold uppercase tracking-wider text-orange-500">
            {t("contact.label")}
          </p>

          {/* Title */}
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t("contact.title")}
          </h2>

          {/* Description */}
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            {t("contact.subtitle")}
          </p>

        </div>

        {/* CONTENT */}
        <div className="grid gap-10 lg:grid-cols-2">

          {/* LEFT CONTACT DETAILS */}
          <div className="space-y-5">

            {/* PHONE */}
            <div className="rounded-xl bg-white p-6 shadow-sm">

              <FontAwesomeIcon
                icon={faPhone}
                className="text-2xl text-orange-500"
              />

              <h3 className="mt-3 font-bold text-gray-900">
                {t("contact.call")}
              </h3>

              <p className="mt-1 text-gray-600">
                +91 9362292407
              </p>

            </div>

            {/* EMAIL */}
            <div className="rounded-xl bg-white p-6 shadow-sm">

              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-2xl text-orange-500"
              />

              <h3 className="mt-3 font-bold text-gray-900">
                {t("contact.email")}
              </h3>

              <p className="mt-1 text-gray-600">
                pravien072005@gmail.com
              </p>

            </div>

            {/* LOCATION */}
            <div className="rounded-xl bg-white p-6 shadow-sm">

              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-2xl text-orange-500"
              />

              <h3 className="mt-3 font-bold text-gray-900">
                {t("contact.location")}
              </h3>

              <p className="mt-1 text-gray-600">
                Tiruchendur, Tamil Nadu
              </p>

            </div>

            {/* WORKING HOURS */}
            <div className="rounded-xl bg-white p-6 shadow-sm">

              <FontAwesomeIcon
                icon={faClock}
                className="text-2xl text-orange-500"
              />

              <h3 className="mt-3 font-bold text-gray-900">
                {t("contact.hours")}
              </h3>

              <p className="mt-1 text-gray-600">
                {t("contact.workingHours")}
              </p>

            </div>

          </div>

          {/* QUOTE FORM */}
          <QuoteForm />

        </div>
      </div>
      <QA/>
    </section>
  );
};

export default Contact;