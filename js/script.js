const ToDoList = function() {
    let id = 0;
    this.init = () => {
        const element = document.querySelector('.list');
        const markup = document.createElement('div');
        markup.classList.add('list_markup');
        markup.innerHTML = `<h2>To Do list</h2>
                            <input class="input_text" type="text">
                            <ul class="list_ul"></ul>
                            <button class="button">Очистить список</button>`

        element.appendChild(markup);
        this.addendum();
        

    }

    this.addendum = () => {
        const inputText = document.querySelector('.input_text');
        inputText.addEventListener('keyup', (event) => {
            if (event.target.value !='' && event.key === 'Enter') {
                this.addList(event.target.value);
                event.target.value = "";
            }
        })
        
    }

    this.addList = () => {
        const addList = document.querySelector('.list_ul');
        const addListLi = document.createElement('li');
        addListLi.classList.add('list_li');
        addListLi.innerHTML = `<input class="input_check" type="checkbox" id="${id}">
                                <span class="span">${event.target.value}</span>
                                <button class="button_edit">Редактировать</button>
                                <button class="button_delete">Удалить</button>`;
        addList.appendChild(addListLi);
        this.deleteList()
        this.delete ()
        this.edit()
        id++;

        
    }

    this.deleteList = () => {
        const deleteList = document.querySelector('.list_ul');
        const button = document.querySelector('.button');
        
            button.addEventListener('click', () => {
                deleteList.innerHTML='';
            })
    }

    this.delete = () => {
        const deleteButton = document.querySelectorAll('.button_delete');
        deleteButton.forEach((deleteButton) => {
            deleteButton.addEventListener('click',() => {
                let parent = deleteButton.parentElement;
                
                parent.remove()
            })
        })
        
    }

    this.edit = () => {
        const editButton = document.querySelectorAll('.button_edit');
        editButton.forEach((editButton) => {
            editButton.addEventListener('click',() => {
                let editParent = editButton.parentElement;
                let span = editParent.querySelector('.span');
                span.textContent = prompt(span.textContent)

            })
        })

    }
}

window.addEventListener('load', () => {
    const toDoList = new ToDoList();
    toDoList.init()
})