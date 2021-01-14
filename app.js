// Color picker of card bg
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

// Adding cards
const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const collection = document.querySelector('.collection');

form.addEventListener('submit', addCard);
function addCard(e) {
    const template = document.getElementById('card-template');
    const li = template.content.firstElementChild.cloneNode(true); 
    template.content.querySelector('.checkbox-container').classList.remove('hidden');
    template.content.querySelector('.new-task-input').setAttribute("value", taskInput.value);
    template.content.querySelector('.remove-item').classList.remove('hidden');
    template.content.querySelector('.edit-item').classList.remove('hidden');
    template.content.querySelector('.non-icon').classList.add('hidden');
    collection.appendChild(li);  
    e.preventDefault();     
}

// Opearting buttons functionality
collection.addEventListener('click', removeCard);
function removeCard(e) {
    if(e.target.classList.contains('remove-item')) {
        e.target.parentElement.parentElement.remove();
    }    
}

collection.addEventListener('click', editable);
function editable(e) {
    if(e.target.classList.contains('edit-item')) {
        e.target.classList.add('hidden');
        e.target.parentElement.lastChild.classList.remove('hidden');
        e.target.previousElementSibling.classList.remove('hidden');
    }
}