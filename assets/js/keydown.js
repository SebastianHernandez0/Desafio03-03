var color = ""
ele = document.querySelector("#key")








document.addEventListener("keydown", function (event) {

    if (event.key === "a" || event.key === "A") {
        color = "pink"
        ele.style.backgroundColor = color
    } else if (event.key === "s" || event.key === "S") {

        color = "orange"
        ele.style.backgroundColor = color
    } else if (event.key === "d" || event.key === "D") {
        color = "skyblue"
        ele.style.backgroundColor = color
    }

})

document.addEventListener("keydown", function (event) {
    if (event.key === "q" || event.key === "Q") {

        divVacio = document.createElement("div")
        divVacio.classList.add("layout__div")
        document.body.append(divVacio)
        divVacio.style.backgroundColor="purple"

    } else if (event.key === "w" || event.key === "W") {

        divVacio = document.createElement("div")
        divVacio.classList.add("layout__div")
        document.body.append(divVacio)
        divVacio.style.backgroundColor="gray"

    } else if (event.key === "e" || event.key === "E") {

        divVacio = document.createElement("div")
        divVacio.classList.add("layout__div")
        document.body.append(divVacio)
        divVacio.style.backgroundColor="brown"

    }

})