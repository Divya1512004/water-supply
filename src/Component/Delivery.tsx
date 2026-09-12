import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxOpen,
  faListCheck,
  faLocationDot,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";

const steps = [
  {
    icon: faBoxOpen,
    title: "Choose Material",
    description: "Select the construction material you need.",
  },
  {
    icon: faListCheck,
    title: "Select Quantity",
    description: "Tell us the required quantity.",
  },
  {
    icon: faLocationDot,
    title: "Share Location",
    description: "Provide your construction site location.",
  },
  {
    icon: faTruck,
    title: "Get Delivery",
    description: "We arrange delivery to your site.",
  },
];

const Delivery = () => {
  return (
    <section className="bg-orange-500 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Materials Delivered to Your Site
          </h2>

          <p className="mt-4 text-orange-100">
            Getting construction materials is simple and convenient.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-2xl bg-white p-7 text-center"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 text-xl text-orange-500">
                <FontAwesomeIcon icon={step.icon} />
              </div>

              <p className="mt-5 text-sm font-bold text-orange-500">
                STEP {index + 1}
              </p>

              <h3 className="mt-2 text-xl font-bold text-gray-900">
                {step.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Delivery;