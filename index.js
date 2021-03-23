const searchBar = document.getElementById("searchBar");
const searchButton = document.getElementById("searchButton");
const display = document.getElementById("display");
const loading = document.getElementById("loading");

searchBar.onkeyup = handleEnter;
searchButton.onclick = handleClick;

const ul = document.createElement("ul");
const title = document.createElement("li");
const runTime = document.createElement("li");
const plot = document.createElement("li");

const peliculaFavorita = parent.Xrm.Page.getAttribute(
  "custom_peliculafavorita"
);
const peliculaFavoritaId = parent.Xrm.Page.getAttribute(
  "custom_peliculafavoritaid"
);

const peliculaFavoritaIdValue = peliculaFavoritaId.getValue();
if (peliculaFavoritaIdValue) {
  fetchURL = `https://www.omdbapi.com/?i=${peliculaFavoritaIdValue}`;
  fetchURL += "&apikey=d54c9527";
}

handleApi(fetchURL);

function handleApi(fetchURL) {
  fetch(fetchURL)
    .then((response) => response.json())
    .then((data) => {
      if (data.Title === undefined)
        console.log("We couldn't find the entered movie :c");
      else {
        title.innerHTML = data.Title;
        runTime.innerHTML = data.Runtime;
        plot.innerHTML = data.Plot;

        peliculaFavorita.setValue(data.Title);
        peliculaFavoritaId.setValue(data.imdbID);

        ul.appendChild(title);
        ul.appendChild(runTime);
        ul.appendChild(plot);
        display.appendChild(ul);
      }
      loading.style.visibility = "hidden";
      searchButton.disabled = false;
    })
    .catch((error) => console.error(error));
}

function handleClick() {
  try {
    if (searchBar.value === title.innerHTML)
      console.log("That movie's info is already being displayed.");
    else {
      searchButton.disabled = true;
      loading.style.visibility = "visible";

      let fetchURL = "https://www.omdbapi.com/?t=" + searchBar.value;
      fetchURL += "&apikey=d54c9527";

      handleApi(fetchURL);
    }
    if (searchBar.value === "") console.log("You haven't entered anything.");
    else {
    }
  } catch (error) {
    console.error(error);
  }
}

function handleEnter(event) {
  try {
    if (event.which === 13) handleClick();
  } catch (error) {
    console.log(error);
  }
}
