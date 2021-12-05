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
          "tips": "Tip: Drag avatar's width to full page to see preview correctly then drag it smaller again",
          "todo": "Create timeline template, clean up code"
        }
      },
      vi: {
        translations: {
          "Download": "Tải xuống",
          "section1": "Tạo ảnh đại diện",
          "section2": "Tạo trường nhập liệu",
          "section2_placeholder": "Gõ vào đây...",
          "section3": "Tạo dòng thời gian",
          "tips": "Tip: Kéo ảnh đại diện tới hết chiều dài trang giấy để hiện đúng xem trước rồi kéo nhỏ lại",
          "todo": "Tạo mẫu dòng thời gian, tối ưu code"
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