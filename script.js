function speak(text) {
  const msg = new SpeechSynthesisUtterance(text);
  msg.lang = "en-IN";
  speechSynthesis.speak(msg);
}

function startJarvis() {
  const Speech = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!Speech) {
    speak("Voice recognition is not supported");
    return;
  }

  const recognition = new Speech();
  recognition.lang = "en-IN";

  recognition.onresult = function(event) {
    const command = event.results[0][0].transcript.toLowerCase();
    const output = document.getElementById("output");

    if (output) output.innerText = command;

    if (command.includes("hello jarvis")) {
      speak("Hello friend! How can I help you?");
    } else if (command.includes("open youtube")) {
      speak("Opening YouTube");
      window.open("https://www.youtube.com", "_blank");
    } else if (command.includes("open google")) {
      speak("Opening Google");
      window.open("https://www.google.com", "_blank");
    } else {
      speak("Sorry, I did not understand");
    }
  };

  recognition.start();
}
