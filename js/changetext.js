

var text = ["👨‍💻 Cyber Security Enthusiast", "🧑‍🎓 Student", "🤍 CTF Player", "🐧 I Use Linux Btw!"];
var counter = 0;
var elem = document.getElementById("changeText");
var inst = setInterval(change, 1300);

function change() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
    // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
  }
}
