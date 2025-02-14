/* app.js - Lógica del juego de la lotería */

document.addEventListener("DOMContentLoaded", () => {
    const generateButton = document.getElementById("generate");
    const resultDisplay = document.getElementById("result");

    generateButton.addEventListener("click", () => {
        const numbers = generateLotteryNumbers();
        resultDisplay.textContent = `Números sorteados: ${numbers.join(", ")}`;
    });
});

function generateLotteryNumbers() {
    let numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}

function calculateCombinations() {
    const n = 45;
    const r = 6;
    return factorial(n) / (factorial(r) * factorial(n - r));
}

function factorial(num) {
    return num <= 1 ? 1 : num * factorial(num - 1);
}

console.log(`Combinaciones posibles: ${calculateCombinations()}`);
