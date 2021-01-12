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
