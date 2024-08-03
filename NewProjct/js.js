function startIrrigation() {
    document.getElementById('alert').innerText = 'تم بدء الري.';
    document.getElementById('alert').style.display = 'block';
    setTimeout(() => { document.getElementById('alert').style.display = 'none'; }, 3000);
    document.querySelector('.status').innerText = 'النظام قيد التشغيل';
    document.getElementById('moisture-indicator').style.width = '70%';
    document.getElementById('moisture-level').innerText = '70%';
}

function stopIrrigation() {
    document.getElementById('alert').innerText = 'تم إيقاف الري.';
    document.getElementById('alert').style.display = 'block';
    setTimeout(() => { document.getElementById('alert').style.display = 'none'; }, 3000);
    document.querySelector('.status').innerText = 'النظام متوقف';
    document.getElementById('moisture-indicator').style.width = '30%';
    document.getElementById('moisture-level').innerText = '30%';
}

function clearLog() {
    document.getElementById('log-list').innerHTML = '';
    document.getElementById('alert').innerText = 'تم مسح السجل.';
    document.getElementById('alert').style.display = 'block';
    setTimeout(() => { document.getElementById('alert').style.display = 'none'; }, 3000);
}
document.addEventListener("DOMContentLoaded", function() {
    function showPage(pageId) {
        var sections = document.querySelectorAll(".section");
        sections.forEach(function(section) {
            section.classList.remove("active");
        });
        document.getElementById(pageId).classList.add("active");
    }

    var links = document.querySelectorAll("nav ul li a");
    links.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            var pageId = this.getAttribute("href").substring(1);
            showPage(pageId);
        });
    });

    // Initialize the first page
    showPage("main-section");
});
// Initialize water level
let waterLevel = 0;

// Function to increase water level
function increaseWaterLevel() {
    if (waterLevel < 100) {
        waterLevel += 10;
        updateWaterLevel();
    }
}

// Function to decrease water level
function decreaseWaterLevel() {
    if (waterLevel > 0) {
        waterLevel -= 10;
        updateWaterLevel();
    }
}

// Function to update water level
function updateWaterLevel() {
    const water = document.getElementById('water');
    water.style.height = waterLevel + '%';
}

// Initialize the water level on page load
window.onload = updateWaterLevel;
const translations = {
    en: {
        'نظام الري الذكي': 'Smart Irrigation System',
        'تواصل معنا': 'Contact Us',
        'المميزات': 'Features',
        'الإعدادات': 'Settings',
        'السجل': 'Log',
        'الرئيسية': 'Home',
        'مرحباً بك في نظام الري الذكي': 'Welcome to the Smart Irrigation System',
        'نحن نقدم نظاماً ذكياً يساعدك على الري الأمثل لنباتاتك. يمكنك مراقبة نسبة الرطوبة والتحكم في نظام الري بسهولة.': 'We offer a smart system that helps you optimize watering for your plants. You can monitor moisture levels and control the irrigation system easily.',
        'النظام قيد التشغيل': 'System is running',
        'مستوى الرطوبة الحالي:': 'Current moisture level:',
        'بدء الري': 'Start Irrigation',
        'إيقاف الري': 'Stop Irrigation',
        'مميزات نظامنا': 'Our System Features',
        'مراقبة الرطوبة': 'Moisture Monitoring',
        'يمكنك مراقبة نسبة الرطوبة في التربة والحصول على تنبيهات عندما تكون بحاجة للري.': 'You can monitor soil moisture levels and get alerts when watering is needed.',
        'جدولة الري': 'Irrigation Scheduling',
        'يمكنك تحديد جداول زمنية للري التلقائي حسب احتياجات نباتاتك.': 'You can set up automatic irrigation schedules based on your plants\' needs.',
        'توفير المياه': 'Water Saving',
        'يساعد النظام في توفير المياه عبر الري الأمثل وتجنب الهدر.': 'The system helps save water through optimal irrigation and avoiding waste.',
        'تواصل معنا': 'Contact Us',
        'الاسم': 'Name',
        'أدخل اسمك': 'Enter your name',
        'البريد الإلكتروني': 'Email',
        'أدخل بريدك الإلكتروني': 'Enter your email',
        'رسالتك': 'Your Message',
        'أدخل رسالتك': 'Enter your message',
        'إرسال': 'Send',
        'الإعدادات': 'Settings',
        'فترة الري (دقائق)': 'Irrigation Interval (Minutes)',
        'أدخل فترة الري بالدقائق': 'Enter the irrigation interval in minutes',
        'حفظ الإعدادات': 'Save Settings',
        'السجل': 'Log',
        'تم بدء الري في الساعة 10:00 صباحاً.': 'Irrigation started at 10:00 AM.',
        'تم إيقاف الري في الساعة 10:30 صباحاً.': 'Irrigation stopped at 10:30 AM.',
        'مسح السجل': 'Clear Log',
        'خزان المياه': 'Water Tank',
        'زيادة مستوى المياه': 'Increase Water Level',
        'تقليل مستوى المياه': 'Decrease Water Level',
        'هذه رسالة تنبيه.': 'This is an alert message.',
        '&copy;نظام الري الذكي | All Rights Reserved': '&copy;Smart Irrigation System | All Rights Reserved'
    },
    ar: {
        'Smart Irrigation System': 'نظام الري الذكي',
        'Contact Us': 'تواصل معنا',
        'Features': 'المميزات',
        'Settings': 'الإعدادات',
        'Log': 'السجل',
        'Home': 'الرئيسية',
        'Welcome to the Smart Irrigation System': 'مرحباً بك في نظام الري الذكي',
        'We offer a smart system that helps you optimize watering for your plants. You can monitor moisture levels and control the irrigation system easily.': 'نحن نقدم نظاماً ذكياً يساعدك على الري الأمثل لنباتاتك. يمكنك مراقبة نسبة الرطوبة والتحكم في نظام الري بسهولة.',
        'System is running': 'النظام قيد التشغيل',
        'Current moisture level:': 'مستوى الرطوبة الحالي:',
        'Start Irrigation': 'بدء الري',
        'Stop Irrigation': 'إيقاف الري',
        'Our System Features': 'مميزات نظامنا',
        'Moisture Monitoring': 'مراقبة الرطوبة',
        'You can monitor soil moisture levels and get alerts when watering is needed.': 'يمكنك مراقبة نسبة الرطوبة في التربة والحصول على تنبيهات عندما تكون بحاجة للري.',
        'Irrigation Scheduling': 'جدولة الري',
        'You can set up automatic irrigation schedules based on your plants\' needs.': 'يمكنك تحديد جداول زمنية للري التلقائي حسب احتياجات نباتاتك.',
        'Water Saving': 'توفير المياه',
        'The system helps save water through optimal irrigation and avoiding waste.': 'يساعد النظام في توفير المياه عبر الري الأمثل وتجنب الهدر.',
        'Name': 'الاسم',
        'Enter your name': 'أدخل اسمك',
        'Email': 'البريد الإلكتروني',
        'Enter your email': 'أدخل بريدك الإلكتروني',
        'Your Message': 'رسالتك',
        'Enter your message': 'أدخل رسالتك',
        'Send': 'إرسال',
        'Irrigation Interval (Minutes)': 'فترة الري (دقائق)',
        'Enter the irrigation interval in minutes': 'أدخل فترة الري بالدقائق',
        'Save Settings': 'حفظ الإعدادات',
        'Irrigation started at 10:00 AM.': 'تم بدء الري في الساعة 10:00 صباحاً.',
        'Irrigation stopped at 10:30 AM.': 'تم إيقاف الري في الساعة 10:30 صباحاً.',
        'Clear Log': 'مسح السجل',
        'Water Tank': 'خزان المياه',
        'Increase Water Level': 'زيادة مستوى المياه',
        'Decrease Water Level': 'تقليل مستوى المياه',
        'This is an alert message.': 'هذه رسالة تنبيه.',
        '&copy;Smart Irrigation System | All Rights Reserved': '&copy;نظام الري الذكي | All Rights Reserved'
    }
};

let currentLanguage = 'ar';

function toggleLanguage() {
    const newLanguage = currentLanguage === 'ar' ? 'en' : 'ar';
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.innerHTML.trim();
        if (translations[newLanguage][key]) {
            element.innerHTML = translations[newLanguage][key];
        } else if (translations[currentLanguage][key]) {
            element.innerHTML = translations[newLanguage][translations[currentLanguage][key]];
        }
    });
    currentLanguage = newLanguage;
}
