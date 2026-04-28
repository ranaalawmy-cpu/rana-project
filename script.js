let currentPlace = "";
let title = "";
let info = "";
let images = [];
let videos = [];
let allItems = [];
let currentIndex = 0;
let mapLink = "";

let popup = document.getElementById("popup");
let popupImg = document.getElementById("popup-img");
let popupVideo = document.getElementById("popup-video");
let close = document.getElementById("close");
let prev = document.getElementById("prev");
let next = document.getElementById("next");

// تشغيل الصفحة
if (document.getElementById("infoText")) {
    const params = new URLSearchParams(window.location.search);
    const place = params.get("place");
    if (place) showDetails(place);
}

function showDetails(place) {
    currentPlace = place;
    images = [];
    videos = [];
    allItems = [];

    // ----------- البيانات حسب المكان ----------- //
   if (place == "سوسة") {
    title = "سوسة";
    info = "مدينة سوسة من أجمل المدن الساحلية في شرق ليبيا تقع على شاطئ البحر المتوسط، كانت تعرف قديماً باسم أبولونيا، تشتهر بآثار أبولونيا الإغريقية التي كانت ميناء قديماً لمدينة قورينا (شحات). مدينة سوسة تجمع بين التاريخ والطبيعة حيث يمكنك الاستمتاع بالشواطئ والأثار. من أهم الآثار في مدينة سوسة الآثار اليونانية والرومانية القديمة مثل الحمامات، المساكن، وبقايا الجدران.";
    images = ["images/susa1.jpg","images/susa2.jpg","images/susa3.jpg","images/susa7.jpg","images/susa6.jpg","images/susa5.jpg","images/susa8.jpg","images/susa9.jpg"];
    videos = ["videos/susa4.mp4","videos/susa9.mp4"];
    mapLink = "https://maps.app.goo.gl/AeaoE4HmM9BaXdfc7";
}
   else if (place == "شحات") {
    title = "شحات";
    info = "مدينة شحات هي واحدة من أجمل وأهم المدن التاريخية في شرق ليبيا، تقع مدينة شحات في منطقة الجبل الأخضر، وكانت تعرف قديماً باسم قورينا. هي مدينة يونانية قديمة تأسست في القرن السابع قبل الميلاد على يد الإغريق سنة 631 قبل الميلاد، ازدهرت في العصرين الإغريقي والروماني، وتم إدراجها ضمن مواقع التراث العالمي التابعة لليونسكو. من أهم الآثار الموجودة في مدينة شحات معبد زيوس، واحد من أكبر المعابد الإغريقية في شمال أفريقيا، وآثار قورينا المختلفة تشمل مسارح، معابد، قبور ومقابر تعود للعصر اليوناني والروماني.";
    images = ["images/shahat1.jpg","images/shahat2.jpg","images/shahat3.jpg","images/shahat4.jpg","images/shahat5.jpg","images/shahat6.jpg"];
    videos = ["videos/shahat7.mp4","videos/shahat8.mp4","videos/shahat9.mp4"];
    mapLink ="https://maps.app.goo.gl/yjeWmqp8RCPAVLzk7";
}
   else if (place == "الأثرون") {
    title = "الأثرون";
    info = "مدينة الأثرون تعد من أقدم المواقع الأثرية في شرق ليبيا، حيث يعود تاريخها إلى أكثر من 2500 سنة. كانت مدينة إغريقية مزدهرة ومركزاً للتجارة والزراعة، تأسست الأثرون في العصر الإغريقي وكانت من أول المستوطنات اليونانية. من أهم الآثار الموجودة في الأثرون المقابر الصخرية، بقايا الأسوار، والميناء القديمة، بحر الاثرون ويُعتبر من أجمل السواحل في منطقة الجبل الأخضر";
    images = ["images/athrun1.jpg","images/athrun2.jpg","images/athrun3.jpg","images/athrun4.jpg","images/athrun5.jpg","images/athrun6.jpg","images/athrun7.jpg","images/athrun8.jpg","images/athrun9.jpg","images/athrun10.jpg"];
    videos = ["videos/athrun11.mp4"];
    mapLink = "https://maps.app.goo.gl/28RdUAvK8oekHfBb7";
}

   else if (place == "طلميثة") {
    title = "طلميثة";
   info = "مدينة طلميثة أو ما تسمى قديماً بطليموس مدينة ساحلية ليبية تقع على بعد 60 كم شرق مدينة بنغازي، وتعد واحدة من أهم المدن الأثرية في شرق ليبيا. كانت مركزاً إدارياً وتجارياً مهماً في العهدين الإغريقي والروماني، وقد تأسست في العصر الإغريقي. من أهم الآثار الموجودة فيها الأعمدة والساحات الفاخرة المزينة بالفسيفساء، والمسارح والمدرج الروماني، بالإضافة إلى الحمامات الرومانية التي تعكس روعة العمارة القديمة";
    images = ["images/tolmeita1.jpg","images/tolmeita2.jpg","images/tolmeita3.jpg","images/tolmeita4.jpg","images/tolmeita5.jpg","images/tolmeita6.jpg","images/tolmeita7.jpg","images/tolmeita8.jpg","images/tolmeita9.jpg","images/tolmeita10.jpg","images/tolmeita11.jpg","images/tolmeita12.jpg","images/tolmeita13.jpg"];
     videos = ["videos/tolmeita7.mp4","videos/tolmeita8.mp4"];
     mapLink = "https://maps.app.goo.gl/po6SasNFrHVBW3s29";
}
else if (place == "رأس هلال") {
    title = "رأس هلال";
    info = "رأس الهلال تقع في قلب الجبل الأخضر، تعد من أجمل المناطق الطبيعية في ليبيا. تتميز رأس الهلال بطبيعتها الفريدة، أهم ما يميز رأس الهلال الشواطئ الصخرية والرملية، الغابات والمساحات الخضراء، والشلالات الموسمية التي تظهر بعد موسم الأمطار.";
    images = ["images/ras1.jpg","images/ras2.jpg","images/ras8.jpg","images/ras9.jpg","images/ras10.jpg","images/ras5.jpg","images/ras6.jpg","images/ras11.jpg","images/1.jpg","images/ras12.jpg"];
    videos = ["videos/ras4.mp4","videos/ras7.mp4"];
    mapLink = "https://maps.app.goo.gl/iMp6jXTtwDw5hZXPA";
}
   else if (place == "وادي مرقص") {
    title = "وادي مرقص";
    info = "يقع وادي مرقس بالشريط الساحلي للجبل الأخضر، بين منطقتي رأس الهلال والأثرون غرب مدينة درنة، شمال شرق ليبيا، ويبلغ طوله حوالي ثمانية كيلومترات. غطت الغابات أغلب مناطق الوادي، وتحتوي على أنواع عديدة من الأشجار كشجرة العرعر والصنوبر والشماري، وتكثر أشجار الزيتون خاصة قرب بقايا مستعمرة زراعية لم يتبقى منها إلا بعض الآثار. توجد في الوادي ينابيع طبيعية كثيرة للمياه، وتنبع هذه العيون من عدة مناطق فيه، كعين أم الناموس وعين الحمام، وعين أحجينه وعين أحطيبه التي تنبع في مدخل الوادي الشمالي بالقرب من الساحل. ساهمت هذه الينابيع الكثيرة في ازدهار الوادي بالنشاط البشري منذ القدم وحتى اليوم، حيث مارس الناس الذين استوطنوا الوادي الزراعة في المساحات والهضاب المنبسطة، وزرعوا الزيتون والأشجار المثمرة كالعنب والتين والرمان، كما استغلوا بعض المناطق لزراعة القمح والشعير.";
    images = ["images/wadi marqas1.jpg","images/wadi marqas2.jpg","images/wadi marqas3.jpg","images/wadi murqs.jpg"];
     videos = ["videos/wadi marqas3.mp4","videos/wadi marqas4.mp4"];
     mapLink = "https://maps.app.goo.gl/3CavekRV4cMtWBhKA";
     place="40دينار";
}
    else if (place == "عين الدبوسية") {
    title = "عين الدبوسية";
    info = "تعتبر عين الدبوسية واحدة من أغزر وأهم عيون المياه الطبيعية في الجبل الأخضر بشرق ليبيا، وتشتهر بكونها المصدر الرئيسي لتزويد مدن الجبل ومناطق درنة وعين مارة بمياه الشرب العذبة نظراً لقوة تدفقها العالية. يتميز الوادي المحيط بها بطبيعة بكر ساحرة تجمع بين الغابات الكثيفة والكهوف المعلقة والتكوينات الصخرية البيضاء، مما يجعلها مقصداً سياحياً فريداً يمزج بين عبق التاريخ (حيث شهدت معارك الجهاد ضد الطليان) وبين جمال الطبيعة الجبلية التي تنتهي بمصب مائي يمتد حتى البحر المتوسط.";
    images = ["images/aldabuwsia1.jpg","images/aldabuwsia2.jpg","images/aldabuwsia3.jpg","images/aldabuwsia5.jpg","images/aldabuwsia6.jpg","images/aldabuwsia7.jpg","images/aldabuwsia8.jpg"];
    videos = ["videos/aldabuwsia4.mp4"];
    mapLink = "https://maps.app.goo.gl/94bRkbdfq6uFXt1R8";
}
    else if (place == "وادي الحدادية") {
    title = "وادي الحدادية";
    info = "يعتبر وادي الحدادية واحداً من أجمل المعالم الطبيعية في الجبل الأخضر في ليبيا، وهو عبارة عن منخفض جبلي يشتهر بوجود عين الحدادية التي تتدفق مياهها العذبة لتشكل أحواضاً مائية طبيعية وسواقٍ تنساب وسط غطاء نباتي كثيف يجمع بين الأشجار البرية كالبطوم والعرعار والأشجار المثمرة مثل العنب والرمان، مما يجعله وجهة مثالية لهواة التخييم والمشي الجبلي بفضل تضاريسه التي تمزج بين وعورة الجبال وإطلالاتها الساحرة على البحر المتوسط.";
    images = ["images/wadi2.jpg","images/wadi1.jpg","images/wadi3.jpg","images/wadi4.jpg","images/wadi5.jpg"];
    videos = ["videos/wadi4.mp4"];
    mapLink = "https://maps.app.goo.gl/XgXPuAYBR5KYUJwd8";
}

   document.getElementById("infoText").innerHTML =
`<h2>${title}</h2>
<p>${info}</p>

<a href="${mapLink}" target="_blank">
📍 عرض الموقع على Google Maps
</a>`;

    let gallery = document.getElementById("gallery");
    let html = "";

    // عرض الصور
    images.forEach(img => {
        html += `<img src="${img}" class="item">`;
        allItems.push({type:"img", src:img});
    });

    // عرض الفيديوهات
    videos.forEach(v => {
        html += `<video src="${v}" class="item" controls></video>`;
        allItems.push({type:"video", src:v});
    });

    gallery.innerHTML = html;

    // الضغط على أي عنصر لفتح popup
    let allEls = gallery.querySelectorAll(".item");
    allEls.forEach((el,index) => {
        el.onclick = function(){
            currentIndex=index;
            showPopup(index);
        }
    });

    // إيقاف أي فيديو آخر عند تشغيل فيديو
    let vidEls = gallery.querySelectorAll("video");
    vidEls.forEach(v=>{
        v.onclick = function(){
            vidEls.forEach(other=>{
                if(other!==v) other.pause();
            });
        }
    });
}

function showPopup(index){
    currentIndex=index;
    let item = allItems[index];

    popup.style.display="flex";
    popupImg.style.display="none";
    popupVideo.style.display="none";
    popupVideo.pause();

    if(item.type=="img"){
        popupImg.src=item.src;
        popupImg.style.display="block";
    } else {
        popupVideo.src=item.src;
        popupVideo.style.display="block";
        popupVideo.play();
    }
}

// إغلاق popup
close.onclick = function(){
    popup.style.display="none";
    popupVideo.pause();
};

// الأسهم للتنقل
prev.onclick=function(){
    currentIndex--;
    if(currentIndex<0) currentIndex=allItems.length-1;
    showPopup(currentIndex);
};

next.onclick=function(){
    currentIndex++;
    if(currentIndex>=allItems.length) currentIndex=0;
    showPopup(currentIndex);
};
// ---------------- رسالة الحجز ---------------- //

function submitBooking(){

let name = document.getElementById("name").value;
let phone = document.getElementById("phone").value;
let place = document.getElementById("placeInput").value;

let adults = document.getElementById("adults").value;
let children = document.getElementById("children").value;

let arrival = document.getElementById("arrival").value;
let departure = document.getElementById("departure").value;

let payment = document.getElementById("paymentMethod").value;


// التحقق من تعبئة البيانات

if(
name === "" ||
phone === "" ||
place === "" ||
arrival === "" ||
departure === "" ||
payment === ""
){
alert("الرجاء تعبئة جميع بيانات الحجز");
return;
}


// رسالة نجاح الحجز

alert(

"✅ تم تأكيد الحجز بنجاح\n\n" +

" الاسم: " + name + "\n" +

" رقم الهاتف: " + phone + "\n" +

" المكان: " + place + "\n" +

"عدد البالغين: " + adults + "\n" +

" عدد الأطفال: " + children + "\n" +

" تاريخ الوصول: " + arrival + "\n" +

" تاريخ المغادرة: " + departure + "\n" +

" طريقة الدفع: " + payment

);


// تفريغ الحقول بعد الحجز

document.getElementById("name").value = "";
document.getElementById("phone").value = "";
document.getElementById("placeInput").value = "";

document.getElementById("adults").value = "";
document.getElementById("children").value = "";

document.getElementById("arrival").value = "";
document.getElementById("departure").value = "";

document.getElementById("paymentMethod").value = "";

}