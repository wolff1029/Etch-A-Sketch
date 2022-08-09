function createDivs(count) {
    let divArray = [];
    for (let i = 0; i < count; i++) {
        let loopDiv = document.createElement('div');
        let innerDiv = document.createElement('div');
        innerDiv.classList.add('inner-box');
        loopDiv.classList.add('box');
        innerDiv.innerText = '.';
        innerDiv.addEventListener('mouseover', onHandleOnMouseOver);
        innerDiv.addEventListener("mouseout", onHandleOnMouseOut)
        loopDiv.appendChild(innerDiv);
        divArray.push(loopDiv);
        console.log(`loopDiv = ${loopDiv}`);

    }
    return divArray;
}
function onHandleOnMouseOver(e) {

    let r = randomBetween(0, 255);
    let g = randomBetween(0, 255);
    let b = randomBetween(0, 255);
    let rgb = `rgb(${r},${g},${b})`;
    e.target.style['background-color'] = rgb;
}
function onHandleOnMouseOut(e) {
    e.target.style['background-color'] = 'grey';
}
function onClick(e) {
    let dimension = prompt("How many squares per side?", 16);
    console.log(`dimension ${dimension}`);
    let container = document.querySelector('.container');
    let boxes = document.querySelectorAll('.box');
    boxes.forEach(box => container.removeChild(box));
    let array = createDivs(dimension * dimension);
    let basis = (100 / dimension).toString() + '%';
    console.log(`basis ${basis}`);

    array.forEach(div => div.style['flex-basis'] = basis);

    array.forEach(div => container.appendChild(div));
}

let array = createDivs(16 * 16);
let container = document.querySelector('.container');
console.log(`container = ${container}`);
array.forEach(div => container.appendChild(div));


function randomBetween(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
};
