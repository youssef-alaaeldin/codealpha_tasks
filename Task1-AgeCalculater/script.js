function calculateAge() {
    // Get the input value
    const dobInput = document.getElementById('dob');
    const dobValue = new Date(dobInput.value);

    // Calculate the age
    const today = new Date();
    const age = today.getFullYear() - dobValue.getFullYear();

    // Display the result
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Your age is ${age} years.`;
}
