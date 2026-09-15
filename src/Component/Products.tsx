

import {
  faMountain,
  faDroplet,
  faTruck,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";

import ProductCard, { Product } from "./ProductCard";
import { useTranslation } from "../i18n";
import ContractDurationDetails from "../pages/ContractDuration";

const products: Product[] = [
  {
    id: 1,
    name: "Sand",
    nameKey: "products.sand",
    description:
      "Quality sand supply for your requirements with convenient delivery options.",
    descriptionKey: "products.sandDescription",
    image: "/p3.jpg",
    unit: "Load",
    icon: faMountain,
  },

  {
    id: 2,
    name: "Tank Water",
    nameKey: "products.tankWater",
    description:
      "Tank water supply and delivery available to your required location.",
    descriptionKey: "products.tankWaterDescription",
    image: "/p2.jpg",
    unit: "Tank",
    icon: faDroplet,
  },

  {
    id: 3,
    name: "M-Sand",
    nameKey: "products.msand",
    description:
      "Reliable M-Sand supply available based on your required quantity.",
    descriptionKey: "products.msandDescription",
    image: "/msand.png",
    unit: "Load",
    icon: faLayerGroup,
  },

  {
    id: 4,
    name: "Rocks",
    nameKey: "products.rocks",
    description:
      "Quality Rock and blue metal materials available for supply and delivery.",
    descriptionKey: "products.rocksDescription",
    image: "/p1.png",
    unit: "Load",
    icon: faTruck,
  }
]

const Products = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">

          <p className="font-semibold uppercase tracking-wider text-orange-500">
            {t("products.whatWeSupply")}
          </p>

          <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t("products.title")}
          </h2>

          <p className="mt-4 text-gray-600">
            {t("products.description")}
          </p>

        </div>

        {/* Product Cards */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
        {/* Contract Duration Details */}
          <ContractDurationDetails />

      </div>
    </section>
  );
};

export default Products;