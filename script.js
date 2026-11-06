let currentLang='fa';
let currentCat='all';
const cats=[
{id:'all',fa:'همه',en:'All'},
{id:'chest',fa:'سینه',en:'Chest'},
{id:'back',fa:'پشت',en:'Back'},
{id:'leg',fa:'پا',en:'Leg'},
{id:'shoulder',fa:'سرشانه',en:'Shoulder'},
{id:'arm',fa:'بازو',en:'Arm'},
{id:'core',fa:'شکم و میان‌تنه',en:'Core'},
{id:'full',fa:'فول‌بادی و هوازی',en:'Full Body'}
];
const exs=[
{id:1,cat:'chest',fa:'پرس سینه هالتر',en:'Barbell Bench Press',emoji:'🏋️',sets:'4 × 8-12',descFa:'اصلی‌ترین حرکت سینه برای حجم و قدرت. هالتر را تا وسط سینه پایین بیاور و بالا ببر.',descEn:'Main chest mass builder. Lower bar to mid-chest and press up.',video:'https://www.youtube.com/results?search_query=barbell+bench+press+form'},
{id:2,cat:'chest',fa:'فلای دمبل',en:'Dumbbell Fly',emoji:'🦅',sets:'3 × 10-12',descFa:'برای کشش و فرم سینه. آرنج کمی خم، دمبل‌ها را باز و بسته کن.',descEn:'For chest stretch and shape. Slight bent elbows, open and close.',video:'https://www.youtube.com/results?search_query=dumbbell+fly+form'},
{id:3,cat:'chest',fa:'شنا سوئدی',en:'Push-Up',emoji:'💪',sets:'3 × تا ناتوانی',descFa:'حرکت بدون وزنه برای کل سینه و سرشانه. بدن کاملاً صاف باشد.',descEn:'Bodyweight move for chest. Keep body straight.',video:'https://www.youtube.com/results?search_query=perfect+push+up+form'},
{id:4,cat:'back',fa:'ددلیفت',en:'Deadlift',emoji:'🏋️‍♂️',sets:'4 × 6-8',descFa:'پادشاه حرکات پشت و پا. کمر صاف، هالتر نزدیک ساق بالا بیاید.',descEn:'King of back and legs. Flat back, bar close to shins.',video:'https://www.youtube.com/results?search_query=deadlift+correct+form'},
{id:5,cat:'back',fa:'بارفیکس',en:'Pull-Up',emoji:'🧗',sets:'3 × تا ناتوانی',descFa:'بهترین حرکت عرض پشت. سینه به میله نزدیک شود.',descEn:'Best for back width. Chest to bar.',video:'https://www.youtube.com/results?search_query=pull+up+proper+form'},
{id:6,cat:'back',fa:'زیربغل سیم‌کش',en:'Lat Pulldown',emoji:'⬇️',sets:'3 × 10-12',descFa:'جایگزین بارفیکس برای مبتدی. میله تا بالای سینه پایین بیاید.',descEn:'Beginner alternative to pull-up. Bar to upper chest.',video:'https://www.youtube.com/results?search_query=lat+pulldown+form'},
{id:7,cat:'back',fa:'قایقی خم',en:'Bent Over Row',emoji:'🚣',sets:'4 × 8-10',descFa:'ضخامت پشت. بالاتنه 45 درجه، هالتر به شکم کشیده شود.',descEn:'Back thickness. 45 deg torso, pull to belly.',video:'https://www.youtube.com/results?search_query=bent+over+row+form'},
{id:8,cat:'leg',fa:'اسکوات',en:'Squat',emoji:'🦵',sets:'4 × 8-10',descFa:'اصلی‌ترین حرکت پا. زانو از نوک پا جلوتر نرود، تا موازی بنشین.',descEn:'Main leg move. Knees track toes, go to parallel.',video:'https://www.youtube.com/results?search_query=squat+correct+form'},
{id:9,cat:'leg',fa:'پرس پا',en:'Leg Press',emoji:'🦿',sets:'3 × 10-12',descFa:'فشار سنگین بدون فشار به کمر. کف پا وسط صفحه.',descEn:'Heavy legs without back stress. Feet middle of plate.',video:'https://www.youtube.com/results?search_query=leg+press+form'},
{id:10,cat:'leg',fa:'لانج',en:'Lunges',emoji:'🚶',sets:'3 × 12 هر پا',descFa:'تعادل و فرم ران و باسن. قدم بلند، زانوی عقب نزدیک زمین.',descEn:'Balance and glutes. Long step, back knee near floor.',video:'https://www.youtube.com/results?search_query=lunge+proper+form'},
{id:11,cat:'leg',fa:'ساق پا ایستاده',en:'Standing Calf Raise',emoji:'🧍',sets:'4 × 15-20',descFa:'حجم ساق. بالا 1 ثانیه مکث، پایین کشش کامل.',descEn:'Calf mass. 1 sec pause top, full stretch bottom.',video:'https://www.youtube.com/results?search_query=standing+calf+raise'},
{id:12,cat:'shoulder',fa:'پرس سرشانه',en:'Overhead Press',emoji:'🏋️',sets:'4 × 8-10',descFa:'حجم کل سرشانه. هالتر از جلو تا بالای سر پرس شود.',descEn:'Overall shoulders. Press from front to overhead.',video:'https://www.youtube.com/results?search_query=overhead+press+form'},
{id:13,cat:'shoulder',fa:'نشر جانب',en:'Lateral Raise',emoji:'🪽',sets:'3 × 12-15',descFa:'پهنای سرشانه. دمبل تا ارتفاع شانه بالا بیاید.',descEn:'Shoulder width. Dumbbells to shoulder height.',video:'https://www.youtube.com/results?search_query=lateral+raise+form'},
{id:14,cat:'shoulder',fa:'نشر جلو',en:'Front Raise',emoji:'🙋',sets:'3 × 12',descFa:'بخش جلویی سرشانه. بدون تاب بدن بالا بیاور.',descEn:'Front delt. Lift without swinging.',video:'https://www.youtube.com/results?search_query=front+raise+form'},
{id:15,cat:'arm',fa:'جلو بازو هالتر',en:'Barbell Curl',emoji:'💪',sets:'3 × 10-12',descFa:'حجم جلو بازو. آرنج ثابت کنار بدن.',descEn:'Biceps mass. Elbows fixed at sides.',video:'https://www.youtube.com/results?search_query=barbell+curl+form'},
{id:16,cat:'arm',fa:'دیپ پشت بازو',en:'Triceps Dips',emoji:'🪑',sets:'3 × 10-12',descFa:'حجم پشت بازو با وزن بدن. بدن صاف پایین برو.',descEn:'Bodyweight triceps. Go down straight.',video:'https://www.youtube.com/results?search_query=triceps+dips+form'},
{id:17,cat:'arm',fa:'پشت بازو سیم‌کش',en:'Cable Pushdown',emoji:'⬇️',sets:'3 × 10-12',descFa:'فرم‌دهی پشت بازو. آرنج چسبیده، فقط ساعد حرکت کند.',descEn:'Triceps shaping. Elbows tucked, only forearms move.',video:'https://www.youtube.com/results?search_query=triceps+pushdown+form'},
{id:18,cat:'arm',fa:'چکشی دمبل',en:'Hammer Curl',emoji:'🔨',sets:'3 × 10',descFa:'جلو بازو و ساعد. دمبل‌ها عمودی نگه داشته شوند.',descEn:'Biceps and forearms. Keep dumbbells vertical.',video:'https://www.youtube.com/results?search_query=hammer+curl+form'},
{id:19,cat:'core',fa:'کرانچ',en:'Crunch',emoji:'🧘',sets:'3 × 20',descFa:'عضله بالایی شکم. کمر روی زمین، فقط شانه جدا شود.',descEn:'Upper abs. Lower back on floor, lift shoulders only.',video:'https://www.youtube.com/results?search_query=crunch+proper+form'},
{id:20,cat:'core',fa:'پلانک',en:'Plank',emoji:'🟫',sets:'3 × 60 ثانیه',descFa:'استقامت کل میان‌تنه. بدن خط صاف، شکم سفت.',descEn:'Core endurance. Straight line, tight abs.',video:'https://www.youtube.com/results?search_query=plank+proper+form'},
{id:21,cat:'core',fa:'زیر شکم آویزان',en:'Hanging Leg Raise',emoji:'🦇',sets:'3 × 12-15',descFa:'زیر شکم. بدون تاب، پاها تا 90 درجه بالا بیاید.',descEn:'Lower abs. No swing, legs to 90 deg.',video:'https://www.youtube.com/results?search_query=hanging+leg+raise+form'},
{id:22,cat:'full',fa:'برپی',en:'Burpees',emoji:'🔥',sets:'3 × 15',descFa:'چربی‌سوزی فول‌بادی. شنا + پرش انفجاری.',descEn:'Full-body fat burn. Push-up + explosive jump.',video:'https://www.youtube.com/results?search_query=burpee+proper+form'},
{id:23,cat:'full',fa:'کوهنوردی',en:'Mountain Climbers',emoji:'⛰️',sets:'3 × 30 ثانیه',descFa:'شکم و هوازی. زانوها سریع به سینه نزدیک شود.',descEn:'Abs and cardio. Drive knees fast to chest.',video:'https://www.youtube.com/results?search_query=mountain+climbers+form'},
{id:24,cat:'full',fa:'هیپ تراست',en:'Hip Thrust',emoji:'🍑',sets:'3 × 10-12',descFa:'بهترین حرکت باسن. بالا 2 ثانیه انقباض.',descEn:'Best glute move. 2 sec squeeze on top.',video:'https://www.youtube.com/results?search_query=hip+thrust+form'}
];
function renderCats(){
const box=document.getElementById('cats');box.innerHTML='';
cats.forEach(c=>{
const b=document.createElement('button');
b.textContent=currentLang==='fa'?c.fa:c.en;
b.className=currentCat===c.id?'active':'';
b.onclick=()=>{currentCat=c.id;renderCats();render();};
box.appendChild(b);
});
}
function render(){
const q=document.getElementById('search').value||'';
const grid=document.getElementById('grid');grid.innerHTML='';
exs.filter(e=>(currentCat==='all'||e.cat===currentCat)&&(e.fa.includes(q)||e.en.toLowerCase().includes(q.toLowerCase())||q==='')).forEach(e=>{
const catObj=cats.find(c=>c.id===e.cat);
const div=document.createElement('div');div.className='card';
div.innerHTML=`<div class="card-img">${e.emoji}</div><div class="card-body"><h3>${currentLang==='fa'?e.fa:e.en}</h3><div class="en">${currentLang==='fa'?e.en:e.fa}</div><div><span class="badge">${currentLang==='fa'?catObj.fa:catObj.en}</span><span class="badge sets">SET ${e.sets}</span></div><p>${currentLang==='fa'?e.descFa:e.descEn}</p><div class="card-btns"><button class="btn detail" onclick="openModal(${e.id})">${currentLang==='fa'?'راهنما و جزئیات':'Guide'}</button><a class="btn video" target="_blank" href="${e.video}">${currentLang==='fa'?'🎬 فیلم آموزشی':'🎬 Video'}</a></div></div>`;
grid.appendChild(div);
});
document.getElementById('heroTitle').textContent=currentLang==='fa'?'برنامه بدنسازی کل بدن برای همه سطوح':'Full-Body Fitness Program for All Levels';
document.getElementById('heroSub').textContent=currentLang==='fa'?'۲۴ حرکت، راهنمای تصویری و ویدیویی، تعداد ست استاندارد، فارسی و انگلیسی':'24 exercises, visual and video guide, standard sets, FA & EN';
document.documentElement.dir=currentLang==='fa'?'rtl':'ltr';
document.documentElement.lang=currentLang;
}
function openModal(id){
const e=exs.find(x=>x.id===id);
document.getElementById('modalContent').innerHTML=`<div style="font-size:70px;text-align:center">${e.emoji}</div><h2>${currentLang==='fa'?e.fa:e.en} <small style="color:#ff8a50">${e.en}</small></h2><p><b>${currentLang==='fa'?'ست‌ها':'Sets'}:</b> <span style="color:#00e676">${e.sets}</span></p><p>${currentLang==='fa'?e.descFa:e.descEn}</p><ol><li>${currentLang==='fa'?'گرم کردن ۵ دقیقه و شروع با وزنه سبک':'5 min warm-up, start light'}</li><li>${currentLang==='fa'?'اجرای آرام با تمرکز روی عضله هدف و تنفس صحیح':'Slow controlled reps, breathe correctly'}</li><li>${currentLang==='fa'?'استراحت ۶۰ تا ۹۰ ثانیه بین ست‌ها':'Rest 60-90 sec between sets'}</li></ol><a target="_blank" href="${e.video}" class="btn video" style="display:block">${currentLang==='fa'?'🎬 مشاهده فیلم آموزشی در یوتیوب':'🎬 Watch on YouTube'}</a><p style="font-size:12px;color:#aaa;margin-top:10px">${currentLang==='fa'?'برای افزودن عکس اختصاصی، تصویر خود را در پوشه سایت بگذارید و در کد جایگزین ایموجی کنید.':'To add your own photo, replace emoji with your image.'}</p>`;
document.getElementById('modal').classList.remove('hidden');
}
function closeModal(){document.getElementById('modal').classList.add('hidden');}
function toggleLang(){currentLang=currentLang==='fa'?'en':'fa';document.getElementById('langBtn').textContent=currentLang==='fa'?'EN / فارسی':'FA / English';renderCats();render();}
document.getElementById('search').addEventListener('input',render);
renderCats();render();