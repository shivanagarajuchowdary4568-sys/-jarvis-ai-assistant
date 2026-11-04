
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
  recognition.continuous = false;
  recognition.interimResults = false;

  recognition.onresult = function(event) {
    const command = event.results[0][0].transcript.toLowerCase().trim();
    const output = document.getElementById("output");

    if (output) output.innerText = command;

    if (command.includes("hello jarvis")) {
      speak("Hello friend! How can I help you?");
    }

    else if (command.includes("time")) {
      const now = new Date();
      speak("Current time is " + now.toLocaleTimeString("en-IN"));
    }

    else if (command.includes("date")) {
      speak("Today's date is " + new Date().toLocaleDateString("en-IN"));
    }

    else if (command.includes("instagram")) {
      speak("Opening Instagram");
      window.open("https://www.instagram.com", "_blank");
    }

    else if (command.includes("jio")) {
      speak("Opening Jio");
      window.open("https://www.jio.com", "_blank");
    }

    else if (command.includes("youtube") || command.includes("music")) {
      speak("Opening music");
      window.open("https://music.youtube.com", "_blank");
    }

    else if (command.includes("google maps") || command.includes("maps")) {
      speak("Opening Google Maps");
      window.open("https://maps.google.com", "_blank");
    }

    else if (command.includes("open google")) {
      speak("Opening Google");
      window.open("https://www.google.com", "_blank");
    }

    else if (command.includes("call")) {
      const number = command.match(/\d{10}/);
      if (number) {
        speak("Opening phone dialer");
        window.location.href = "tel:" + number[0];
      } else {
        speak("Please say call followed by a ten digit phone number");
      }
    }

    else {
      speak("Sorry, I did not understand");
    }
  };

  recognition.onerror = function() {
    speak("Voice recognition error. Please try again.");
  };

  recognition.start();
}
