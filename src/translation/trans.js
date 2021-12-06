import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translations: {
          "Download": "Download",
          "section1": "Create avatar",
          "section2": "Create text field",
          "section2_placeholder": "Type something in...",
          "section3": "Create timeline",
          "tips": "Use on PC only. User guide:",
          "todo": "Todo: 41 74 62 61 73 68 (Xivzgv grnvormv gvnkozgv, xovzm fk xlwv, rnkovnvmg olxzo hgliztv gl hzev hgzgv ru szev grnv)"
        }
      },
      vi: {
        translations: {
          "Download": "Tải xuống",
          "section1": "Tạo ảnh đại diện",
          "section2": "Tạo trường nhập liệu",
          "section2_placeholder": "Gõ vào đây...",
          "section3": "Tạo dòng thời gian",
          "tips": "Sử dụng trên PC. Hướng dẫn người dùng:",
          "todo": "Todo: 41 74 62 61 73 68 (Xivzgv grnvormv gvnkozgv, xovzm fk xlwv, rnkovnvmg olxzo hgliztv gl hzev hgzgv ru szev grnv)"
        }
      }
    },
    fallbackLng: "en",
    debug: false,

    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false,

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;