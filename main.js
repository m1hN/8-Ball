// Event Listener
document.getElementById("button").addEventListener("click", tellFortune);

// Variables
let input = document.getElementById("input");
let output = document.getElementById("output");

// Event Function 8 Ball
function tellFortune() {
  document.getElementById("body").classList.toggle("shake");
  let question = input.value;
  question = question.toLowerCase();
  rand = Math.random();
  console.log(rand);

  input.value = "";

  if (question == "") {
    output.innerHTML = "Please ask your question...";
  } else if (
    question == "does a magic 8 ball actually work?" ||
    question == "does the magic 8 ball actually work?" ||
    question == "does the magic 8 ball actually work" ||
    question == "does a magic 8 ball actually work"
  ) {
    output.innerHTML = "How dare you doubt me!";
  } else if (
    question == "is javascript awesome?" ||
    question == "is javascript awesome"
  ) {
    output.innerHTML = "Of Course!";
  } else {
    if (rand < 0.2) {
      output.innerHTML = "Without a Doubt.";
    } else if (rand < 0.4) {
      output.innerHTML = "As I see it, yes.";
    } else if (rand < 0.6) {
      output.innerHTML = "Concentrate and ask again.";
    } else if (rand < 0.8) {
      output.innerHTML = "Don't count on it.";
    } else if (rand < 1) {
      output.innerHTML = "Outlook not so good.";
    }
  }
  console.log(question);
}
