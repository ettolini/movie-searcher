const input = document.getElementById("input");
const button = document.getElementById("button");
const display = document.getElementById("display");
const loading = document.getElementById("loading");

const ul = document.createElement("ul");
const title = document.createElement("li");
const runTime = document.createElement("li");

function handleClick() {
  if (input.value === "") console.log("You haven't entered anything.");
  else {
    loading.style.visibility = "visible";

    fetch("https://www.omdbapi.com/?t=" + input.value + "&apikey=d54c9527")
      .then((response) => response.json())
      .then((data) => {
        if (data.Title === undefined)
          console.log("We couldn't find the entered move :c");
        else {
          title.innerHTML = data.Title;
          runTime.innerHTML = data.Runtime;

          ul.appendChild(title);
          ul.appendChild(runTime);
          display.appendChild(ul);
        }
        loading.style.visibility = "hidden";
      });
  }
}

function handleEnter(event) {
  if (event.which === 13) handleClick();
}
