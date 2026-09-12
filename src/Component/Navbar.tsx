
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faBars,
//   faXmark,
//   faPhone,
// } from "@fortawesome/free-solid-svg-icons";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
//       <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        
//         <Link to="/" className="text-2xl font-extrabold tracking-tight text-gray-900">
//           Dhanu<span className="text-orange-500">Contracts</span>
//         </Link>

//         <div className="hidden items-center gap-8 md:flex">
//           <Link
//             to="/"
//             className="font-medium text-gray-700 transition hover:text-orange-500"
//           >
//             Home
//           </Link>

//           <Link
//             to="/products"
//             className="font-medium text-gray-700 transition hover:text-orange-500"
//           >
//             Materials
//           </Link>
          
//           <Link
//             to="/about"
//             className="font-medium text-gray-700 transition hover:text-orange-500"
//           >
//             About
//           </Link>

//           <Link
//             to="/contact"
//             className="font-medium text-gray-700 transition hover:text-orange-500"
//           >
//             Contact
//           </Link>

//           <a
//             href="tel:+916385407797"
//             className="flex items-center gap-2 rounded-lg bg-orange-500 px-5 py-2.5 font-semibold text-white transition hover:bg-orange-600"
//           >
//             <FontAwesomeIcon icon={faPhone} />
//             Call Now
//           </a>
//         </div>

//         <button
//           type="button"
//           onClick={() => setIsOpen((prev) => !prev)}
//           className="text-2xl text-gray-800 md:hidden"
//           aria-label="Toggle menu"
//         >
//           <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
//         </button>
//       </div>

//       {isOpen && (
//         <div className="border-t border-gray-200 bg-white px-5 py-5 md:hidden">
//           <div className="flex flex-col gap-4">
//             <Link onClick={() => setIsOpen(false)} to="/">
//               Home
//             </Link>

//             <Link onClick={() => setIsOpen(false)} to="/products">
//               Materials
//             </Link>

//             <Link onClick={() => setIsOpen(false)} to="/services">
//               JCB Service
//             </Link>

//             <Link onClick={() => setIsOpen(false)} to="/about">
//               About
//             </Link>

//             <Link onClick={() => setIsOpen(false)} to="/contact">
//               Contact
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      {/* Navbar Header */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="text-xl font-extrabold tracking-tight text-gray-900 sm:text-2xl"
        >
          Dhanu<span className="text-orange-500">Contracts</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">

          <Link
            to="/"
            className="font-medium text-gray-700 transition hover:text-orange-500"
          >
            Home
          </Link>

          <Link
            to="/products"
            className="font-medium text-gray-700 transition hover:text-orange-500"
          >
            Materials
          </Link>

          <Link
            to="/about"
            className="font-medium text-gray-700 transition hover:text-orange-500"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="font-medium text-gray-700 transition hover:text-orange-500"
          >
            Contact
          </Link>

          {/* Desktop Call Button */}
          <a
            href="tel:+916385407797"
            className="flex items-center gap-2 rounded-lg bg-orange-500 px-5 py-2.5 font-semibold text-white transition hover:bg-orange-600"
          >
            <FontAwesomeIcon icon={faPhone} />
            Call Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-xl text-gray-800 transition hover:bg-gray-100 md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-gray-200 bg-white shadow-md md:hidden">
          <div className="px-4 py-4">

            {/* Home */}
            <Link
              to="/"
              onClick={closeMenu}
              className="block rounded-lg px-4 py-3 font-medium text-gray-700 transition hover:bg-orange-50 hover:text-orange-500"
            >
              Home
            </Link>

            {/* Materials */}
            <Link
              to="/products"
              onClick={closeMenu}
              className="block rounded-lg px-4 py-3 font-medium text-gray-700 transition hover:bg-orange-50 hover:text-orange-500"
            >
              Materials
            </Link>

            {/* About */}
            <Link
              to="/about"
              onClick={closeMenu}
              className="block rounded-lg px-4 py-3 font-medium text-gray-700 transition hover:bg-orange-50 hover:text-orange-500"
            >
              About
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              onClick={closeMenu}
              className="block rounded-lg px-4 py-3 font-medium text-gray-700 transition hover:bg-orange-50 hover:text-orange-500"
            >
              Contact
            </Link>

            {/* Mobile Call Button */}
            <a
              href="tel:+916385407797"
              onClick={closeMenu}
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-orange-500 px-5 py-3 font-semibold text-white transition hover:bg-orange-600"
            >
              <FontAwesomeIcon icon={faPhone} />
              Call Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;