function calcWindChill() {
    let tempF = parseFloat(document.getElementById("temperature").textContent);
    let speed = parseFloat(document.getElementById("windspeed").textContent);
    let result = windChill(tempF, speed);

    document.getElementById("chill").innerHTML = result;
}

function windChill(tempF, speed) {
    if
    (tempF <= 50 && speed > 3){
        let f = 35.74 + (0.6215 * tempF - 35.75 * Math.pow(speed, 0.16)) + (0.4275 * tempF) * Math.pow(speed, 0.16);
        return Math.round(f);
    } else {
        let f = "N/A";
        return f;
    }
}
calcWindChill()


