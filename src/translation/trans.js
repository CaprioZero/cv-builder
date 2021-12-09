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
          "section2_placeholder": "Unleash your MS Word skill",
          "section3": "Create timeline",
          "s3_popup": "Describe your activities history then & now",
          "s3_button": "Input data",
          "s3_year": "Enter year/date",
          "s3_position": "Enter position title",
          "s3_description": "Enter description",
          "s3_add": "Add",
          "s3_delete": "Delete",
          "s3_note": "Please add two sections or more, thanks",
          "s3_close": "Apply & Close",
          "tips": "Use on PC only. User guide (If needed):",
          "todo": "Todo: 41 74 62 61 73 68 (X̶i̶v̶z̶g̶v̶ ̶g̶r̶n̶v̶o̶r̶m̶v̶ ̶g̶v̶n̶k̶o̶z̶g̶v̶ , xovzm fk xlwv, rnkovnvmg olxzo hgliztv gl hzev hgzgv ru szev grnv)"
        }
      },
      vi: {
        translations: {
          "Download": "Tải xuống",
          "section1": "Tạo ảnh đại diện",
          "section2": "Tạo trường nhập liệu",
          "section2_placeholder": "Khai phóng trình MS Word",
          "section3": "Tạo dòng thời gian",
          "s3_popup": "Mô tả lịch sử hoạt động trước tới nay của bạn",
          "s3_button": "Nhập thông tin",
          "s3_year": "Nhập thời gian",
          "s3_position": "Nhập tên chức vụ",
          "s3_description": "Nhập mô tả chức vụ",
          "s3_add": "Thêm",
          "s3_delete": "Xóa",
          "s3_note": "Xin hãy tạo 2 mục hoặc hơn, tks",
          "s3_close": "Lưu & Thoát",
          "tips": "Chỉ dùng trên PC. Hướng dẫn người dùng (nếu cần):",
          "todo": "Todo: 41 74 62 61 73 68 (X̶i̶v̶z̶g̶v̶ ̶g̶r̶n̶v̶o̶r̶m̶v̶ ̶g̶v̶n̶k̶o̶z̶g̶v̶ , xovzm fk xlwv, rnkovnvmg olxzo hgliztv gl hzev hgzgv ru szev grnv)"
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