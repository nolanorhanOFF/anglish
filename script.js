// Liste de mots pour les exercices
const words = ["Cat", "Dog", "House", "Tree"];
let currentWord = words[Math.floor(Math.random() * words.length)];
document.getElementById("word").textContent = currentWord;

// Vérification de la réponse écrite
function checkAnswer() {
    let answer = document.getElementById("answer").value.trim().toLowerCase();
    if (answer === currentWord.toLowerCase()) {
        document.getElementById("result").textContent = "✅ Correct !";
    } else {
        document.getElementById("result").textContent = "❌ Mauvaise réponse.";
    }
}

// Reconnaissance vocale
function startListening() {
    let recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "en-US";
    recognition.start();

    recognition.onresult = function(event) {
        let speechResult = event.results[0][0].transcript.toLowerCase();
        let expectedWord = document.getElementById("speakWord").textContent.toLowerCase();
        if (speechResult === expectedWord) {
            document.getElementById("speechResult").textContent = "✅ Bien prononcé !";
        } else {
            document.getElementById("speechResult").textContent = "❌ Essaie encore.";
        }
    };
}
