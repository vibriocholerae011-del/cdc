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
      id:'vpd', num:'۰۱', color:'#0E6E66',
      name:'بیماری‌های قابل پیشگیری با واکسن',
      diseases:[
        {id:'measles', name:'سرخک', sections:{definitions:null, guidelines:null, forms:null}},
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
      id:'resp', num:'۰۲', color:'#2B5A8C',
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
      id:'food_water', num:'۰۳', color:'#8A6D1B',
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
      id:'bloodborne_hep', num:'۰۴', color:'#7A3B69',
      name:'HIV و هپاتیت',
      diseases:[
        {id:'hepB', name:'هپاتیت B', sections:{definitions:null, guidelines:null, forms:null}},
        {id:'hepC', name:'هپاتیت C', sections:{definitions:null, guidelines:null, forms:null}},
        {id:'hiv', name:'HIV', sections:{definitions:null, guidelines:null, forms:null}},
      ]
    },
    {
      id:'zoonotic', num:'۰۵', color:'#3E6B3A',
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
      id:'bites', num:'۰۶', color:'#B8631E',
      name:'گزش جانوران زهراگین',
      diseases:[
        {id:'scorpion', name:'عقرب‌زدگی', sections:{definitions:null, guidelines:null, forms:null}},
        {id:'snakebite', name:'مارگزیدگی', sections:{definitions:null, guidelines:null, forms:null}},
      ]
    },
    {
      id:'other', num:'۰۷', color:'#5B6670',
      name:'سایر',
      diseases:[
        {id:'pediculosis_scabies', name:'پدیکلوزیس و گال', sections:{definitions:null, guidelines:null, forms:null}},
      ]
    },
  ];
