

// const About = () => {
//   return (
//     <section className="bg-gray-50 py-20">
//       <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">

//         {/* LEFT CONTENT */}
//         <div>
//           <p className="font-semibold uppercase tracking-wider text-orange-500">
//             About Us
//           </p>

//           <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">
//             Your Trusted Supply & Service Partner
//           </h2>

//           <p className="mt-5 leading-8 text-gray-600">
//             We provide sand, M-Sand, tank water, rock and blue metal
//             supplies along with JCB services based on customer requirements.
//           </p>

//           <p className="mt-4 leading-8 text-gray-600">
//             Whether you need a material load, water tank delivery or
//             JCB service, our goal is to provide a simple and reliable
//             service from enquiry to delivery.
//           </p>

//           {/* STATS */}
//           <div className="mt-8 grid grid-cols-2 gap-5">
//             <div className="rounded-xl bg-white p-5 shadow-sm">
//               <p className="text-3xl font-extrabold text-orange-500">
//                 5+
//               </p>

//               <p className="mt-1 text-gray-600">
//                 Years Experience
//               </p>
//             </div>

//             <div className="rounded-xl bg-white p-5 shadow-sm">
//               <p className="text-3xl font-extrabold text-orange-500">
//                 1000+
//               </p>

//               <p className="mt-1 text-gray-600">
//                 Customers Served
//               </p>
//             </div>
//           </div>

//           {/* WHY CHOOSE US */}
//           <div className="mt-8">
//             <h3 className="text-xl font-bold text-gray-900">
//               Why Choose Us?
//             </h3>

//             <div className="mt-4 grid gap-3 sm:grid-cols-2">

//               <div className="flex items-center gap-3">
//                 <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-100 text-orange-500">
//                   ✓
//                 </div>

//                 <p className="font-medium text-gray-700">
//                   Quality Materials
//                 </p>
//               </div>

//               <div className="flex items-center gap-3">
//                 <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-100 text-orange-500">
//                   ✓
//                 </div>

//                 <p className="font-medium text-gray-700">
//                   Reliable Delivery
//                 </p>
//               </div>

//               <div className="flex items-center gap-3">
//                 <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-100 text-orange-500">
//                   ✓
//                 </div>

//                 <p className="font-medium text-gray-700">
//                   On-Time Service
//                 </p>
//               </div>

//               <div className="flex items-center gap-3">
//                 <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-100 text-orange-500">
//                   ✓
//                 </div>

//                 <p className="font-medium text-gray-700">
//                   Customer Satisfaction
//                 </p>
//               </div>

//             </div>
//           </div>

//           {/* CTA */}
//           <div className="mt-8 flex flex-wrap gap-4">
//             <a
//               href="tel:+919876543210"
//               className="rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
//             >
//               Call Us
//             </a>

//             <a
//               href="https://wa.me/919876543210"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="rounded-lg border border-green-500 px-6 py-3 font-semibold text-green-600 transition hover:bg-green-50"
//             >
//               WhatsApp Us
//             </a>
//           </div>
//         </div>

//         {/* RIGHT IMAGE */}
//         <div className="overflow-hidden rounded-2xl shadow-lg">
//           <img
//             src="/images/about.jpg"
//             alt="Material supply service"
//             className="h-[450px] w-full object-cover"
//           />
//         </div>

//       </div>
//     </section>
//   );
// };

// export default About;


import { useTranslation } from "../i18n";

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">

        {/* LEFT CONTENT */}
        <div>

          {/* Label */}
          <p className="font-semibold uppercase tracking-wider text-orange-500">
            {t("about.label")}
          </p>

          {/* Title */}
          <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t("about.title")}
          </h2>

          {/* Description 1 */}
          <p className="mt-5 leading-8 text-gray-600">
            {t("about.description1")}
          </p>

          {/* Description 2 */}
          <p className="mt-4 leading-8 text-gray-600">
            {t("about.description2")}
          </p>

          {/* STATS */}
          <div className="mt-8 grid grid-cols-2 gap-5">

            {/* Experience */}
            <div className="rounded-xl bg-white p-5 shadow-sm">
              <p className="text-3xl font-extrabold text-orange-500">
                5+
              </p>

              <p className="mt-1 text-gray-600">
                {t("about.yearsExperience")}
              </p>
            </div>

            {/* Customers */}
            <div className="rounded-xl bg-white p-5 shadow-sm">
              <p className="text-3xl font-extrabold text-orange-500">
                1000+
              </p>

              <p className="mt-1 text-gray-600">
                {t("about.customersServed")}
              </p>
            </div>

          </div>

          {/* WHY CHOOSE US */}
          <div className="mt-8">

            <h3 className="text-xl font-bold text-gray-900">
              {t("about.whyChooseUs")}
            </h3>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">

              {/* Quality Materials */}
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                  ✓
                </div>

                <p className="font-medium text-gray-700">
                  {t("about.qualityMaterials")}
                </p>
              </div>

              {/* Reliable Delivery */}
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                  ✓
                </div>

                <p className="font-medium text-gray-700">
                  {t("about.reliableDelivery")}
                </p>
              </div>

              {/* On-Time Service */}
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                  ✓
                </div>

                <p className="font-medium text-gray-700">
                  {t("about.onTimeService")}
                </p>
              </div>

              {/* Customer Satisfaction */}
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                  ✓
                </div>

                <p className="font-medium text-gray-700">
                  {t("about.customerSatisfaction")}
                </p>
              </div>

            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap gap-4">

            {/* Call */}
            <a
              href="tel:+919876543210"
              className="rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
            >
              {t("about.callUs")}
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-green-500 px-6 py-3 font-semibold text-green-600 transition hover:bg-green-50"
            >
              {t("about.whatsappUs")}
            </a>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <img
            src="/public/t2.png"
            alt={t("about.imageAlt")}
            className="h-[450px] w-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default About;