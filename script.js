function convertTemperature() {

    const temperature =
        parseFloat(document.getElementById("temperature").value);

    const unit =
        document.getElementById("unit").value;

    const error =
        document.getElementById("error");


    // Check for empty or invalid input

    if (isNaN(temperature)) {

        error.textContent =
            "Please enter a valid temperature.";

        clearResults();

        return;
    }


    // Check absolute zero

    if (unit === "celsius" && temperature < -273.15) {

        error.textContent =
            "Celsius cannot be below -273.15°C.";

        clearResults();

        return;
    }


    if (unit === "fahrenheit" && temperature < -459.67) {

        error.textContent =
            "Fahrenheit cannot be below -459.67°F.";

        clearResults();

        return;
    }


    if (unit === "kelvin" && temperature < 0) {

        error.textContent =
            "Kelvin cannot be below 0 K.";

        clearResults();

        return;
    }


    error.textContent = "";


    let celsius;
    let fahrenheit;
    let kelvin;


    // Celsius conversion

    if (unit === "celsius") {

        celsius = temperature;

        fahrenheit =
            (temperature * 9 / 5) + 32;

        kelvin =
            temperature + 273.15;
    }


    // Fahrenheit conversion

    else if (unit === "fahrenheit") {

        fahrenheit = temperature;

        celsius =
            (temperature - 32) * 5 / 9;

        kelvin =
            celsius + 273.15;
    }


    // Kelvin conversion

    else {

        kelvin = temperature;

        celsius =
            temperature - 273.15;

        fahrenheit =
            (celsius * 9 / 5) + 32;
    }


    // Display results

    document.getElementById("celsiusResult").textContent =
        celsius.toFixed(2) + " °C";

    document.getElementById("fahrenheitResult").textContent =
        fahrenheit.toFixed(2) + " °F";

    document.getElementById("kelvinResult").textContent =
        kelvin.toFixed(2) + " K";
}


function clearResults() {

    document.getElementById("celsiusResult").textContent = "--";

    document.getElementById("fahrenheitResult").textContent = "--";

    document.getElementById("kelvinResult").textContent = "--";
}