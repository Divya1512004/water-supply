import { useEffect, useState } from "react";
import { getStoredLanguage } from "./utils/language";

const translations: Record<string, Record<string, string>> = {
  en: {
    // Hero
    "hero.sandSupply": "Sand Supply",
    "hero.msandSupply": "M-Sand Supply",
    "hero.title": "Materials & Services",
    "hero.subtitle": "When You Need Them.",
    "hero.description":
      "Sand, M-Sand, tank water and rock materials available for your requirements with reliable delivery and service.",
    "hero.enquire": "Enquire Now",
    "hero.call": "Call Now",
    "hero.materials": "Materials",
    "hero.tankWater": "Tank Water",

    // Products
    "products.whatWeSupply": "What We Supply",
    "products.title": "Materials Available for Sale",
    "products.description":
        "Choose what you need and contact us for availability, quantity and delivery details.",

    "products.sand": "Sand",
    "products.tankWater": "Tank Water",
    "products.msand": "M-Sand",
    "products.rocks": "Rocks",

    //products card
      "products.sandDescription":
      "Quality sand supply for your requirements with convenient delivery options.",

    "products.tankWaterDescription":
      "Tank water supply and delivery available to your required location.",

    "products.msandDescription":
      "Reliable M-Sand supply available based on your required quantity.",

    "products.rocksDescription":
      "Quality Rock and blue metal materials available for supply and delivery.",

    "products.availableBy": "Available by",
    "products.enquire": "Enquire Now",
    

    // Contact
    "contact.label": "Contact Us",
    "contact.title": "Tell Us What You Need",
    "contact.subtitle":
      "Need sand, M-Sand, tank water or rock? Send your requirement and contact us.",
    "contact.call": "Call Us",
    "contact.email": "Email",
    "contact.location": "Service Location",
    "contact.hours": "Working Hours",

    // Footer
    "footer.companyDescription":
      "Sand, M-Sand, Tank water and Rock available for your requirements.",
    "footer.quickLinks": "Quick Links",
    "footer.home": "Home",
    "footer.materials": "Materials",
    "footer.contact": "Contact",
    "footer.contactTitle": "Contact",
    "footer.location": "Tiruchendur, Tamil Nadu",
    "footer.copyright":
      "© 2026 Dhanu Contracts. All rights reserved.",

      // About
      "about.label": "About Us",
      "about.title": "Your Trusted Supply & Service Partner",
      "about.description1":
        "We provide sand, M-Sand, tank water, rock and blue metal supplies based on customer requirements.",
      "about.description2":
        "Whether you need a material load, water tank delivery, our goal is to provide a simple and reliable service from enquiry to delivery.",
      "about.yearsExperience": "Years Experience",
      "about.customersServed": "Customers Served",
      "about.whyChooseUs": "Why Choose Us?",
      "about.qualityMaterials": "Quality Materials",
      "about.reliableDelivery": "Reliable Delivery",
      "about.onTimeService": "On-Time Service",
      "about.customerSatisfaction": "Customer Satisfaction",
      "about.callUs": "Call Us",
      "about.whatsappUs": "WhatsApp Us",
      "about.imageAlt": "Material supply service",

      // Quote Form
      "quote.title": "Send Your Requirement",

      "quote.subtitle":
        "Tell us what you need and we will get back to you.",

      "quote.whatsappSuccess":
        "WhatsApp opened successfully. Please send the message to complete your enquiry.",

      "quote.name": "Name",
      "quote.namePlaceholder": "Your name",

      "quote.phone": "Phone Number",
      "quote.phonePlaceholder": "Your phone number",

      "quote.requirement": "What Do You Need?",
      "quote.selectRequirement": "Select Requirement",

      "quote.sandSale": "Sand Sale",
      "quote.msandSale": "M-Sand Sale",
      "quote.tankWater": "Tank Water",
      "quote.rockBlueMetal": "Rock / Blue Metal",
      "quote.jcbService": "JCB Service",

      "quote.quantity": "Quantity / Duration",
      "quote.quantityPlaceholder": "Example: 2 loads / 5 hours",

      "quote.location": "Location",
      "quote.locationPlaceholder": "Delivery / service location",

      "quote.requiredDate": "Required Date",

      "quote.additionalDetails": "Additional Details",
      "quote.additionalDetailsPlaceholder":
        "Tell us more about your requirement...",

      "quote.submit": "Submit Requirement",

      // WhatsApp
      "quote.whatsappTitle": "New Requirement",
      "quote.whatsappName": "Name",
      "quote.whatsappPhone": "Phone",
      "quote.whatsappRequirement": "Requirement",
      "quote.whatsappQuantity": "Quantity / Duration",
      "quote.whatsappLocation": "Location",
      "quote.whatsappDate": "Required Date",
      "quote.whatsappDetails": "Additional Details",
      "quote.notSpecified": "Not specified",
      "quote.noAdditionalDetails": "No additional details",

      // Why Choose Us
        "whyChooseUs.label": "Why Choose Us",

        "whyChooseUs.title": "Simple. Reliable. Convenient.",

        "whyChooseUs.qualityTitle": "Quality Materials",
        "whyChooseUs.qualityDescription":
          "Reliable materials supplied according to your requirement.",

        "whyChooseUs.deliveryTitle": "Reliable Delivery",
        "whyChooseUs.deliveryDescription":
          "Material and water delivery available to your location.",

        "whyChooseUs.enquiryTitle": "Easy Enquiry",
        "whyChooseUs.enquiryDescription":
          "Contact us easily to check availability and service details.",

        "whyChooseUs.ratesTitle": "Competitive Rates",
        "whyChooseUs.ratesDescription":
          "Get competitive pricing based on quantity and requirement.",


          // QA / FAQ

            "qa.all": "All",
            "qa.materials": "Materials",
            "qa.orders": "Orders",
            "qa.delivery": "Delivery",
            "qa.pricing": "Pricing",
            "qa.contact": "Contact",

            "qa.noQuestions": "No questions found",
            "qa.tryDifferentKeyword": "Try searching with a different keyword.",

            "qa.stillQuestion": "Still have a question?",
            "qa.contactDescription":
              "Our team is ready to help you with materials, pricing, orders, delivery, and other requirements.",
            "qa.callNow": "Call Now",

            "qa.question.materials": "What materials do you provide?",
            "qa.answer.materials":
              "We provide a wide range of construction materials suitable for residential, commercial, and other construction projects. You can contact us for material availability and requirements.",

            "qa.question.order": "How can I order construction materials?",
            "qa.answer.order":
              "You can contact us directly through the Contact page or use the Call Now button. Share your required materials, quantity, and delivery location with us.",

            "qa.question.delivery": "Do you provide material delivery?",
            "qa.answer.delivery":
              "Yes, delivery can be arranged depending on the material, quantity, and delivery location. Contact us with your requirements to confirm the available delivery options.",

            "qa.question.price": "How do I know the price of a material?",
            "qa.answer.price":
              "Material prices can vary based on quantity, type, quality, and current market conditions. Contact us with the material details and quantity to get the latest price.",

            "qa.question.quotation": "Can I request a quotation?",
            "qa.answer.quotation":
              "Yes. Send us the list of materials and required quantities. Our team can provide the applicable quotation based on your requirements.",

            "qa.question.bulk": "Can I buy materials in bulk?",
            "qa.answer.bulk":
              "Yes, bulk requirements can be discussed with our team. Please contact us with the material name, quantity, and project requirements.",

            "qa.question.contact": "How can I contact DhanuContracts?",
            "qa.answer.contact":
              "You can contact us using the Contact page or call us directly using the Call Now button. Our team will help you with your requirements.",

            "qa.question.notListed":
              "Can I ask about a material that is not listed on the website?",
            "qa.answer.notListed":
              "Yes. If you cannot find a particular material on the website, contact us and let us know what you need. We can check the availability for you.",


    // Language
    "language.select": "Language",
  },

  ta: {
    // Hero
    "hero.sandSupply": "மணல் விநியோகம்",
    "hero.msandSupply": "M-Sand விநியோகம்",
    "hero.title": "பொருட்கள் மற்றும் சேவைகள்",
    "hero.subtitle": "உங்களுக்குத் தேவைப்படும் போது.",
    "hero.description":
      "மணல், M-Sand, டேங்க் தண்ணீர் மற்றும் பாறை பொருட்கள் நம்பகமான டெலிவரி மற்றும் சேவையுடன் கிடைக்கின்றன.",
    "hero.enquire": "விசாரிக்கவும்",
    "hero.call": "அழைக்கவும்",
    "hero.materials": "பொருட்கள்",
    "hero.tankWater": "டேங்க் தண்ணீர்",

    // Products
    "products.whatWeSupply": "நாங்கள் வழங்குவது",
    "products.title": "விற்பனைக்கு கிடைக்கும் பொருட்கள்",
    "products.description":
        "உங்களுக்கு தேவையான பொருளைத் தேர்ந்தெடுத்து, கிடைக்கும் தன்மை, அளவு மற்றும் டெலிவரி விவரங்களுக்கு எங்களைத் தொடர்பு கொள்ளுங்கள்.",

    "products.sand": "மணல்",
    "products.tankWater": "டேங்க் தண்ணீர்",
    "products.msand": "M-Sand",
    "products.rocks": "பாறைகள்",

     //products card


  "products.sandDescription":
    "உங்கள் தேவைகளுக்கு தரமான மணல் வசதியான டெலிவரி விருப்பங்களுடன் கிடைக்கிறது.",

  "products.tankWaterDescription":
    "உங்கள் தேவையான இடத்திற்கு டேங்க் தண்ணீர் விநியோகம் மற்றும் டெலிவரி கிடைக்கிறது.",

  "products.msandDescription":
    "உங்கள் தேவையான அளவிற்கு நம்பகமான M-Sand விநியோகம் கிடைக்கிறது.",

  "products.rocksDescription":
    "தரமான பாறைகள் மற்றும் ப்ளூ மெட்டல் பொருட்கள் விநியோகம் மற்றும் டெலிவரிக்கு கிடைக்கின்றன.",

  "products.availableBy": "கிடைக்கும் அளவு",
  "products.enquire": "விசாரிக்கவும்",

    
    // Contact
    "contact.label": "தொடர்பு கொள்ளுங்கள்",
    "contact.title": "உங்களுக்கு என்ன தேவை என்று சொல்லுங்கள்",
    "contact.subtitle":
      "மணல், M-Sand, டேங்க் தண்ணீர் அல்லது பாறைகள் தேவையா? உங்கள் தேவையை எங்களுக்கு அனுப்புங்கள்.",
    "contact.call": "எங்களை அழைக்கவும்",
    "contact.email": "மின்னஞ்சல்",
    "contact.location": "சேவை இடம்",
    "contact.hours": "வேலை நேரம்",

      // Footer
      "footer.companyDescription":
        "உங்கள் தேவைகளுக்கான மணல், M-Sand, டேங்க் தண்ணீர் மற்றும் பாறை பொருட்கள் கிடைக்கின்றன.",
      "footer.quickLinks": "விரைவு இணைப்புகள்",
      "footer.home": "முகப்பு",
      "footer.materials": "பொருட்கள்",
      "footer.contact": "தொடர்பு",
      "footer.contactTitle": "தொடர்பு",
      "footer.location": "திருச்செந்தூர், தமிழ்நாடு",
      "footer.copyright":
        "© 2026 தனு கான்ட்ராக்ட்ஸ். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",

        // About
    "about.label": "எங்களைப் பற்றி",
    "about.title": "உங்கள் நம்பகமான பொருள் விநியோக மற்றும் சேவை கூட்டாளர்",
    "about.description1":
      "வாடிக்கையாளர்களின் தேவைகளுக்கு ஏற்ப மணல், M-Sand, டேங்க் தண்ணீர், பாறைகள் மற்றும் ப்ளூ மெட்டல்  சேவைகளையும் வழங்குகிறோம்.",
    "about.description2":
      "உங்களுக்கு பொருள் லோடு, தண்ணீர் டேங்க் டெலிவரி எதுவாக இருந்தாலும், விசாரணையிலிருந்து டெலிவரி வரை எளிமையான மற்றும் நம்பகமான சேவையை வழங்குவதே எங்கள் நோக்கம்.",
    "about.yearsExperience": "ஆண்டுகள் அனுபவம்",
    "about.customersServed": "வாடிக்கையாளர்கள்",
    "about.whyChooseUs": "எங்களை ஏன் தேர்வு செய்ய வேண்டும்?",
    "about.qualityMaterials": "தரமான பொருட்கள்",
    "about.reliableDelivery": "நம்பகமான டெலிவரி",
    "about.onTimeService": "சரியான நேரத்தில் சேவை",
    "about.customerSatisfaction": "வாடிக்கையாளர் திருப்தி",
    "about.callUs": "அழைக்கவும்",
    "about.whatsappUs": "WhatsApp மூலம் தொடர்பு கொள்ளவும்",
    "about.imageAlt": "பொருள் விநியோக சேவை",

    // Quote Form
      "quote.title": "உங்கள் தேவையை அனுப்புங்கள்",

      "quote.subtitle":
        "உங்களுக்கு தேவையானதை தெரிவியுங்கள். நாங்கள் உங்களைத் தொடர்பு கொள்கிறோம்.",

      "quote.whatsappSuccess":
        "WhatsApp வெற்றிகரமாக திறக்கப்பட்டது. உங்கள் விசாரணையை முடிக்க செய்தியை அனுப்பவும்.",

      "quote.name": "பெயர்",
      "quote.namePlaceholder": "உங்கள் பெயர்",

      "quote.phone": "தொலைபேசி எண்",
      "quote.phonePlaceholder": "உங்கள் தொலைபேசி எண்ணை உள்ளிடவும்",

      "quote.requirement": "உங்களுக்கு என்ன தேவை?",
      "quote.selectRequirement": "தேவையைத் தேர்ந்தெடுக்கவும்",

      "quote.sandSale": "மணல் விற்பனை",
      "quote.msandSale": "M-Sand விற்பனை",
      "quote.tankWater": "டேங்க் தண்ணீர்",
      "quote.rockBlueMetal": "பாறைகள் / ப்ளூ மெட்டல்",
      "quote.jcbService": "JCB சேவை",

      "quote.quantity": "அளவு / கால அளவு",
      "quote.quantityPlaceholder": "உதாரணம்: 2 லோடுகள் / 5 மணி நேரம்",

      "quote.location": "இடம்",
      "quote.locationPlaceholder": "டெலிவரி / சேவை இடம்",

      "quote.requiredDate": "தேவையான தேதி",

      "quote.additionalDetails": "கூடுதல் விவரங்கள்",
      "quote.additionalDetailsPlaceholder":
        "உங்கள் தேவையைப் பற்றி மேலும் தெரிவிக்கவும்...",

      "quote.submit": "தேவையைச் சமர்ப்பிக்கவும்",

      // WhatsApp
      "quote.whatsappTitle": "புதிய தேவை",
      "quote.whatsappName": "பெயர்",
      "quote.whatsappPhone": "தொலைபேசி",
      "quote.whatsappRequirement": "தேவை",
      "quote.whatsappQuantity": "அளவு / கால அளவு",
      "quote.whatsappLocation": "இடம்",
      "quote.whatsappDate": "தேவையான தேதி",
      "quote.whatsappDetails": "கூடுதல் விவரங்கள்",
      "quote.notSpecified": "குறிப்பிடப்படவில்லை",
      "quote.noAdditionalDetails": "கூடுதல் விவரங்கள் இல்லை",

      // Why Choose Us
        "whyChooseUs.label": "எங்களை ஏன் தேர்வு செய்ய வேண்டும்?",

        "whyChooseUs.title": "எளிமையானது. நம்பகமானது. வசதியானது.",

        "whyChooseUs.qualityTitle": "தரமான பொருட்கள்",
        "whyChooseUs.qualityDescription":
          "உங்கள் தேவைக்கேற்ப நம்பகமான தரமான பொருட்கள் வழங்கப்படுகின்றன.",

        "whyChooseUs.deliveryTitle": "நம்பகமான டெலிவரி",
        "whyChooseUs.deliveryDescription":
          "உங்கள் தேவையான இடத்திற்கு பொருட்கள் மற்றும் தண்ணீர் டெலிவரி கிடைக்கிறது.",

        "whyChooseUs.enquiryTitle": "எளிய விசாரணை",
        "whyChooseUs.enquiryDescription":
          "கிடைக்கும் தன்மை மற்றும் சேவை விவரங்களை அறிய எங்களை எளிதாக தொடர்பு கொள்ளலாம்.",

        "whyChooseUs.ratesTitle": "சிறந்த விலைகள்",
        "whyChooseUs.ratesDescription":
          "அளவு மற்றும் தேவைக்கேற்ப போட்டித்தன்மையான விலைகளைப் பெறலாம்.",


          // QA / FAQ

        "qa.all": "அனைத்தும்",
        "qa.materials": "பொருட்கள்",
        "qa.orders": "ஆர்டர்கள்",
        "qa.delivery": "டெலிவரி",
        "qa.pricing": "விலை",
        "qa.contact": "தொடர்பு",

        "qa.noQuestions": "கேள்விகள் எதுவும் கிடைக்கவில்லை",
        "qa.tryDifferentKeyword":
          "வேறு முக்கிய வார்த்தையை பயன்படுத்தி தேடிப் பார்க்கவும்.",

        "qa.stillQuestion": "இன்னும் கேள்வி உள்ளதா?",
        "qa.contactDescription":
          "பொருட்கள், விலை, ஆர்டர்கள், டெலிவரி மற்றும் பிற தேவைகளுக்கு எங்கள் குழு உங்களுக்கு உதவ தயாராக உள்ளது.",
        "qa.callNow": "இப்போது அழைக்கவும்",

        "qa.question.materials": "நீங்கள் எந்த பொருட்களை வழங்குகிறீர்கள்?",
        "qa.answer.materials":
          "வீட்டு, வணிக மற்றும் பிற கட்டுமான திட்டங்களுக்கு ஏற்ற பல்வேறு கட்டுமான பொருட்களை நாங்கள் வழங்குகிறோம். பொருட்களின் கிடைக்கும் தன்மை மற்றும் தேவைகள் குறித்து எங்களைத் தொடர்பு கொள்ளலாம்.",

        "qa.question.order": "கட்டுமான பொருட்களை எப்படி ஆர்டர் செய்வது?",
        "qa.answer.order":
          "Contact பக்கம் மூலம் எங்களை நேரடியாக தொடர்பு கொள்ளலாம் அல்லது Call Now பொத்தானைப் பயன்படுத்தலாம். தேவையான பொருட்கள், அளவு மற்றும் டெலிவரி இடத்தை எங்களுடன் பகிர்ந்து கொள்ளுங்கள்.",

        "qa.question.delivery": "பொருட்களை டெலிவரி செய்து தருகிறீர்களா?",
        "qa.answer.delivery":
          "ஆம். பொருள், அளவு மற்றும் டெலிவரி இடத்தைப் பொறுத்து டெலிவரி ஏற்பாடு செய்யலாம். கிடைக்கும் டெலிவரி விருப்பங்களை உறுதிப்படுத்த உங்கள் தேவைகளை எங்களுடன் பகிர்ந்து கொள்ளுங்கள்.",

        "qa.question.price": "ஒரு பொருளின் விலையை எப்படி தெரிந்து கொள்வது?",
        "qa.answer.price":
          "பொருளின் அளவு, வகை, தரம் மற்றும் தற்போதைய சந்தை நிலவரத்தைப் பொறுத்து விலை மாறுபடலாம். சமீபத்திய விலையை அறிய பொருளின் விவரம் மற்றும் அளவை எங்களிடம் தெரிவிக்கவும்.",

        "qa.question.quotation": "விலை மேற்கோளை பெற முடியுமா?",
        "qa.answer.quotation":
          "ஆம். தேவையான பொருட்கள் மற்றும் அவற்றின் அளவுகளின் பட்டியலை எங்களுக்கு அனுப்புங்கள். உங்கள் தேவைக்கேற்ப பொருத்தமான விலை மேற்கோளை எங்கள் குழு வழங்கும்.",

        "qa.question.bulk": "பொருட்களை மொத்தமாக வாங்க முடியுமா?",
        "qa.answer.bulk":
          "ஆம். மொத்த தேவைகள் குறித்து எங்கள் குழுவுடன் பேசலாம். பொருளின் பெயர், அளவு மற்றும் திட்டத்தின் தேவைகளை எங்களிடம் தெரிவிக்கவும்.",

        "qa.question.contact": "DhanuContracts-ஐ எப்படி தொடர்பு கொள்வது?",
        "qa.answer.contact":
          "Contact பக்கம் மூலம் எங்களைத் தொடர்பு கொள்ளலாம் அல்லது Call Now பொத்தானைப் பயன்படுத்தி நேரடியாக அழைக்கலாம். உங்கள் தேவைகளுக்கு எங்கள் குழு உதவும்.",

        "qa.question.notListed":
          "வலைத்தளத்தில் பட்டியலிடப்படாத பொருள் குறித்து கேட்க முடியுமா?",
        "qa.answer.notListed":
          "ஆம். வலைத்தளத்தில் குறிப்பிட்ட பொருள் கிடைக்கவில்லை என்றால், உங்களுக்கு தேவையான பொருளை எங்களிடம் தெரிவிக்கவும். அதன் கிடைக்கும் தன்மையை நாங்கள் சரிபார்த்து தெரிவிக்கலாம்.",



    // Language
    "language.select": "மொழி",
  },

};

let currentLang: string = getStoredLanguage();

const listeners: Set<() => void> = new Set();

export function subscribeToLang(fn: () => void): () => void {
  listeners.add(fn);

  return () => {
    listeners.delete(fn);
  };
}

function notifyListeners() {
  listeners.forEach((fn) => fn());
}

export function syncLang(): void {
  currentLang = getStoredLanguage();
  notifyListeners();
}

if (typeof window !== "undefined") {
  window.addEventListener("languagechange", (event: Event) => {
    const detail = (event as CustomEvent<{ code: string }>).detail;

    currentLang = detail.code;

    notifyListeners();
  });
}

export function t(key: string, forceLang?: string): string {
  const lang = forceLang ?? currentLang;

  return (
    translations[lang]?.[key] ??
    translations["en"]?.[key] ??
    key
  );
}

export function useTranslation() {
  const [, forceUpdate] = useState(0);

  useEffect(() => {
    const unsubscribe = subscribeToLang(() => {
      forceUpdate((value) => value + 1);
    });

    return unsubscribe;
  }, []);

  return { t };
}

export default t;