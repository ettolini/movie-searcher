const input = document.getElementById("input");
const searchButton = document.getElementById("searchButton");
const display = document.getElementById("display");
const loading = document.getElementById("loading");

searchButton.onclick = handleClick;
input.onkeyup = handleEnter;

const ul = document.createElement("ul");
const title = document.createElement("li");
const runTime = document.createElement("li");
const plot = document.createElement("li");

function handleClick() {
  if (input.value === "") console.log("You haven't entered anything.");
  else {
    if (input.value === title.innerHTML)
      console.log("That movie's info is already being displayed.");
    else {
      searchButton.disabled = true;
      loading.style.visibility = "visible";

      fetch("https://www.omdbapi.com/?t=" + input.value + "&apikey=d54c9527")
        .then((response) => response.json())
        .then((data) => {
          if (data.Title === undefined)
            console.log("We couldn't find the entered movie :c");
          else {
            title.innerHTML = data.Title;
            runTime.innerHTML = data.Runtime;
            plot.innerHTML = data.Plot;

            ul.appendChild(title);
            ul.appendChild(runTime);
            ul.appendChild(plot);
            display.appendChild(ul);
          }
          loading.style.visibility = "hidden";
          searchButton.disabled = false;
        });
    }
  }
}

function handleEnter(event) {
  if (event.which === 13) handleClick();
}
