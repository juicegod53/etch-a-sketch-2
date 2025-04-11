let container = document.querySelector("#container")
container.style.display = "flex"
container.style.flexDirection = "column"
container.style.height = "800px"
container.style.width = "800px"

let default_squares = 16

let button = document.querySelector("#new")

button.addEventListener("click", function() {
    new_grid_squares = prompt("Enter grid size:")
    new_grid_squares = parseInt(new_grid_squares)
    if (new_grid_squares <= 100) {
        container.innerHTML = ''
        generateGrid(new_grid_squares)
    }
})

function random_rgb() {
    r = Math.floor(Math.random() * 255)
    g = Math.floor(Math.random() * 255)
    b = Math.floor(Math.random() * 255)
    return 'rgb(' + r + ',' + g + ',' + b + ',0.1)'
}

function generateGrid(squares) {
    for (let i = 0; i < squares; i++) {
        let div = document.createElement("div")
        div.style.display = "flex"
        let square_size = (800 - ((squares+1) * 2)) / squares
        for (let j = 0; j < squares; j++) {
            let subdiv = document.createElement("div")
            subdiv.style.border = "2px solid black"
            subdiv.style.backgroundColor = "white"
            subdiv.addEventListener("mouseover", function(e) {
                randomColour = random_rgb()
                closingBracket = e.target.style.backgroundColor.indexOf(')')
                currentOpacity = e.target.style.backgroundColor.substring(closingBracket-3,closingBracket)
                currentOpacity = parseFloat(currentOpacity)
                if (currentOpacity < 1) {
                    newOpacity = currentOpacity + 0.1
                    randomColour = e.target.style.backgroundColor.substring(0,closingBracket-3) + parseFloat(newOpacity) + ')'
                }
                if (currentOpacity < 1 || subdiv.style.backgroundColor == 'white')
                e.target.style.backgroundColor = randomColour
            })
            if (i != (squares-1)) {
                subdiv.style.borderBottom = "0"
            }
            if (j != (squares-1)) {
                subdiv.style.borderRight = "0"
            }
            subdiv.style.height = square_size.toString() + "px"
            subdiv.style.width = square_size.toString() + "px"
            div.appendChild(subdiv)
        }
        container.appendChild(div)
    }
}

generateGrid(default_squares)

