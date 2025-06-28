const container = document.querySelector(".container");

// function to create the grid

function createGrid(squares) {
  const calcWidth = 100 / squares;
  const totalSquares = squares * squares;

  for (let index = 0; index < totalSquares; index++) {
    const square = document.createElement("div");
    square.style.width = `${calcWidth}%`;
    square.style.aspectRatio = "1";
    square.style.backgroundColor = "aliceblue";
    square.style.border = "1px solid cadetblue";
    square.style.boxSizing = "border-box";

    container.appendChild(square);

    square.addEventListener("mouseover", (e) => {
        if (e.target.style.backgroundColor == 'aliceblue') {
            e.target.style.backgroundColor = getRandomColor();
        }
      
    });
  }
}

// initialised

createGrid(15);

// human choice

const beginButton = document.querySelector(".begin-btn");
beginButton.addEventListener("click", () => {
  let promptSquares = parseInt(prompt("Choose the number of squares: 1-50"));

  while (promptSquares <= 0 || promptSquares > 50) {
    promptSquares = parseInt(prompt("Choose the number of squares: 1-50"));
  }

  container.innerHTML = "";

  createGrid(promptSquares);
});

// color

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}



function setRandomColor() {
  $("#colorpad").css("background-color", getRandomColor());
}