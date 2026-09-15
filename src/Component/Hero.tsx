

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faPhone,
  faDroplet,
  faMountain,
} from "@fortawesome/free-solid-svg-icons";

import { useTranslation } from "../i18n";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-gray-950">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/bg.png"
          alt={t("hero.imageAlt")}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Light Overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Hero Content */}
      <div className="relative mx-auto max-w-7xl px-4 py-7 sm:px-6 sm:py-9 lg:px-8 lg:py-10">

        {/* Blur Card */}
        <div
          className="
            absolute left-2 top-3 bottom-3
            w-[95%] max-w-[620px]
            rounded-2xl
            border border-white/10
            backdrop-blur-[2px]
            shadow-xl
            sm:left-4 sm:top-4 sm:bottom-4
            lg:left-6 lg:w-[620px]
          "
        />

        {/* Content */}
        <div className="relative z-10 max-w-2xl pl-4 sm:pl-6 lg:pl-8">

          {/* Service Tags */}
          <div className="mb-3 flex flex-wrap gap-2">

            <span className="rounded-full bg-orange-500/90 px-3 py-1 text-xs font-semibold text-white shadow-sm">
              {t("hero.sandSupply")}
            </span>

            <span className="rounded-full bg-orange-500/90 px-3 py-1 text-xs font-semibold text-white shadow-sm">
              {t("hero.msandSupply")}
            </span>

          </div>

          {/* Heading */}
          <h1 className="text-2xl font-extrabold leading-tight text-white drop-shadow-lg sm:text-3xl md:text-4xl">

            {t("hero.title")}

            <span className="block text-orange-400">
              {t("hero.subtitle")}
            </span>

          </h1>

          {/* Description */}
          <p className="mt-3 max-w-xl text-sm leading-6 text-white drop-shadow-md sm:mt-4 sm:text-base sm:leading-7">
            {t("hero.description")}
          </p>

          {/* Buttons */}
          <div className="mt-4 flex flex-wrap gap-3 sm:mt-5">

            <a
              href="tel:+919362292407"
              className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-4 py-2 text-sm font-bold text-white shadow-lg transition hover:bg-orange-600 sm:px-5 sm:py-2.5"
            >
              <FontAwesomeIcon icon={faPhone} />
              {t("hero.call")}
            </a>

          </div>

          {/* Service Cards */}
          <div className="mt-5 grid max-w-md grid-cols-2 gap-2 sm:mt-6 sm:gap-3">

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;