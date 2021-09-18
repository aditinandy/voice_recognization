const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onstart = function() {
    console.log("voice is activated, you can to microphoneee");
};

recognition.onresult = function(event) {
    // console.log(event);
    const current = event.resultIndex; // resultIndex which is zero
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
};

// add the listener to the button
btn.addEventListener('click', () => {
    recognition.start();
});

// recognition.onspeechend = function () {

// }