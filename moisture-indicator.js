const indicatorElement = document.querySelector(".moisture-indicator");
const maxMoisture = 0.225;
var veg = "soybean";

function setIndicator(indicator, moisture) {

    moisture = +moisture;

    if (moisture < 0 || moisture > maxMoisture) {
        return;
    }

    let perc_moisture = 100 - ((moisture / maxMoisture) * 100);
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
        indicator.querySelector(".indicator-fill").style.background = 'red';
    } else if (lowMoisture < moisture && moisture <= highMoisture) {
        indicator.querySelector(".indicator-fill").style.background = 'blue';
    } else if (moisture <= lowMoisture) {
        indicator.querySelector(".indicator-fill").style.background = 'red';
    }

    // console.log(perc_moisture);

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