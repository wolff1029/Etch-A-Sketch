let container = document.querySelector('.container');
let sqrBtn = document.querySelector('#squareBtn');
sqrBtn.addEventListener('click', onClick);
console.log(container);

let numberSquaresPerSide = 4;
let totalSquares = numberSquaresPerSide*numberSquaresPerSide;
drawSquares(totalSquares);


function drawSquares(totalSquares){
    container.innerHTML = '';    


    for(let i = 0; i<totalSquares; i++){
        let div = document.createElement("div");
        div.classList.add("square");

        let length = (100)/numberSquaresPerSide;
        console.log(length);
        length = length.toString() +'%';
        div.style.width = length;
        div.style.height = length;


        container.appendChild(div);
    
    }
}


function onClick(e){
    numberSquaresPerSide = prompt('How many squares per side?');
    totalSquares = numberSquaresPerSide * numberSquaresPerSide;
    drawSquares(totalSquares);
}