

function getRed(event) {
    if (event.target.parentElement.parentElement.parentElement.classList.contains('blueBg')) {
        event.target.parentElement.parentElement.parentElement.classList.remove('blueBg');
    } else if (event.target.parentElement.parentElement.parentElement.classList.contains('yellowBg')) {
        event.target.parentElement.parentElement.parentElement.classList.remove('yellowBg');
    }  else if (event.target.parentElement.parentElement.parentElement.classList.contains('pinkBg')) {
        event.target.parentElement.parentElement.parentElement.classList.remove('pinkBg');
    } 
    event.target.parentElement.parentElement.parentElement.classList.add('redBg');
}

function getPink(event) {
    if (event.target.parentElement.parentElement.parentElement.classList.contains('blueBg')) {
        event.target.parentElement.parentElement.parentElement.classList.remove('blueBg');
    } else if (event.target.parentElement.parentElement.parentElement.classList.contains('yellowBg')) {
        event.target.parentElement.parentElement.parentElement.classList.remove('yellowBg');
    }  else if (event.target.parentElement.parentElement.parentElement.classList.contains('redBg')) {
        event.target.parentElement.parentElement.parentElement.classList.remove('redBg');
    } 
    event.target.parentElement.parentElement.parentElement.classList.add('pinkBg');
}

function getYellow(event) {
    if (event.target.parentElement.parentElement.parentElement.classList.contains('blueBg')) {
        event.target.parentElement.parentElement.parentElement.classList.remove('blueBg');
    } else if (event.target.parentElement.parentElement.parentElement.classList.contains('redBg')) {
        event.target.parentElement.parentElement.parentElement.classList.remove('redBg');
    }  else if (event.target.parentElement.parentElement.parentElement.classList.contains('pinkBg')) {
        event.target.parentElement.parentElement.parentElement.classList.remove('pinkBg');
    } 
    event.target.parentElement.parentElement.parentElement.classList.add('yellowBg');
}

function getBlue(event) {
    if (event.target.parentElement.parentElement.parentElement.classList.contains('redBg')) {
        event.target.parentElement.parentElement.parentElement.classList.remove('redBg');
    } else if (event.target.parentElement.parentElement.parentElement.classList.contains('yellowBg')) {
        event.target.parentElement.parentElement.parentElement.classList.remove('yellowBg');
    }  else if (event.target.parentElement.parentElement.parentElement.classList.contains('pinkBg')) {
        event.target.parentElement.parentElement.parentElement.classList.remove('pinkBg');
    } 
    event.target.parentElement.parentElement.parentElement.classList.add('blueBg');
}

const cardContainer = document.getElementById('main-card');
const template = document.getElementById('card-template');
console.log(template);

const firstClone = template.content.firstElementChild.cloneNode(true);
cardContainer.appendChild(firstClone);


// 
//nastepne
// const cardContainder = document.getElementById('cardContainer');
// const cardTemplate = document.getElementById('template');
// function firstCard() {
//     const firstClone = template.content.firstElementChild.cloneNode(true);
//     cardContainer.appendChild(firstClone);
// }
// firstCard();
// console.log(cardContainer);

// const firstClone = template.content.firstElementChild.cloneNode(true);
// firstClone.addEventListener("click", clickHandler);
// container.appendChild(firstClone);