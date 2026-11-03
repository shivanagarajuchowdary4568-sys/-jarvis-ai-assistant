function speak(text) {
  let msg = new SpeechSynthesisUtterance(text);
  msg.lang = "en-IN";
  speechSynthesis.speak(msg);
}

function startJarvis() {
  const Speech =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;

  if (!Speech) {
    speak("Voice recognition not supported");
    return;
  }

  let recognition = new Speech();
  recognition.lang = "en-IN";

  recognition.onresult = function(event) {
    let command =
      event.results[0][0].transcript.toLowerCase();

    document.getElementById("output").innerText = command;

    if (command.includes("hello jarvis")) {
      speak("Hello friend! How can I help you?");
    }
    else if (command.includes("open youtube")) {
      speak("Opening YouTube");
      window.open("https://youtube.com", "_blank");
    }
    else if (command.includes("open google")) {
      speak("Opening Google");
      window.open("https://google.com", "_blank");
    }
    else if (command.includes("open whatsapp")) {
      speak("Opening WhatsApp");
      window.open("https://wa.me/", "_blank");
    }
    else {
      speak("Sorry, I did not understand");
    }
  };

  recognition.start();
}
