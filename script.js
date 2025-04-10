let container = document.querySelector("#container")
container.style.display = "flex"
container.style.flexDirection = "column"
container.style.height = "640px"
container.style.width = "640px"

for (let i = 0; i < 16; i++) {
    let div = document.createElement("div")
    div.style.display = "flex"
    for (let j = 0; j < 16; j++) {
        let subdiv = document.createElement("div")
        subdiv.style.border = "2px solid black"
        subdiv.addEventListener("mouseover", function(e) {
            e.target.style.backgroundColor = "black"
        })
        if (i != 15) {
            subdiv.style.borderBottom = "0"
        }
        if (j != 15) {
            subdiv.style.borderRight = "0"
        }
        subdiv.style.height = "40px"
        subdiv.style.width = "40px"
        div.appendChild(subdiv)
    }
    container.appendChild(div)
}


