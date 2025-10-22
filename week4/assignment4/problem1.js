function celsiusToFahrenheit(celsius) {
    // Convert Celsius to Fahrenheit
    // Formula: (C × 9/5) + 32
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    // Convert Fahrenheit to Celsius
    // Formula: (F - 32) × 5/9
    return (fahrenheit - 32) * 5/9;
}

function getTemperatureDescription(fahrenheit) {
    // Return description based on temperature:
    // Below 32: "Freezing"
    // 32-50: "Cold"
    // 51-70: "Cool"
    // 71-85: "Warm"
    // Above 85: "Hot"
    if (fahrenheit < 32) {
        return "Freezing";
    } else if (fahrenheit <= 50) {
        return "Cold";
    } else if (fahrenheit <= 70) {
        return "Cool";
    } else if (fahrenheit <= 85) {
        return "Warm";
    } else {
        return "Hot";
    }
}