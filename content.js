/* ==================================================================
   CONTENT DATA — این فایل توسط پنل مدیریت محتوا ساخته/به‌روزرسانی می‌شود.
   ویرایش دستی امکان‌پذیر است، اما دقت کن ساختار JSON آن به‌هم نریزد.
   ================================================================== */
const CATEGORIES = [
  {
    "id": "vpd",
    "num": "۰۱",
    "color": "#0E6E66",
    "name": "بیماری‌های قابل پیشگیری با واکسن",
    "diseases": [
      {
        "id": "measles",
        "name": "سرخک",
        "sections": {
          "definitions": "\n            <p><strong>تعریف بیماری:</strong> سرخک یک بیماری ویروسی حاد و بسیار واگیردار است که توسط ویروس سرخک (خانواده Paramyxoviridae) ایجاد می‌شود و عمدتاً کودکان را درگیر می‌کند.</p>\n            <p><strong>راه انتقال:</strong> از طریق قطرات تنفسی (Droplet) و تماس مستقیم با ترشحات بینی و گلوی فرد آلوده؛ ویروس تا حدود ۲ ساعت در هوا یا روی سطوح باقی می‌ماند.</p>\n            <p><strong>دوره کمون:</strong> به‌طور معمول ۱۰ تا ۱۲ روز (محدوده ۷ تا ۱۸ روز) از زمان مواجهه تا بروز تب.</p>\n            <p><strong>دوره واگیری:</strong> از ۴ روز قبل تا ۴ روز بعد از شروع بثورات جلدی.</p>\n            <p><strong>علائم بالینی:</strong></p>\n            <ul>\n              <li>تب بالا (اغلب بالای ۳۸.۵ درجه)</li>\n              <li>سرفه، آبریزش بینی و التهاب ملتحمه (چشم)</li>\n              <li>لکه‌های کوپلیک (Koplik spots) در مخاط دهان، ۱ تا ۲ روز پیش از بثورات</li>\n              <li>بثورات ماکولوپاپولار قرمز که از صورت و پشت گوش شروع و به سمت تنه و اندام‌ها گسترش می‌یابد</li>\n            </ul>\n            <p><strong>تعریف مورد در نظام مراقبت:</strong></p>\n            <ul>\n              <li><strong>مورد مشکوک:</strong> هر فردی با تب و بثورات ماکولوپاپولار همراه با سرفه، آبریزش بینی یا التهاب ملتحمه</li>\n              <li><strong>مورد محتمل:</strong> مورد مشکوک با ارتباط اپیدمیولوژیک با یک مورد قطعی</li>\n              <li><strong>مورد قطعی:</strong> تأیید آزمایشگاهی (IgM یا PCR مثبت) یا ارتباط اپیدمیولوژیک با مورد تأییدشده</li>\n            </ul>\n            <p style=\"margin-top:10px;font-size:0.78rem;color:var(--ink-faint)\">⚠️ این متن نمونه‌ی آزمایشی است و باید با آخرین دستورالعمل رسمی وزارت بهداشت جایگزین شود.</p>\n          ",
          "guidelines": "\n            <p>اقدامات لازم هنگام مواجهه با مورد مشکوک سرخک باید مطابق آخرین نسخه‌ی دستورالعمل کشوری کنترل سرخک انجام شود. فایل کامل دستورالعمل رسمی (نسخه‌ی آزمایشی) در ادامه قابل دریافت است.</p>\n            <a class=\"dl-btn\" href=\"forms/measles-guideline.pdf\" target=\"_blank\" rel=\"noopener\">\n              <span class=\"dl-icon\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"6\" y=\"4\" width=\"12\" height=\"17\" rx=\"2\"/><path d=\"M9 4V3a1 1 0 011-1h4a1 1 0 011 1v1\"/><path d=\"M9 12.2l2 2 4-4.2\"/></svg></span>\n              <span class=\"dl-text\">\n                <span class=\"dl-title\">دستورالعمل رسمی سرخک (نسخه آزمایشی)</span>\n                <span class=\"dl-sub\">PDF · مشاهده یا دانلود</span>\n              </span>\n              <span class=\"dl-arrow\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M15 6l-6 6 6 6\"/></svg></span>\n            </a>\n          ",
          "forms": "\n            <p>فرم گزارش مورد مشکوک سرخک باید بلافاصله پس از شناسایی بیمار تکمیل و به کارشناس مراقبت بیماری‌های شبکه ارسال شود.</p>\n            <a class=\"dl-btn\" href=\"forms/measles-form.pdf\" target=\"_blank\" rel=\"noopener\">\n              <span class=\"dl-icon\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"5\" y=\"3\" width=\"14\" height=\"18\" rx=\"2\"/><path d=\"M8 8h8M8 12h8M8 16h5\"/></svg></span>\n              <span class=\"dl-text\">\n                <span class=\"dl-title\">فرم گزارش مورد مشکوک سرخک (نسخه آزمایشی)</span>\n                <span class=\"dl-sub\">PDF · مشاهده یا دانلود</span>\n              </span>\n              <span class=\"dl-arrow\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M15 6l-6 6 6 6\"/></svg></span>\n            </a>\n          "
        }
      },
      {
        "id": "rubella",
        "name": "سرخجه",
        "sections": {
          "definitions": "این بیماری یک بیماری واگیر دار هست که از طریق تنفسی انتقال پیدا می کند",
          "guidelines": "<a class=\"dl-btn\" href=\"forms/rubella-guideline.pdf\" target=\"_blank\" rel=\"noopener\">\n  <span class=\"dl-icon\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"6\" y=\"4\" width=\"12\" height=\"17\" rx=\"2\"/><path d=\"M9 4V3a1 1 0 011-1h4a1 1 0 011 1v1\"/><path d=\"M9 12.2l2 2 4-4.2\"/></svg></span>\n  <span class=\"dl-text\">\n    <span class=\"dl-title\">دستورالعمل رسمی</span>\n    <span class=\"dl-sub\">PDF · مشاهده یا دانلود</span>\n  </span>\n  <span class=\"dl-arrow\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M15 6l-6 6 6 6\"/></svg></span>\n</a>\n<a class=\"dl-btn\" href=\"forms/rubella-guideline-n0z1.pdf\" target=\"_blank\" rel=\"noopener\">\n  <span class=\"dl-icon\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"6\" y=\"4\" width=\"12\" height=\"17\" rx=\"2\"/><path d=\"M9 4V3a1 1 0 011-1h4a1 1 0 011 1v1\"/><path d=\"M9 12.2l2 2 4-4.2\"/></svg></span>\n  <span class=\"dl-text\">\n    <span class=\"dl-title\">پیوست فنی</span>\n    <span class=\"dl-sub\">PDF · مشاهده یا دانلود</span>\n  </span>\n  <span class=\"dl-arrow\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M15 6l-6 6 6 6\"/></svg></span>\n</a>",
          "forms": "<a class=\"dl-btn\" href=\"forms/rubella-form.pdf\" target=\"_blank\" rel=\"noopener\">\n  <span class=\"dl-icon\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"5\" y=\"3\" width=\"14\" height=\"18\" rx=\"2\"/><path d=\"M8 8h8M8 12h8M8 16h5\"/></svg></span>\n  <span class=\"dl-text\">\n    <span class=\"dl-title\">فرم سرخجه (نسخه رسمی)</span>\n    <span class=\"dl-sub\">PDF · مشاهده یا دانلود</span>\n  </span>\n  <span class=\"dl-arrow\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M15 6l-6 6 6 6\"/></svg></span>\n</a>"
        }
      },
      {
        "id": "mumps",
        "name": "اوریون",
        "sections": {
          "definitions": null,
          "guidelines": null,
          "forms": null
        }
      },
      {
        "id": "polio",
        "name": "فلج اطفال",
        "sections": {
          "definitions": null,
          "guidelines": null,
          "forms": null
        }
      },
      {
        "id": "pertussis",
        "name": "سیاه‌سرفه",
        "sections": {
          "definitions": null,
          "guidelines": null,
          "forms": null
        }
      },
      {
        "id": "diphtheria",
        "name": "دیفتری",
        "sections": {
          "definitions": null,
          "guidelines": null,
          "forms": null
        }
      },
      {
        "id": "tetanus",
        "name": "کزاز",
        "sections": {
          "definitions": null,
          "guidelines": null,
          "forms": null
        }
      },
      {
        "id": "varicella",
        "name": "آبله‌مرغان",
        "sections": {
          "definitions": null,
          "guidelines": null,
          "forms": null
        }
      }
    ]
  },
  {
    "id": "resp",
    "num": "۰۲",
    "color": "#2B5A8C",
    "name": "بیماری‌های تنفسی و تماسی",
    "diseases": [
      {
        "id": "meningitis",
        "name": "مننژیت",
        "sections": {
          "definitions": null,
          "guidelines": null,
          "forms": null
        }
      },
      {
        "id": "tb",
        "name": "سل",
        "sections": {
          "definitions": null,
          "guidelines": null,
          "forms": null
        }
      },
      {
        "id": "covid",
        "name": "کرونا",
        "sections": {
          "definitions": null,
          "guidelines": null,
          "forms": null
        }
      },
      {
        "id": "flu",
        "name": "آنفلوانزا",
        "sections": {
          "definitions": null,
          "guidelines": null,
          "forms": null
        }
      },
      {
        "id": "leprosy",
        "name": "جذام",
        "sections": {
          "definitions": null,
          "guidelines": null,
          "forms": null
        }
      }
    ]
  },
  {
    "id": "food_water",
    "num": "۰۳",
    "color": "#8A6D1B",
    "name": "بیماری‌های منتقله از آب و غذا",
    "diseases": [
      {
        "id": "cholera",
        "name": "وبا",
        "sections": {
          "definitions": null,
          "guidelines": null,
          "forms": null
        }
      },
      {
        "id": "typhoid",
        "name": "تیفوئید",
        "sections": {
          "definitions": null,
          "guidelines": null,
          "forms": null
        }
      },
      {
        "id": "hepA",
        "name": "هپاتیت A",
        "sections": {
          "definitions": null,
          "guidelines": null,
          "forms": null
        }
      },
      {
        "id": "botulism",
        "name": "بوتولیسم",
        "sections": {
          "definitions": null,
          "guidelines": null,
          "forms": null
        }
      },
      {
        "id": "foodwater_outbreak",
        "name": "طغیان بیماری‌های منتقله از آب و غذا",
        "sections": {
          "definitions": null,
          "guidelines": null,
          "forms": null
        }
      }
    ]
  },
  {
    "id": "bloodborne_hep",
    "num": "۰۴",
    "color": "#7A3B69",
    "name": "HIV و هپاتیت",
    "diseases": [
      {
        "id": "hepB",
        "name": "هپاتیت B",
        "sections": {
          "definitions": null,
          "guidelines": null,
          "forms": null
        }
      },
      {
        "id": "hepC",
        "name": "هپاتیت C",
        "sections": {
          "definitions": null,
          "guidelines": null,
          "forms": null
        }
      },
      {
        "id": "hiv",
        "name": "HIV",
        "sections": {
          "definitions": null,
          "guidelines": null,
          "forms": null
        }
      }
    ]
  },
  {
    "id": "zoonotic",
    "num": "۰۵",
    "color": "#3E6B3A",
    "name": "بیماری‌های مشترک انسان و دام (زئونوز)",
    "diseases": [
      {
        "id": "rabies",
        "name": "هاری",
        "sections": {
          "definitions": null,
          "guidelines": null,
          "forms": null
        }
      },
      {
        "id": "anthrax",
        "name": "سیاه‌زخم",
        "sections": {
          "definitions": null,
          "guidelines": null,
          "forms": null
        }
      },
      {
        "id": "ccfv",
        "name": "تب کریمه کنگو",
        "sections": {
          "definitions": null,
          "guidelines": null,
          "forms": null
        }
      },
      {
        "id": "dengue",
        "name": "تب دنگی",
        "sections": {
          "definitions": null,
          "guidelines": null,
          "forms": null
        }
      },
      {
        "id": "malaria",
        "name": "مالاریا",
        "sections": {
          "definitions": null,
          "guidelines": null,
          "forms": null
        }
      },
      {
        "id": "brucellosis",
        "name": "تب مالت",
        "sections": {
          "definitions": null,
          "guidelines": null,
          "forms": null
        }
      },
      {
        "id": "hydatid",
        "name": "کیست هیداتیک",
        "sections": {
          "definitions": null,
          "guidelines": null,
          "forms": null
        }
      }
    ]
  },
  {
    "id": "bites",
    "num": "۰۶",
    "color": "#B8631E",
    "name": "گزش جانوران زهراگین",
    "diseases": [
      {
        "id": "scorpion",
        "name": "عقرب‌زدگی",
        "sections": {
          "definitions": null,
          "guidelines": null,
          "forms": null
        }
      },
      {
        "id": "snakebite",
        "name": "مارگزیدگی",
        "sections": {
          "definitions": null,
          "guidelines": null,
          "forms": null
        }
      }
    ]
  },
  {
    "id": "other",
    "num": "۰۷",
    "color": "#5B6670",
    "name": "سایر",
    "diseases": [
      {
        "id": "pediculosis_scabies",
        "name": "پدیکلوزیس و گال",
        "sections": {
          "definitions": null,
          "guidelines": null,
          "forms": null
        }
      }
    ]
  }
];
