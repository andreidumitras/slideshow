const imagini = [
    "img/p1.jpg",
    "img/p2.jpg",
    "img/p3.jpg",
    "img/p4.jpg",
    "img/p5.jpg",
    "img/p6.jpg",
    "img/p7.jpg",
    "img/p8.jpg",
    "img/p9.jpg"
];

let on = false;

let elemente = [];

var width = 800;

var nrSecunde = 3000;

function loadImage(image, i) {
    let imgElement = document.createElement("img");
    imgElement.src = image;
    
}

imagini.forEach((image, i) => {
    let elem = document.createElement("img");
    elem.src = image;
    const position = width * i;
    elem.style.translate = position + "px" + " 0";
    document.querySelector(".slideshow").appendChild(elem);
    elemente.push({elem, position});
});

setInterval(() => {
    if(on) {
        elemente.forEach(({elem, position}, i) => {
            if (position < -2 * width) {
                position += width * (elemente.length - 1);
                elemente[i].elem.style.display = "none";
            } else {
                position -= width;
                elemente[i].elem.style.display = "block";
            }
            // if(elemente.at(-1).position === 0) {
            //     position = width * i;
            // } else {
            //     position -= width;
            // }
            elemente[i].position = position;
            elem.style.translate = position + "px" + " 0";
        });
    }
}, nrSecunde);

const start = () => on = true;
const stop = () => on = false;
