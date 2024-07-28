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