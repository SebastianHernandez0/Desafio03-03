//function pintar() {
//    ele.style.backgroundColor = 'yellow'
//}
const ele = document.getElementById("ele1")
//ele.addEventListener("click", function(){
//    ele.style.backgroundColor="yellow"
//});

function pintar(color) {
    ele.style.backgroundColor = color
}

ele.addEventListener("click", pintar("green"))
ele.addEventListener("click", function () {
    ele.style.backgroundColor = "yellow"
});