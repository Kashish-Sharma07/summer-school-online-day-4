const Yourname = prompt("What is your name?");
const Yourage = Number(prompt("What is your age?"));

if (Yourage < 18) {
  alert("Hey " + Yourname + ", you’re a teen!");
} else if (Yourage >= 18 && Yourage <= 60) {
  alert("Welcome " + Yourname + ", you’re an adult!");
} else {
  alert("Hello " + Yourname + ", you’re a senior citizen!");
}

