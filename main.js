let temp, humidity, HI, status;

function HeatIndex() {
    temp     = parseFloat(document.getElementById("temp").value);
    humidity = parseFloat(document.getElementById("humid").value);

    const msg = document.getElementById("message1");
    const box = document.getElementById("result-box");

    if (isNaN(temp) || isNaN(humidity)) {
        window.alert("⚠ Please enter valid numbers for both fields.");
        box.style.display = "none";
        return;
    }
    if (humidity < 0 || humidity > 100) {
        window.alert("⚠ Humidity must be between 0 and 100%.");
        box.style.display = "none";
        return;
    }
    msg.innerHTML = "";

    HI = temp + (0.33 * humidity) - 4;

    switch (true) {
    case (HI < 28):
        status = "Comfortable / Cool";
        document.getElementById("result-hi").style.color = "#5dade2";
        document.getElementById("result-status").style.color = "#5dade2";
        break;
    case (HI < 33):
        status = "Warm";
        document.getElementById("result-hi").style.color = "#f39c12";
        document.getElementById("result-status").style.color = "#f39c12";
        break;
    case (HI < 38):
        status = "Hot";
        document.getElementById("result-hi").style.color = "#e67e22";
        document.getElementById("result-status").style.color = "#e67e22";
        break;
    case (HI < 42):
        status = "Very Hot / Caution";
        document.getElementById("result-hi").style.color = "#e74c3c";
        document.getElementById("result-status").style.color = "#e74c3c";
        break;
    default:
        status = "Extreme Heat / Danger";
        document.getElementById("result-hi").style.color = "#ff4444";
        document.getElementById("result-status").style.color = "#ff4444";
}

    document.getElementById("result-hi").textContent     = HI.toFixed(1) + " °C";
    document.getElementById("result-status").textContent = status;
    box.style.display = "block";
}


function resetForm() {
    document.getElementById("temp").value           = "";
    document.getElementById("humid").value          = "";
    document.getElementById("message1").innerHTML = "";
    document.getElementById("result-box").style.display = "none";
}