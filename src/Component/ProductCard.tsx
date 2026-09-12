

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

import { useTranslation } from "../i18n";

export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  unit: string;
  icon: IconDefinition;

  // i18n keys
  nameKey: string;
  descriptionKey: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { t } = useTranslation();

  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Product Image */}
      <div className="relative h-44 w-full overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={t(product.nameKey)}
          className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
        />

        {/* Icon */}
        <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-orange-500 text-white shadow-lg">
          <FontAwesomeIcon icon={product.icon} />
        </div>
      </div>

      {/* Product Details */}
      <div className="p-6">

        {/* Product Name */}
        <h3 className="text-xl font-bold text-gray-900">
          {t(product.nameKey)}
        </h3>

        {/* Available Unit */}
        <p className="mt-1 text-sm font-medium text-orange-500">
          {t("products.availableBy")} {product.unit}
        </p>

        {/* Product Description */}
        <p className="mt-3 leading-7 text-gray-600">
          {t(product.descriptionKey)}
        </p>

        {/* Enquire Button */}
        <Link
          to="/contact"
          className="mt-5 inline-flex items-center gap-2 rounded-lg bg-gray-900 px-5 py-2.5 font-semibold text-white transition hover:bg-orange-500"
        >
          {t("products.enquire")}
          <FontAwesomeIcon icon={faArrowRight} />
        </Link>

      </div>
    </div>
  );
};

export default ProductCard;