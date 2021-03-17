const input = document.getElementById("input");
const button = document.getElementById("button");

function getValue() {
  const input = document.getElementById("input");

  if (input.value === "") console.log("You haven't entered anything.");
  else {
    fetch("https://www.omdbapi.com/?t=" + input.value + "&apikey=d54c9527")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.Title);
        console.log(data);
      });
  }
}
