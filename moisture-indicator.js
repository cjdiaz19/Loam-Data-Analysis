const indicatorElement = document.querySelector(".moisture-indicator");
const MAX_MOISTURE = 0.4;
var veg = "soybean";

function setIndicator(indicator, moisture) {

    moisture = +moisture;

    if (moisture < 0 || moisture > MAX_MOISTURE) {
        return;
    }

    let perc_moisture = 100 - ((moisture / MAX_MOISTURE) * 100);
    let TAW = 0.06;
    let FC = 0.1;
    let PWP = 0.04;
    let MAD = 0.5;

    if (veg == "soybean") {
        MAD = 0.5;
        // console.log(veg);
    } else if (veg == "rice") {
        MAD = 0.2;
        // console.log(veg);
    } else if (veg == "potato") {
        MAD = 0.65;
        // console.log(veg);
    }

    let highMoisture = FC;
    let lowMoisture = FC - (MAD * TAW);
    let replantMoisture = PWP;

    console.log(lowMoisture, moisture, highMoisture);

    if (moisture > highMoisture) {
        indicator.querySelector(".indicator-fill").style.background = '#fc4349';
        document.getElementById("report").innerHTML = "Land too hydrated. Refrain from irrigation";
        document.getElementById("report").style.color = '#fc4349';
    } else if (lowMoisture < moisture && moisture <= highMoisture) {
        indicator.querySelector(".indicator-fill").style.background = '#3498db';
        document.getElementById("report").innerHTML = "Land properly irrigated";
        document.getElementById("report").style.color = '#3498db';
    } else if (moisture <= lowMoisture) {
        indicator.querySelector(".indicator-fill").style.background = '#fc4349';
        document.getElementById("report").innerHTML = "Land needs moisture. Irrigate land as soon as possible";
        document.getElementById("report").style.color = '#fc4349';
    } else {
        indicator.querySelector(".indicator-fill").style.background = '#fc4349';
    }

    // console.log(perc_moisture);
    // document.getElementById("report").innerHTML = moisture;

    indicator.querySelector(".indicator-fill").style.transform = 
    `translateY(${
        perc_moisture
    }%)`;
    indicator.querySelector(".indicator-cover p").textContent = 
    `${
        moisture
    }`;
}

function selectVeg(selected) {
    veg = selected;
    
    var depth = +document.getElementById('depthInput').value;
    var amplitude = +document.getElementById('amplitudeInput').value;

    if (depth != 0 && amplitude != 0) {
        UpdatePlot();
        Update3dPlot();
    }
    
    return;
}