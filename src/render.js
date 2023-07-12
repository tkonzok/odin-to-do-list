const initNav = () => {
    const navItems = ['Project 1', 'Project 2', 'Project 3'];
    const navbar = document.getElementById('nav-elements');
    const list = document.createElement('ul');
    navbar.appendChild(list);
    let listItems = '';
    navItems.forEach((item) => {
        listItems += '<li>'+item+'</li>';
    });
    list.innerHTML = listItems
}

const createCard = () => {
    const container = document.getElementById('card-container');
    const card = document.createElement('div');
    card.classList.add('card');
    container.appendChild(card);
    const title = document.createElement('h4');
    card.appendChild(title);
    const task = document.createElement('p');
    card.appendChild(task);
    const dueDate = document.createElement('p');
    card.appendChild(dueDate);
    const prio = document.createElement('p');
    card.appendChild(prio);
    const btnDiv = document.createElement('div');
    btnDiv.classList.add('card-icons')
    card.appendChild(btnDiv);
    const doneBtn = document.createElement('i');
    doneBtn.textContent = '✓'
    btnDiv.appendChild(doneBtn);
    const editBtn = document.createElement('i');
    editBtn.textContent = 'E'
    btnDiv.appendChild(editBtn);
    const deleteBtn = document.createElement('i');
    deleteBtn.textContent = 'D'
    btnDiv.appendChild(deleteBtn);
}

const fillCard = (tTitle, tTask, tDueDate, tPrio) => {
    const title = document.querySelector('#card-container > div:last-child > h4');
    title.textContent = tTitle;
    const task = document.querySelector('#card-container > div:last-child > p:nth-child(2)');
    task.textContent = tTask;
    const dueDate = document.querySelector('#card-container > div:last-child > p:nth-child(3)');
    dueDate.textContent = tDueDate;
    const prio = document.querySelector('#card-container > div:last-child > p:nth-child(4)');
    prio.textContent = tPrio;
}

export { initNav, createCard, fillCard };
