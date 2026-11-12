
function convertTemperature() {

    const input = document.getElementById("temperature").value;
    const unit = document.getElementById("unit").value;
    const error = document.getElementById("error");

    error.textContent = "";

    if (input.trim() === "" || !Number.isFinite(Number(input))) {
        error.textContent = "Please enter a valid temperature.";
        return;
    }

    const temperature = Number(input);

    let celsius, fahrenheit, kelvin;

    // Convert input into Celsius
    if (unit === "celsius") {
        celsius = temperature;
    }
    else if (unit === "fahrenheit") {
        celsius = (temperature - 32) * 5 / 9;
    }
    else {
        celsius = temperature - 273.15;
    }

    // Absolute zero validation
    if (celsius < -273.15) {
        error.textContent =
            "Temperature cannot be below absolute zero!";
        return;
    }

    // Convert Celsius into other units
    fahrenheit = (celsius * 9 / 5) + 32;
    kelvin = celsius + 273.15;

    // Display results
    document.getElementById("celsius").textContent =
        "Celsius: " + celsius.toFixed(2) + " °C";

    document.getElementById("fahrenheit").textContent =
        "Fahrenheit: " + fahrenheit.toFixed(2) + " °F";

    document.getElementById("kelvin").textContent =
        "Kelvin: " + kelvin.toFixed(2) + " K";
}
