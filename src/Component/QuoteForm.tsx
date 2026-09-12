

// import { FormEvent, useState } from "react";

// interface QuoteFormData {
//   name: string;
//   phone: string;
//   requirement: string;
//   quantity: string;
//   location: string;
//   date: string;
//   message: string;
// }

// const QuoteForm = () => {
//   const [formData, setFormData] = useState<QuoteFormData>({
//     name: "",
//     phone: "",
//     requirement: "",
//     quantity: "",
//     location: "",
//     date: "",
//     message: "",
//   });

//   const [success, setSuccess] = useState(false);

//   const handleChange = (
//     event: React.ChangeEvent<
//       HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
//     >
//   ) => {
//     const { name, value } = event.target;

//     setFormData((previous) => ({
//       ...previous,
//       [name]: value,
//     }));

//     setSuccess(false);
//   };

//   const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     // Your WhatsApp number
//     // Country code +91, without + or spaces
//     const whatsappNumber = "916385407797";

//     // Create WhatsApp message
//     const whatsappMessage = `
// New Requirement

// Name: ${formData.name}
// Phone: ${formData.phone}
// Requirement: ${formData.requirement}
// Quantity / Duration: ${formData.quantity || "Not specified"}
// Location: ${formData.location}
// Required Date: ${formData.date || "Not specified"}
// Additional Details: ${formData.message || "No additional details"}
//     `.trim();

//     // Encode message for WhatsApp URL
//     const encodedMessage = encodeURIComponent(whatsappMessage);

//     // WhatsApp URL
//     const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

//     // Open WhatsApp
//     window.open(whatsappURL, "_blank");

//     // Show success message
//     setSuccess(true);

//     // Clear form
//     setFormData({
//       name: "",
//       phone: "",
//       requirement: "",
//       quantity: "",
//       location: "",
//       date: "",
//       message: "",
//     });
//   };

//   return (
//     <div className="rounded-2xl bg-white p-6 shadow-xl sm:p-8">
//       <h3 className="text-2xl font-bold text-gray-900">
//         Send Your Requirement
//       </h3>

//       <p className="mt-2 text-gray-600">
//         Tell us what you need and we will get back to you.
//       </p>

//       {success && (
//         <div className="mt-5 rounded-lg bg-green-50 p-4 text-sm font-medium text-green-700">
//           WhatsApp opened successfully. Please send the message to complete
//           your enquiry.
//         </div>
//       )}

//       <form onSubmit={handleSubmit} className="mt-6 space-y-5">
//         <div className="grid gap-5 sm:grid-cols-2">

//           {/* Name */}
//           <div>
//             <label className="mb-2 block font-medium text-gray-700">
//               Name
//             </label>

//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               placeholder="Your name"
//               className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
//             />
//           </div>

//           {/* Phone */}
//           <div>
//             <label className="mb-2 block font-medium text-gray-700">
//               Phone Number
//             </label>

//             <input
//               type="tel"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               required
//               placeholder="Your phone number"
//               className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
//             />
//           </div>

//           {/* Requirement */}
//           <div>
//             <label className="mb-2 block font-medium text-gray-700">
//               What Do You Need?
//             </label>

//             <select
//               name="requirement"
//               value={formData.requirement}
//               onChange={handleChange}
//               required
//               className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-orange-500"
//             >
//               <option value="">Select Requirement</option>
//               <option value="Sand Sale">Sand Sale</option>
//               <option value="M-Sand Sale">M-Sand Sale</option>
//               <option value="Tank Water">Tank Water</option>
//               <option value="Rock / Blue Metal">
//                 Rock / Blue Metal
//               </option>
//               <option value="JCB Service">JCB Service</option>
//             </select>
//           </div>

//           {/* Quantity */}
//           <div>
//             <label className="mb-2 block font-medium text-gray-700">
//               Quantity / Duration
//             </label>

//             <input
//               type="text"
//               name="quantity"
//               value={formData.quantity}
//               onChange={handleChange}
//               placeholder="Example: 2 loads / 5 hours"
//               className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
//             />
//           </div>

//           {/* Location */}
//           <div>
//             <label className="mb-2 block font-medium text-gray-700">
//               Location
//             </label>

//             <input
//               type="text"
//               name="location"
//               value={formData.location}
//               onChange={handleChange}
//               required
//               placeholder="Delivery / service location"
//               className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
//             />
//           </div>

//           {/* Date */}
//           <div>
//             <label className="mb-2 block font-medium text-gray-700">
//               Required Date
//             </label>

//             <input
//               type="date"
//               name="date"
//               value={formData.date}
//               onChange={handleChange}
//               className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
//             />
//           </div>
//         </div>

//         {/* Additional Details */}
//         <div>
//           <label className="mb-2 block font-medium text-gray-700">
//             Additional Details
//           </label>

//           <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             rows={4}
//             placeholder="Tell us more about your requirement..."
//             className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
//           />
//         </div>

//         {/* Submit */}
//         <button
//           type="submit"
//           className="w-full rounded-lg bg-orange-500 px-6 py-3 font-bold text-white transition hover:bg-orange-600"
//         >
//           Submit Requirement
//         </button>
//       </form>
//     </div>
//   );
// };

// export default QuoteForm;


import { FormEvent, useState } from "react";
import { useTranslation } from "../i18n";

interface QuoteFormData {
  name: string;
  phone: string;
  requirement: string;
  quantity: string;
  location: string;
  date: string;
  message: string;
}

const QuoteForm = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState<QuoteFormData>({
    name: "",
    phone: "",
    requirement: "",
    quantity: "",
    location: "",
    date: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSuccess(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // WhatsApp number
    const whatsappNumber = "916385407797";

    // Create WhatsApp message
    const whatsappMessage = `
${t("quote.whatsappTitle")}

${t("quote.whatsappName")}: ${formData.name}
${t("quote.whatsappPhone")}: ${formData.phone}
${t("quote.whatsappRequirement")}: ${formData.requirement}
${t("quote.whatsappQuantity")}: ${
      formData.quantity || t("quote.notSpecified")
    }
${t("quote.whatsappLocation")}: ${formData.location}
${t("quote.whatsappDate")}: ${
      formData.date || t("quote.notSpecified")
    }
${t("quote.whatsappDetails")}: ${
      formData.message || t("quote.noAdditionalDetails")
    }
    `.trim();

    // Encode WhatsApp message
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");

    // Show success message
    setSuccess(true);

    // Clear form
    setFormData({
      name: "",
      phone: "",
      requirement: "",
      quantity: "",
      location: "",
      date: "",
      message: "",
    });
  };

  return (
    <div className="rounded-2xl bg-white p-6 shadow-xl sm:p-8">

      {/* Title */}
      <h3 className="text-2xl font-bold text-gray-900">
        {t("quote.title")}
      </h3>

      {/* Subtitle */}
      <p className="mt-2 text-gray-600">
        {t("quote.subtitle")}
      </p>

      {/* Success Message */}
      {success && (
        <div className="mt-5 rounded-lg bg-green-50 p-4 text-sm font-medium text-green-700">
          {t("quote.whatsappSuccess")}
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-6 space-y-5">

        <div className="grid gap-5 sm:grid-cols-2">

          {/* Name */}
          <div>
            <label className="mb-2 block font-medium text-gray-700">
              {t("quote.name")}
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder={t("quote.namePlaceholder")}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="mb-2 block font-medium text-gray-700">
              {t("quote.phone")}
            </label>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder={t("quote.phonePlaceholder")}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
            />
          </div>

          {/* Requirement */}
          <div>
            <label className="mb-2 block font-medium text-gray-700">
              {t("quote.requirement")}
            </label>

            <select
              name="requirement"
              value={formData.requirement}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-orange-500"
            >
              <option value="">
                {t("quote.selectRequirement")}
              </option>

              <option value="Sand Sale">
                {t("quote.sandSale")}
              </option>

              <option value="M-Sand Sale">
                {t("quote.msandSale")}
              </option>

              <option value="Tank Water">
                {t("quote.tankWater")}
              </option>

              <option value="Rock / Blue Metal">
                {t("quote.rockBlueMetal")}
              </option>

              <option value="JCB Service">
                {t("quote.jcbService")}
              </option>
            </select>
          </div>

          {/* Quantity */}
          <div>
            <label className="mb-2 block font-medium text-gray-700">
              {t("quote.quantity")}
            </label>

            <input
              type="text"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              placeholder={t("quote.quantityPlaceholder")}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
            />
          </div>

          {/* Location */}
          <div>
            <label className="mb-2 block font-medium text-gray-700">
              {t("quote.location")}
            </label>

            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              placeholder={t("quote.locationPlaceholder")}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
            />
          </div>

          {/* Date */}
          <div>
            <label className="mb-2 block font-medium text-gray-700">
              {t("quote.requiredDate")}
            </label>

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
            />
          </div>

        </div>

        {/* Additional Details */}
        <div>
          <label className="mb-2 block font-medium text-gray-700">
            {t("quote.additionalDetails")}
          </label>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            placeholder={t("quote.additionalDetailsPlaceholder")}
            className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full rounded-lg bg-orange-500 px-6 py-3 font-bold text-white transition hover:bg-orange-600"
        >
          {t("quote.submit")}
        </button>

      </form>
    </div>
  );
};

export default QuoteForm;