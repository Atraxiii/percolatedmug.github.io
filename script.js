// Function to handle custom math tool logic
function runMathScript() {
    const outputElement = document.getElementById('output');
    
    // Example math: Calculating a factorial
    const n = 5;
    let result = 1;
    for (let i = 1; i <= n; i++) result *= i;

    outputElement.innerHTML = `Factorial of ${n} is <strong>${result}</strong>`;
}

// Ensure KaTeX renders even if content is added dynamically
document.addEventListener("DOMContentLoaded", function() {
    console.log("PercolatedMug scripts initialized.");
});
