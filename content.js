/* ==================================================================
   SITE_CONFIG — تنظیمات کلی کتابخانه (عنوان، توضیحات، اطلاعات تماس)
   این بخش هم مثل محتوای بیماری‌ها ویرایش‌پذیر است.
   ================================================================== */
const SITE_CONFIG = {
  title: 'کتابخانه نظام مراقبت بیماری‌ها',
  subtitle: 'دسترسی سریع به تعاریف، دستورالعمل‌های رسمی و فرم‌های مورد نیاز، دسته‌بندی‌شده برای استفاده کارکنان.',
  botUsername: 'cdciran_bot',
  contact: {
    email: 'y.afsari97@gmail.com',
    telegramId: 'yahya_afsari',
    telegramChannel: '',
    instagram: ''
  }
};

/* ==================================================================
   CONTENT DATA — این بخش ویرایش‌پذیر است
   برای اضافه کردن بیماری جدید یا محتوای یک بیماری، فقط همین‌جا را
   ویرایش کنید. به بخش‌های استایل یا منطق برنامه در پایین فایل کاری
   نداشته باشید.

   ساختار هر بیماری:
   { id, name, sections: { definitions, guidelines, forms } }

   هر کلید از sections یا null است (یعنی «به‌زودی») یا رشته‌ی HTML
   ساده‌ی متن محتوا (می‌تواند شامل تگ‌های <p>، <strong>، <ul><li> باشد).
   ================================================================== */
const CATEGORIES = [
    {
      id:'vpd', num:'۰۱', color:'#0E6E66', icon:'shield',
      name:'بیماری‌های قابل پیشگیری با واکسن',
      diseases:[
        {id:'measles', name:'سرخک', sections:{
          definitions: `
            <p><strong>تعریف بیماری:</strong> سرخک یک بیماری ویروسی حاد و بسیار واگیردار است که توسط ویروس سرخک (خانواده Paramyxoviridae) ایجاد می‌شود و عمدتاً کودکان را درگیر می‌کند.</p>
            <p><strong>راه انتقال:</strong> از طریق قطرات تنفسی (Droplet) و تماس مستقیم با ترشحات بینی و گلوی فرد آلوده؛ ویروس تا حدود ۲ ساعت در هوا یا روی سطوح باقی می‌ماند.</p>
            <p><strong>دوره کمون:</strong> به‌طور معمول ۱۰ تا ۱۲ روز (محدوده ۷ تا ۱۸ روز) از زمان مواجهه تا بروز تب.</p>
            <p><strong>دوره واگیری:</strong> از ۴ روز قبل تا ۴ روز بعد از شروع بثورات جلدی.</p>
            <p><strong>علائم بالینی:</strong></p>
            <ul>
              <li>تب بالا (اغلب بالای ۳۸.۵ درجه)</li>
              <li>سرفه، آبریزش بینی و التهاب ملتحمه (چشم)</li>
              <li>لکه‌های کوپلیک (Koplik spots) در مخاط دهان، ۱ تا ۲ روز پیش از بثورات</li>
              <li>بثورات ماکولوپاپولار قرمز که از صورت و پشت گوش شروع و به سمت تنه و اندام‌ها گسترش می‌یابد</li>
            </ul>
            <p><strong>تعریف مورد در نظام مراقبت:</strong></p>
            <ul>
              <li><strong>مورد مشکوک:</strong> هر فردی با تب و بثورات ماکولوپاپولار همراه با سرفه، آبریزش بینی یا التهاب ملتحمه</li>
              <li><strong>مورد محتمل:</strong> مورد مشکوک با ارتباط اپیدمیولوژیک با یک مورد قطعی</li>
              <li><strong>مورد قطعی:</strong> تأیید آزمایشگاهی (IgM یا PCR مثبت) یا ارتباط اپیدمیولوژیک با مورد تأییدشده</li>
            </ul>
            <p style="margin-top:10px;font-size:0.78rem;color:var(--ink-faint)">⚠️ این متن نمونه‌ی آزمایشی است و باید با آخرین دستورالعمل رسمی وزارت بهداشت جایگزین شود.</p>
          `,
          guidelines: `
            <p>اقدامات لازم هنگام مواجهه با مورد مشکوک سرخک باید مطابق آخرین نسخه‌ی دستورالعمل کشوری کنترل سرخک انجام شود. فایل کامل دستورالعمل رسمی (نسخه‌ی آزمایشی) در ادامه قابل دریافت است.</p>
            <a class="dl-btn" href="forms/measles-guideline.pdf" target="_blank" rel="noopener">
              <span class="dl-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="12" height="17" rx="2"/><path d="M9 4V3a1 1 0 011-1h4a1 1 0 011 1v1"/><path d="M9 12.2l2 2 4-4.2"/></svg></span>
              <span class="dl-text">
                <span class="dl-title">دستورالعمل رسمی سرخک (نسخه آزمایشی)</span>
                <span class="dl-sub">PDF · مشاهده یا دانلود</span>
              </span>
              <span class="dl-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"/></svg></span>
            </a>
          `,
          forms: `
            <p>فرم گزارش مورد مشکوک سرخک باید بلافاصله پس از شناسایی بیمار تکمیل و به کارشناس مراقبت بیماری‌های شبکه ارسال شود.</p>
            <a class="dl-btn" href="forms/measles-form.pdf" target="_blank" rel="noopener">
              <span class="dl-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/></svg></span>
              <span class="dl-text">
                <span class="dl-title">فرم گزارش مورد مشکوک سرخک (نسخه آزمایشی)</span>
                <span class="dl-sub">PDF · مشاهده یا دانلود</span>
              </span>
              <span class="dl-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"/></svg></span>
            </a>
          `
        }},
        {id:'rubella', name:'سرخجه', sections:{definitions:null, guidelines:null, forms:null}},
        {id:'mumps', name:'اوریون', sections:{definitions:null, guidelines:null, forms:null}},
        {id:'polio', name:'فلج اطفال', sections:{definitions:null, guidelines:null, forms:null}},
        {id:'pertussis', name:'سیاه‌سرفه', sections:{definitions:null, guidelines:null, forms:null}},
        {id:'diphtheria', name:'دیفتری', sections:{definitions:null, guidelines:null, forms:null}},
        {id:'tetanus', name:'کزاز', sections:{definitions:null, guidelines:null, forms:null}},
        {id:'varicella', name:'آبله‌مرغان', sections:{definitions:null, guidelines:null, forms:null}},
      ]
    },
    {
      id:'resp', num:'۰۲', color:'#2B5A8C', icon:'wind',
      name:'بیماری‌های تنفسی و تماسی',
      diseases:[
        {id:'meningitis', name:'مننژیت', sections:{definitions:null, guidelines:null, forms:null}},
        {id:'tb', name:'سل', sections:{definitions:null, guidelines:null, forms:null}},
        {id:'covid', name:'کرونا', sections:{definitions:null, guidelines:null, forms:null}},
        {id:'flu', name:'آنفلوانزا', sections:{definitions:null, guidelines:null, forms:null}},
        {id:'leprosy', name:'جذام', sections:{definitions:null, guidelines:null, forms:null}},
      ]
    },
    {
      id:'food_water', num:'۰۳', color:'#8A6D1B', icon:'droplet',
      name:'بیماری‌های منتقله از آب و غذا',
      diseases:[
        {id:'cholera', name:'وبا', sections:{definitions:null, guidelines:null, forms:null}},
        {id:'typhoid', name:'تیفوئید', sections:{definitions:null, guidelines:null, forms:null}},
        {id:'hepA', name:'هپاتیت A', sections:{definitions:null, guidelines:null, forms:null}},
        {id:'botulism', name:'بوتولیسم', sections:{definitions:null, guidelines:null, forms:null}},
        {id:'foodwater_outbreak', name:'طغیان بیماری‌های منتقله از آب و غذا', sections:{definitions:null, guidelines:null, forms:null}},
      ]
    },
    {
      id:'bloodborne_hep', num:'۰۴', color:'#7A3B69', icon:'drop_plus',
      name:'HIV و هپاتیت',
      diseases:[
        {id:'hepB', name:'هپاتیت B', sections:{definitions:null, guidelines:null, forms:null}},
        {id:'hepC', name:'هپاتیت C', sections:{definitions:null, guidelines:null, forms:null}},
        {id:'hiv', name:'HIV', sections:{definitions:null, guidelines:null, forms:null}},
      ]
    },
    {
      id:'zoonotic', num:'۰۵', color:'#3E6B3A', icon:'paw',
      name:'بیماری‌های مشترک انسان و دام (زئونوز)',
      diseases:[
        {id:'rabies', name:'هاری', sections:{definitions:null, guidelines:null, forms:null}},
        {id:'anthrax', name:'سیاه‌زخم', sections:{definitions:null, guidelines:null, forms:null}},
        {id:'ccfv', name:'تب کریمه کنگو', sections:{definitions:null, guidelines:null, forms:null}},
        {id:'dengue', name:'تب دنگی', sections:{definitions:null, guidelines:null, forms:null}},
        {id:'malaria', name:'مالاریا', sections:{definitions:null, guidelines:null, forms:null}},
        {id:'brucellosis', name:'تب مالت', sections:{definitions:null, guidelines:null, forms:null}},
        {id:'hydatid', name:'کیست هیداتیک', sections:{definitions:null, guidelines:null, forms:null}},
      ]
    },
    {
      id:'bites', num:'۰۶', color:'#B8631E', icon:'alert',
      name:'گزش جانوران زهراگین',
      diseases:[
        {id:'scorpion', name:'عقرب‌زدگی', sections:{definitions:null, guidelines:null, forms:null}},
        {id:'snakebite', name:'مارگزیدگی', sections:{definitions:null, guidelines:null, forms:null}},
      ]
    },
    {
      id:'other', num:'۰۷', color:'#5B6670', icon:'dots',
      name:'سایر',
      diseases:[
        {id:'pediculosis_scabies', name:'پدیکلوزیس و گال', sections:{definitions:null, guidelines:null, forms:null}},
      ]
    },
  ];
