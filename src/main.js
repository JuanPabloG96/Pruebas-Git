const btn = document.getElementById("btn");
const body = document.body
let prevUsedNumber = 0
const colors = ["darkblue", "blueviolet", "coral", "darkred", "lightseagreen", "goldenrod"];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function getRandomColor(max, used) {
    let num = Math.floor(Math.random() * max);
    if(num != used){
        return num
    }
}

function moveBtn() {
    let maxWidth = window.innerWidth - btn.offsetWidth;
    let maxHeight = window.innerHeight - btn.offsetHeight;

    height = getRandomInt(maxHeight);
    width = getRandomInt(maxWidth);

    if (height >= 0 && width >= 10) {
        btn.style.top = `${height}px`;
        btn.style.left = `${width}px`;
    }
}

btn.addEventListener('click', ()=>{
    let randNum = getRandomColor(6, prevUsedNumber)
    prevUsedNumber = randNum   

    body.style.backgroundColor = `${colors[randNum]}`
})
