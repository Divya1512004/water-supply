import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

const ContractDurationDetails = () => {
  const durations = [
    {
      title: "1 Day",
      description:
        "Short-term service available for one-day requirements.",
    },
    {
      title: "1 Week",
      description:
        "Flexible service available for weekly requirements.",
    },
    {
      title: "1 Month",
      description:
        "Suitable for monthly material and service requirements.",
    },
    {
      title: "3 Months",
      description:
        "Flexible contract service for longer requirements.",
    },
    {
      title: "5 Months",
      description:
        "Extended contract service based on your requirements.",
    },
    {
      title: "6 Months",
      description:
        "Longer-term service available with flexible arrangements.",
    },
    {
      title: "1 Year",
      description:
        "Long-term contract service for continuous requirements.",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid items-center gap-10 lg:grid-cols-2">

          {/* =========================
              LEFT - DURATION DETAILS
          ========================== */}
          <div>

            <p className="font-semibold uppercase tracking-wider text-orange-500">
              Contract Services
            </p>

            <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Flexible Contract Duration
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-gray-600">
              We provide flexible service durations based on your
              requirements, from short-term one-day services to
              long-term yearly contracts.
            </p>

            {/* Duration List */}
            <div className="mt-8 space-y-4">

              {durations.map((duration) => (
                <div
                  key={duration.title}
                  className="flex gap-4 rounded-xl border border-gray-100 bg-gray-50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:bg-orange-50 hover:shadow-md"
                >

                  {/* Icon */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-500 text-white shadow-sm">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-sm"
                    />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="font-bold text-gray-900">
                      {duration.title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      {duration.description}
                    </p>
                  </div>

                </div>
              ))}

            </div>

          </div>


          {/* =========================
              RIGHT - ONE IMAGE
          ========================== */}
          <div className="relative">

           <div className="overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 shadow-xl">
  <img
    src="/d.png"
    alt="Dhanu Enterprises contract services"
    className="h-[350px] w-[100%] mx-auto object-cover transition duration-700 hover:scale-105"
  />
</div>
            {/* Small floating badge */}
            <div className="absolute -bottom-5 left-5 flex items-center gap-3 rounded-xl bg-white px-5 py-4 shadow-xl sm:left-8">

              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500 text-white">
                <FontAwesomeIcon icon={faCalendarDays} />
              </div>

              <div>
                <p className="text-xs font-medium text-gray-500">
                  Flexible Options
                </p>

                <p className="font-bold text-gray-900">
                  Short & Long Term
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ContractDurationDetails;