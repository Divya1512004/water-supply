// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

// const locations = [
//   "Chennai",
//   "Tambaram",
//   "Avadi",
//   "Poonamallee",
//   "Sriperumbudur",
//   "Kundrathur",
// ];

// const ServiceAreas = () => {
//   return (
//     <section className="bg-white py-20">
//       <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">

//         <p className="font-semibold uppercase tracking-wider text-orange-500">
//           Service Areas
//         </p>

//         <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
//           We Deliver Across Your Location
//         </h2>

//         <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
//           {locations.map((location) => (
//             <div
//               key={location}
//               className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 p-5 text-left transition hover:border-orange-400"
//             >
//               <FontAwesomeIcon
//                 icon={faLocationDot}
//                 className="text-xl text-orange-500"
//               />

//               <span className="font-semibold text-gray-800">
//                 {location}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServiceAreas;


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const locations = [
  "Chennai",
  "Tambaram",
  "Avadi",
  "Poonamallee",
  "Sriperumbudur",
  "Kundrathur",
];

const ServiceAreas = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <p className="font-semibold uppercase tracking-wider text-orange-500">
          Service Locations
        </p>

        <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Areas We Serve
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
          Contact us to check material delivery and JCB service
          availability in your location.
        </p>

        <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((location) => (
            <div
              key={location}
              className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 p-5 text-left transition hover:border-orange-400"
            >
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-xl text-orange-500"
              />

              <span className="font-semibold text-gray-800">
                {location}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;