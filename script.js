fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    build_div(data);
  })
  .catch((error) => console.error("Error loading JSON file", error));

function build_div(data) {
  const frame = document.getElementById("loop");
  data.map((element) => {
    console.log(element);
    let newDiv = document.createElement("div");
    newDiv.className = "card";
    newDiv.innerHTML = `
        <img src="${element.icon}"/>
        <h2>${element.category}</h2>
        <p>${element.score}<span class="out-of">&nbsp;/&nbsp;100</span></p>`;
    frame.appendChild(newDiv);
  });
}
