// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faCheck,
//   faTruck,
//   faMountain,
//   faRoad,
// } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";

// const services = [
//   "Excavation",
//   "Earth Moving",
//   "Land Clearing",
//   "Site Levelling",
//   "Foundation Work",
//   "Debris Removal",
// ];

// const JCBServices = () => {
//   return (
//     <section className="bg-white py-20">
//       <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">

//         <div className="overflow-hidden rounded-2xl">
//           <img
//             src="https://images.unsplash.com/photo-1579422493785-4c9d2b8f4c6f?auto=format&fit=crop&w=1200&q=80"
//             alt="JCB service"
//             className="h-[450px] w-full object-cover"
//           />
//         </div>

//         <div>
//           <p className="font-semibold uppercase tracking-wider text-orange-500">
//             Equipment Services
//           </p>

//           <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">
//             Reliable JCB Rental Services
//           </h2>

//           <p className="mt-5 leading-8 text-gray-600">
//             Get dependable JCB equipment for excavation, earth moving,
//             site preparation and other construction requirements.
//           </p>

//           <div className="mt-7 grid gap-4 sm:grid-cols-2">
//             {services.map((service) => (
//               <div key={service} className="flex items-center gap-3">
//                 <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-orange-500">
//                   <FontAwesomeIcon icon={faCheck} />
//                 </span>

//                 <span className="font-medium text-gray-700">
//                   {service}
//                 </span>
//               </div>
//             ))}
//           </div>

//           <Link
//             to="/contact"
//             className="mt-8 inline-block rounded-lg bg-gray-900 px-6 py-3 font-semibold text-white transition hover:bg-orange-500"
//           >
//             Book JCB
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default JCBServices;


import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faTruck,
  faClock,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const services = [
  "JCB Rental",
  "Excavation Work",
  "Earth Moving",
  "Land Clearing",
  "Site Levelling",
  "Material Handling",
];

const JCBServices = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="overflow-hidden rounded-2xl">
          <img
            src="https://images.unsplash.com/photo-1579422493785-4c9d2b8f4c6f?auto=format&fit=crop&w=1200&q=80"
            alt="JCB rental service"
            className="h-[450px] w-full object-cover"
          />
        </div>

        <div>
          <p className="font-semibold uppercase tracking-wider text-orange-500">
            JCB Service
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            JCB Available for Your Requirements
          </h2>

          <p className="mt-5 leading-8 text-gray-600">
            Need a JCB? Contact us for JCB rental and service
            based on your location, work requirement and duration.
          </p>

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {services.map((service) => (
              <div key={service} className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                  <FontAwesomeIcon icon={faCheck} />
                </span>

                <span className="font-medium text-gray-700">
                  {service}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
            >
              Book JCB
            </Link>

            <a
              href="tel:+919362292407"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-800 transition hover:border-orange-500 hover:text-orange-500"
            >
              <FontAwesomeIcon icon={faPhone} />
              Call for Details
            </a>
          </div>

          <div className="mt-8 flex gap-6 border-t border-gray-200 pt-6">
            <div>
              <FontAwesomeIcon
                icon={faTruck}
                className="text-orange-500"
              />
              <p className="mt-2 text-sm text-gray-600">
                Service Available
              </p>
            </div>

            <div>
              <FontAwesomeIcon
                icon={faClock}
                className="text-orange-500"
              />
              <p className="mt-2 text-sm text-gray-600">
                Flexible Duration
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JCBServices;