const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Corrected: added parentheses

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector("#results");

    // Reset results before displaying new messages
    results.innerHTML = "";

    // Validation checks
    if (isNaN(height) || height <= 0) {
        results.innerHTML += `<p>Please enter a valid height.</p>`;
    }
    
    if (isNaN(weight) || weight <= 0) {
        results.innerHTML += `<p>Please enter a valid weight.</p>`;
    }

    // If there are validation errors, stop execution
    if (isNaN(height) || height <= 0 || isNaN(weight) || weight <= 0) {
        return;
    }

    // BMI Calculation
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<p>Your BMI is: <strong>${bmi}</strong></p>`;
});
