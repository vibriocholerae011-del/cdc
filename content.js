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
          "definitions": "<p><b>۱. کلیات و اپیدمیولوژی</b></p><p><ul><li><b>فوریت بالینی:</b> عقرب‌گزیدگی یکی از فوریت‌های پزشکی تهدیدکننده حیات است که بیشترین آمار مرگ‌ومیر و عوارض شدید آن در کودکان کمتر از ۶ سال رخ می‌دهد.</li><li><b>آمار و پراکندگی:</b> ایران با ثبت سالانه حدود ۵۰,۰۰۰ مورد گزش، در رتبه دوم یا سوم جهان قرار دارد. بیشترین میزان گزش در استان‌های خوزستان، سیستان و بلوچستان، هرمزگان، کرمان و فارس گزارش می‌شود.</li></ul></p><p><b>گونه‌های سمی اصلی در ایران:</b></p><p><ul><li><b>عقرب گادیم (Hemiscorpius Lepturus):</b> از خانواده اسکورپيونیده؛ خطرناک‌ترین عقرب ایران که سم آن سیتوتوکسیک (تخریب‌کننده سلولی و همولیتیک) است.</li><li><b>عقرب سیاه بزرگ (Androctonus Crassicauda) و عقرب توسن (Mesobuthus Eupeus): از خانواده بوتیده؛</b> دارای سم نوروتوکسیک (عصبی) هستند.</li></ul></p><p><b>۲. علائم بالینی (تظاهرات موضعی و سیستمیک)</b></p><p><b>علائم موضعی:</b></p><p><ul><li><b>درد شدید و آنی:</b> مشخصه بارز گزش عقرب‌های خانواده بوتیده (سیاه و توسن) است که باعث مراجعه سریع بیمار می‌شود.</li><li><b>گزش فاقد درد اولیه (خطرناک): </b>مشخصه عقرب گادیم است. نیش کوچک و بی‌درد گادیم باعث سهل‌انگاری و تأخیر در مراجعه بیمار شده، در حالی که سم در حال تخریب بافت‌های زیرجلدی است و بعد از ساعت‌ها به صورت تاول، اریتم، اکیموز شدید و نهایتاً نکروز وسیع و گانگرن پوستی ظاهر می‌شود.</li></ul></p><p><b>علائم سیستمیک (بر اساس نوع زهر):</b></p><p><ul><li><b>طوفان خودمختار (نوروتوکسیک):</b> شامل دو فاز است؛ ابتدا تحریک پاراسمپاتیک (کولینرژیک) شامل تنگی نفس، تعریق شدید، اشک‌ریزش، افزایش بزاق و ترشحات ریوی، تنگی مردمک، افت فشار خون و پریاپیسم. سپس تحریک سمپاتیک (آدرنرژیک) شامل تاکیکاردی، افزایش شدید فشار خون، خشکی دهان، گشادی مردمک و عوارض ریوی وخیم مانند ARDS (سندرم دیسترس تنفسی حاد) و ادم حاد ریه. تشنج و کاهش سطح هوشیاری نیز از عوارض مغزی شایع به‌ویژه در کودکان است.</li><li><b>سندرم تخریب سلولی و خون (سیتوتوکسیک - مخصوص گادیم):</b> همولیز شدید گلبول‌های قرمز، زردی ملتحمه، اختلالات پوستی وسیع، رابدومیولیز و بارزترین علامت بالینی یعنی هموگلوبینوری (ادرار تیره به رنگ شربت آلبالو) که به سمت نارسایی حاد کلیه پیش می‌رود.</li></ul></p><p><b>۳. پروتکل تشخیص بالینی و پایش در اورژانس</b></p><p><ul><li><b>مبنای تشخیص:</b> شرح حال گزش، محیط زندگی، فصل سال (عمدتاً بهار و تابستان) و بررسی علائم بالینی موضعی و عمومی.</li><li><b>هشدار حیاتی:</b> پزشک معالج هرگز نباید فریب حال عمومی خوب اولیه بیمار را بخورد. تأخیر در شروع درمان به دلیل بی‌درد بودن گزش عقرب گادیم، علت اصلی مرگ‌ومیر بالا در مناطق جنوبی است.</li></ul></p><p><b>بررسی‌های آزمایشگاهی الزامی:</b></p><p><b>گزش با عقرب سیاه/توسن:</b> بررسی الکترولیت‌ها (سدیم، پتاسیم، کلسیم)، CBC، BUN، Cr و آنالیز کامل ادرار (U/A).</p><p><b>گزش با عقرب گادیم:</b> آزمایش‌های CBC، BUN، Cr، الکترولیت‌ها (Na, K, Ca)، تست‌های انعقادی (PT, PTT, INR)، بررسی Ph خون و آنالیز ادرار در بدو ورود الزامی است.</p><p><b>پروتکل تکرار آزمایش‌ها در ۲۴ ساعت اول (بسیار حیاتی):</b> آنالیز ادرار باید هر ۳ ساعت یک‌بار (جهت پایش همولیز مخفی) و آزمایش CBC و تست‌های انعقادی هر ۶ تا ۱۲ ساعت یک‌بار تکرار و ارزیابی شوند.</p><p><b>۴. پروتکل درمانی و اقدامات دارویی</b></p><p><b>اقدامات ممنوعه:</b> تیغ زدن، بریدن، مکیدن محل نیش، استفاده از یخ یا بستن تورنیکت سفت (گارو) کاملاً ممنوع است.</p><p><b>الف) درمان موضعی (کنترل درد):</b></p><p>تزریق ۲ تا ۳ میلی‌لیتر لیدوکائین ۱ یا ۲ درصد&nbsp; در محل نیش جهت تسکین درد شدید موضعی.</p><p>استفاده از روغن حنا یا پماد آلفا بر روی عوارض پوستی و نکرور ناشی از گادیم جهت تسریع بهبود بسیار مؤثر است.</p><p><b>ب) پروتکل تجویز پادزهر (Antivenom):</b></p><p><b>شکل دارو:</b> ایمونوگلوبولین چندظرفیتی ضد زهر عقرب (آمپول ۵ میلی‌لیتری).</p><p><b>اندیکاسیون:</b> بروز علائم سیستمیک منتشر (مرکزی، ریوی، قلبی، همولیز، هموگلوبینوری و اسپاسم حنجره).</p><p><b>قانون طلایی دوز:</b> به دلیل یکسان بودن دوز سم واردشده به بدن، میزان پادزهر در کودکان و بزرگسالان کاملاً یکسان بوده و بر اساس وزن بیمار محاسبه نمی‌شود.</p><p><b>دوز و نحوه تجویز:</b> تجویز ۱ تا ۲ آمپول وریدی به عنوان دوز اولیه. پادزهر ترجیحاً باید به صورت انفوزیون وریدی (رقیق شده در ۱۰۰ تا ۲۵۰ میلی‌لیتر نرمال سالین یا دکستروز ۵٪) در عرض یک ساعت تزریق شود. در صورت عدم امکان انفوزیون، تزریق مستقیم وریدی با سرعت بسیار آهسته (حداکثر ۲ میلی‌لیتر در دقیقه) انجام می‌شود. در موارد شدید یا تأخیری، دوزهای بیشتر مورد نیاز است.</p><p><b>پایش حساسیت: </b>به دلیل خطر شوک آنافیلاکتیک، آمپول آدرنالین (۱:۱۰۰۰) همواره باید آماده و بر بالین بیمار باشد و بیمار تا یک ساعت پس از تزریق تحت پایش مستقیم بماند.</p><p><b>ج) مدیریت عوارض اختصاصی:</b></p><p><b>شوک آنافیلاکسی: </b>قطع فوری پادزهر؛ تزریق عضلانی آدرنالین (۰.۵ تا ۱ میلی‌لیتر آدرنالین ۱:۱۰۰۰ در بزرگسالان و ۰.۰۱ mg/kg در کودکان)؛ در صورت نیاز تکرار هر ۵ تا ۱۰ دقیقه.</p><p><b>طوفان عصبی خودمختار:</b> تجویز قرص پرازوسین خوراکی (۰.۲۵ میلی‌گرم در کودکان و ۰.۵ میلی‌گرم در افراد بالای ۴۰ کیلوگرم هر ۳ ساعت). در صورت اصرار علائم پاراسمپاتیک شدید، استفاده از آتروپین به میزان 0.01 mg/kg/dose مجاز است.</p><p><b>تشنج:</b> تجویز کلسیم گلوکونات ۱۰٪ (به‌ویژه در گزش عقرب سیاه) و در صورت عدم کنترل، دیازپام یا فنی‌توئین.</p><p><b>همولیز و هموگلوبینوری (گادیم):</b> جهت پیشگیری از رسوب هموگلوبین در کلیه و نارسایی حاد کلیوی، مایع‌درمانی با سرم دکستروز ۱۰ درصد به میزان ۱.۵ برابر نگهدارنده تجویز شده و به هر لیتر سرم، بی‌کربنات سدیم (حدود ۱۵ میلی‌اکی‌والان) جهت قلیایی کردن ادرار اضافه می‌شود. همچنین فوروزماید (۰.۵ mg/kg) جهت القای دیورز تجویز می‌گردد.</p><p><b>سندرم HUS (همولیتیک اورمیک):</b> در بیماران دچار همولیز شدید، جهت بررسی احتمال بروز HUS، سطح LDH باید یک روز در میان بررسی شود تا در صورت لزوم پلاسمافرز یا تجویز FFP آغاز گردد.</p><p><b>۵. تعیین تکلیف بالینی بیمار (ترخیص، بستری و ارجاع)</b></p><p><b>بیماران بدون علامت سیستمیک:</b> پس از دریافت درمان موضعی و تسکین درد، باید حداقل ۶ ساعت تحت نظر مانده و در صورت عدم بروز تغییر رنگ ادرار یا سایر علائم، با آموزش علائم هشدار مرخص شوند.</p><p><b>گروه‌های پرخطر (کودکان زیر ۶ سال، مادران باردار و سالمندان): </b>به دلیل پتانسیل بالای وخامت حال بالینی، این بیماران حتی در صورت نداشتن علائم اولیه باید حداقل ۲۴ ساعت بستری و تحت نظر مستقیم بمانند. در زنان باردار، ارزیابی همزمان سلامت جنین توسط متخصص زنان و زایمان الزامی است.</p><p><b>بستری مستقیم در ICU:</b> بروز علائم ادم ریه، ARDS، تشنج، اسپاسم حنجره، یا همولیز شدید (ادرار شربت آلبالویی) اندیکاسیون قطعی بستری در بخش مراقبت‌های ویژه (ICU) است. در صورت عدم وجود تجهیزات، بیمار باید پس از دریافت دوز اولیه پادزهر و پایدارسازی به مرکز مجهز اعزام شود.<br><br><br><b>برای دریافت کامل آخرین دستورالعمل به بخش ( دستورالعمل ها ) مراجعه فرمایید.</b></p>",
          "guidelines": "<a class=\"dl-btn\" href=\"forms/scorpion-guideline-8yln.pdf\" target=\"_blank\" rel=\"noopener\">\n  <span class=\"dl-icon\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"6\" y=\"4\" width=\"12\" height=\"17\" rx=\"2\"/><path d=\"M9 4V3a1 1 0 011-1h4a1 1 0 011 1v1\"/><path d=\"M9 12.2l2 2 4-4.2\"/></svg></span>\n  <span class=\"dl-text\">\n    <span class=\"dl-title\">پیشگیری درمان و مراقبت گزش جانوران زهرآگین(عقرب) </span>\n    <span class=\"dl-sub\">PDF · مشاهده یا دانلود</span>\n  </span>\n  <span class=\"dl-arrow\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M15 6l-6 6 6 6\"/></svg></span>\n</a>\n<a class=\"dl-btn\" href=\"forms/scorpion-guideline-82uw.pdf\" target=\"_blank\" rel=\"noopener\">\n  <span class=\"dl-icon\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"6\" y=\"4\" width=\"12\" height=\"17\" rx=\"2\"/><path d=\"M9 4V3a1 1 0 011-1h4a1 1 0 011 1v1\"/><path d=\"M9 12.2l2 2 4-4.2\"/></svg></span>\n  <span class=\"dl-text\">\n    <span class=\"dl-title\">راهنمای تجویز داروی سرم ضد عقرب 1402</span>\n    <span class=\"dl-sub\">PDF · مشاهده یا دانلود</span>\n  </span>\n  <span class=\"dl-arrow\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M15 6l-6 6 6 6\"/></svg></span>\n</a>",
          "forms": "<a class=\"dl-btn\" href=\"forms/scorpion-form-dy35.pdf\" target=\"_blank\" rel=\"noopener\">\n  <span class=\"dl-icon\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"5\" y=\"3\" width=\"14\" height=\"18\" rx=\"2\"/><path d=\"M8 8h8M8 12h8M8 16h5\"/></svg></span>\n  <span class=\"dl-text\">\n    <span class=\"dl-title\">فرم ورود اطلاعات مصدومان ناشی از گزش جانوران زهرآگین</span>\n    <span class=\"dl-sub\">PDF · مشاهده یا دانلود</span>\n  </span>\n  <span class=\"dl-arrow\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M15 6l-6 6 6 6\"/></svg></span>\n</a>"
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
