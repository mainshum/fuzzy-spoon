

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

const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const collection = document.querySelector('.collection');

form.addEventListener('submit', addCard);
function addCard(e) { 
    if(taskInput.value === '') {
        alert('Add a task');
    }    
    const li =  document.createElement('li');  
    li.className = 'card-item';
    let inpt = document.createElement('input');
    inpt.setAttribute("type", "checkbox");
    li.appendChild(inpt);
    let inpt2 = document.createElement('input');
    inpt2.setAttribute("type", "text");
    inpt2.setAttribute("value", taskInput.value);
    li.appendChild(inpt2);    

    let saveBtn = document.createElement('input');
    saveBtn.setAttribute("type", "button");
    saveBtn.setAttribute("value", "Save");
    saveBtn.className = 'btn save hidden';
    li.appendChild(saveBtn);

    let editBtn = document.createElement('input');
    editBtn.setAttribute("type", "button");
    editBtn.setAttribute("value", "Edit");
    editBtn.className = 'btn edit';
    li.appendChild(editBtn);

    let delBtn = document.createElement('input');
    delBtn.setAttribute("type", "button");
    delBtn.setAttribute("value", "X");
    delBtn.className = 'btn delete';
    li.appendChild(delBtn);
    
  
    let divColors = document.createElement('div'); 
    let bred = document.createElement('button'); 
    let borange = document.createElement('button'); 
    let byellow = document.createElement('button'); 
    let bblue =document.createElement('button'); 
    divColors.className = 'colors hidden';
    divColors.appendChild(bred);
    divColors.appendChild(borange);
    divColors.appendChild(byellow);
    divColors.appendChild(bblue);
    bred.setAttribute("type", "button");
    bred.className = 'btn-color red';
    borange.setAttribute("type", "button");
    borange.className = 'btn-color orange';
    byellow.setAttribute("type", "button");
    byellow.className = 'btn-color yellow';
    bblue.setAttribute("type", "button");
    bblue.className = 'btn-color blue';
    li.appendChild(divColors);   

    // console.log(li);
    collection.appendChild(li);
    taskInput.value = '';
    e.preventDefault();  
}





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