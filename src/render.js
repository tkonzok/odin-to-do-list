import Checkmark from './check-square.svg';
import Cross from './x.svg';

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
    const task = document.createElement('p');
    task.classList.add('task');
    card.appendChild(task);
    const dueDate = document.createElement('p');
    dueDate.classList.add('due-date');
    card.appendChild(dueDate);
    const prio = document.createElement('p');
    prio.classList.add('prio');
    card.appendChild(prio);

    const checkmark = new Image();
    checkmark.src = Checkmark;
    const cross = new Image();
    cross.src = Cross;

    const done = document.createElement('i');
    done.classList.add('done-btn')
    card.appendChild(done);
    done.appendChild(checkmark)
    const dlt = document.createElement('i');
    dlt.classList.add('delete-btn')
    card.appendChild(dlt);
    dlt.appendChild(cross);
}

const fillCard = (tTask, tDueDate, tPrio) => {
    const task = document.querySelector('#card-container > div:last-child > .task');
    task.textContent = tTask;
    const dueDate = document.querySelector('#card-container > div:last-child > .due-date');
    dueDate.textContent = tDueDate;
    const prio = document.querySelector('#card-container > div:last-child > .prio');
    prio.textContent = tPrio;
}

export { initNav, createCard, fillCard };