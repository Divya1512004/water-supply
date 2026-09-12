import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import { useTranslation } from "../i18n";
import {
  LANGUAGES,
  getStoredLanguage,
  setStoredLanguage,
} from "../utils/language";

const Footer = () => {
  const { t } = useTranslation();

  const currentLanguage = getStoredLanguage();

  return (
    <footer className="bg-gray-950 text-white">

      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">

        {/* Company */}
        <div>
          <h2 className="text-2xl font-extrabold">
            Dhanu<span className="text-orange-500">Contracts</span>
          </h2>

          <p className="mt-4 max-w-sm leading-7 text-gray-400">
            {t("footer.companyDescription")}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold">
            {t("footer.quickLinks")}
          </h3>

          <div className="mt-4 flex flex-col gap-3">

            <Link
              to="/"
              className="text-gray-400 transition hover:text-orange-500"
            >
              {t("footer.home")}
            </Link>

            <Link
              to="/products"
              className="text-gray-400 transition hover:text-orange-500"
            >
              {t("footer.materials")}
            </Link>

            <Link
              to="/contact"
              className="text-gray-400 transition hover:text-orange-500"
            >
              {t("footer.contact")}
            </Link>

          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold">
            {t("footer.contactTitle")}
          </h3>

          <div className="mt-4 space-y-4 text-gray-400">

            {/* Phone */}
            <p className="flex gap-3">
              <FontAwesomeIcon
                icon={faPhone}
                className="mt-1 text-orange-500"
              />

              <a
                href="tel:+916385407797"
                className="transition hover:text-orange-500"
              >
                +91 6385407797
              </a>
            </p>

            {/* Location */}
            <p className="flex gap-3">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="mt-1 text-orange-500"
              />

              <span>
                {t("footer.location")}
              </span>
            </p>

          </div>
        </div>
      </div>

      {/* Bottom Language Bar */}
      <div className="fixed bottom-0 left-0 z-50 w-full border-t border-gray-700 bg-gray-900/95 backdrop-blur-sm">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

          {/* Language Options */}
          <div className="flex items-center gap-3 text-sm">

            {LANGUAGES.map((language, index) => (
              <div
                key={language.code}
                className="flex items-center"
              >
                <button
                  type="button"
                  onClick={() => {
                    setStoredLanguage(language.code);
                  }}
                  className={`transition ${
                    currentLanguage === language.code
                      ? "font-bold text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {language.nativeLabel}
                </button>

                {/* Separator */}
                {index < LANGUAGES.length - 1 && (
                  <span className="ml-3 text-gray-600">
                    |
                  </span>
                )}
              </div>
            ))}

          </div>

          {/* Copyright */}
          <p className="hidden text-xs text-gray-500 sm:block">
            {t("footer.copyright")}
          </p>

        </div>
      </div>

    </footer>
  );
};

export default Footer;