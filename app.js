const formColor = document.querySelector('form');
const radios = formColor.elements.radioCol;

radios.forEach(radio => {
    radio.addEventListener('click', event => {
      const classesToRemove = [ 'redBg', 'yellowBg', 'blueBg', 'pinkBg', 'blank' ];
      classesToRemove.forEach(classToRemove => {
        event.target.closest('.container').classList.remove(classToRemove);
      })
      event.target.closest('.container').classList.add(`${radios.value}`);
    });
  });

const form = document.querySelector('form');
const taskInput = document.querySelector('.new-task-input');
const collection = document.getElementById('collection');
    
    form.addEventListener('submit', addCard);
    function addCard(e) {
        const setBg = document.getElementById('enter-card');
        const checkedCol = Array.from(setBg.elements.radioCol).find(radio => radio.checked);
        
        let li = document.createElement('li');
        li.classList.add('card-item'); 
        li.innerHTML = `
        <form name="card">
        <div class="container ${checkedCol.value}">
          <div class="flex-row">
            <label class="checkbox-container">
            <input type="checkbox">
            <span class="checkmark"></span>
            </label>                      
            <input type="text" class="new-task-input" id="task" name="task" value="${taskInput.value}"> 
              <button class="edit-item seconday-content btn-style">
              <a><i class="fa fa-edit"></i></a></button>
              <button class="remove-item seconday-content btn-style">
              <a><i class="fa fa-remove"></i></a></button>
            <button class="save-item seconday-content btn-style hidden">
                <a><i class="fa fa-save"></i></a></button>
            <input type="submit" value="Add" class="btn-style non-icon hidden">
          </div>  
          <div class="colors">           
          <label class="color-picker">
          <input type="radio" name="radioCol" value="redBg">
            <span class="red checkmark-color"></span>
          </label>
          <label class="color-picker">
          <input type="radio" name="radioCol" value="pinkBg">
              <span class="pink checkmark-color"></span>
          </label>
          <label class="color-picker">
          <input type="radio" name="radioCol" value="yellowBg">
            <span class="yellow checkmark-color"></span>
          </label>
          <label class="color-picker">
          <input type="radio" name="radioCol" value="blueBg">
            <span class="blue checkmark-color"></span>
          </label>
            </div>
        </div>
      </form>              
        `
        const mainCol = document.getElementById('main-color');
        mainCol.classList.add('blank');
        taskInput.value = '';
        collection.appendChild(li);         
        e.preventDefault();     
    }