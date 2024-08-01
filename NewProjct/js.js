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
        "en": {
            "title": "Smart Irrigation System",
            "welcome": "Welcome to the Smart Irrigation System",
            "description": "We offer a smart system to help you optimize the irrigation of your plants. You can monitor the moisture level and control the irrigation system easily.",
            "status": "System is running",
            "current_moisture_level": "Current moisture level:",
            "start_irrigation": "Start Irrigation",
            "stop_irrigation": "Stop Irrigation",
            "features": "Our System Features",
            "feature1": "Moisture Monitoring",
            "feature1_desc": "You can monitor soil moisture levels and get alerts when it's time to water.",
            "feature2": "Scheduled Irrigation",
            "feature2_desc": "You can set schedules for automatic watering based on your plants' needs.",
            "feature3": "Water Saving",
            "feature3_desc": "The system helps save water through optimal irrigation and avoiding wastage.",
            "contact": "Contact Us",
            "name": "Name",
            "email": "Email",
            "message": "Message",
            "send": "Send",
            "settings": "Settings",
            "interval": "Irrigation Interval (minutes)",
            "save_settings": "Save Settings",
            "log": "Log",
            "clear_log": "Clear Log",
            "water_tank": "Water Tank",
            "increase_water": "Increase Water Level",
            "decrease_water": "Decrease Water Level",
            "alert": "This is an alert message.",
            "footer": "&copy; Smart Irrigation System | All Rights Reserved"
        },

        "ar": {
            "title": "نظام الري الذكي",
            "welcome": "مرحباً بك في نظام الري الذكي",
            "description": "نحن نقدم نظاماً ذكياً يساعدك على الري الأمثل لنباتاتك. يمكنك مراقبة نسبة الرطوبة والتحكم في نظام الري بسهولة.",
            "status": "النظام قيد التشغيل",
            "current_moisture_level": "مستوى الرطوبة الحالي:",
            "start_irrigation": "بدء الري",
            "stop_irrigation": "إيقاف الري",
            "features": "مميزات نظامنا",
            "feature1": "مراقبة الرطوبة",
            "feature1_desc": "يمكنك مراقبة نسبة الرطوبة في التربة والحصول على تنبيهات عندما تكون بحاجة للري.",
            "feature2": "جدولة الري",
            "feature2_desc": "يمكنك تحديد جداول زمنية للري التلقائي حسب احتياجات نباتاتك.",
            "feature3": "توفير المياه",
            "feature3_desc": "يساعد النظام في توفير المياه عبر الري الأمثل وتجنب الهدر.",
            "contact": "تواصل معنا",
            "name": "الاسم",
            "email": "البريد الإلكتروني",
            "message": "رسالتك",
            "send": "إرسال",
            "settings": "الإعدادات",
            "interval": "فترة الري (دقائق)",
            "save_settings": "حفظ الإعدادات",
            "log": "السجل",
            "clear_log": "مسح السجل",
            "water_tank": "خزان المياه",
            "increase_water": "زيادة مستوى المياه",
            "decrease_water": "تقليل مستوى المياه",
            "alert": "هذه رسالة تنبيه.",
            "footer": "&copy;نظام الري الذكي | All Rights Reserved"
        }
    };
    
    function loadTranslations(callback) {
        fetch('translations.json')
            .then(response => response.json())
            .then(data => {
                callback(data);
            })
            .catch(error => console.error('Error loading translations:', error));
    }
    
    function applyTranslations(language, translations) {
        document.querySelectorAll("[data-translate]").forEach(element => {
            const key = element.getAttribute("data-translate");
            element.innerHTML = translations[language][key] || element.innerHTML;
        });
    }
    
    function changeLanguage(language) {
        loadTranslations(translations => {
            applyTranslations(language, translations);
        });
    }
    
    document.addEventListener('DOMContentLoaded', () => {
        // Set default language to Arabic
        changeLanguage('ar');
    });