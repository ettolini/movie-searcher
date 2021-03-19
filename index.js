const input = document.getElementById("input");
const button = document.getElementById("searchButton");
const display = document.getElementById("display");
const loading = document.getElementById("loading");

const ul = document.createElement("ul");
const title = document.createElement("li");
const runTime = document.createElement("li");
const plot = document.createElement("li");

function handleClick() {
  if (input.value === "") console.log("You haven't entered anything.");
  else {
    // TODO: hacer esto bien
    // if (display.hasChildNodes()) {
    //   console.log(display.hasChildNodes());
    //   const list = display.childNodes;
    //   console.log(list[0].childNodes[0].innerHTML);

    //   if (list[1].innerHTML === input.value) {
    //     console.log("That movie's info is already being displayed.");
    //     return;
    //   }
    // }

    button.disabled = true;
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
        button.disabled = false;
      });
  }
}

function handleEnter(event) {
  if (event.which === 13) handleClick();
}
