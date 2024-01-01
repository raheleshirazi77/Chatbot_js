// start project js
function chat() {
    // دریافت مقدار input
    let chat = (document.getElementById("message").value);

    if (chat == "سلام" || chat == "salam" || chat == "hi") {
        document.getElementById('demo').innerText = "سلام من به تو یار قدیمی ";
    }
    else if (chat == "خوبی" || chat == "حالت چطوره" || chat == "چطوری") {
        document.getElementById('demo').innerText = "مرسی تو چطوری ";
    }
    else if (chat == "بدم" || chat == "حالم بده" || chat == "خوب نیستم") {
        document.getElementById('demo').innerText = "به من چه ولی چرا ";
    }
    else if (chat == "خوبم") {
        document.getElementById('demo').innerText = "شکر الله";
    }
    else if (chat == "چه خبرا") {
        document.getElementById('demo').innerText = "سلامتیت تو چه خبرا";
    }
    else if (chat == "فضولی") {
        document.getElementById('demo').innerText = "خیلی بی ادبی حتما بامادرتان تماس میگیرم";
    }

    else if (chat == "چند سالته") {
        document.getElementById('demo').innerText = "23 سالمه";
    }
    else if (chat == "اسمت چیه") {
        document.getElementById('demo').innerText = "من ربات هستم اسمی ندارم";
    }
    else if (chat == "" || chat == null) {
        document.getElementById('demo').innerText = " باکس خالیه لطفا چیزی تایپ کن";
    }
    else {
        document.getElementById('demo').innerText = "خیلی سوال میکنی خستم شد خدافظ، پیامتو دیگه نبینم";
    }
}
chat()