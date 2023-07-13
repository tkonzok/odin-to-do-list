import Checkmark from './check-square.svg';
import Cross from './x.svg';
import { toDoList } from './todos';
import { eventHandler } from './index';

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

const initContent = () => {
    const addBtn = document.getElementById('add-button');
    addBtn.addEventListener('click', () => {eventHandler.openForm()})
    
}

const clearCards = () => {
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = '';
    const doneContainer = document.getElementById('done-card-container');
    doneContainer.innerHTML = '';
}

const createToDoCard = (ind) => {
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
    done.setAttribute("entry", ind)
    done.addEventListener('click', () => {eventHandler.markAsDone(ind)})
    card.appendChild(done);
    done.appendChild(checkmark)
    const dlt = document.createElement('i');
    dlt.classList.add('delete-btn')
    dlt.setAttribute("entry", ind)
    dlt.addEventListener('click', () => {eventHandler.deleteEntry(ind)})
    card.appendChild(dlt);
    dlt.appendChild(cross);
}

const createDoneCard = () => {
    const container = document.getElementById('done-card-container');
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

const fillCard = (card, tTask, tDueDate, tPrio) => {
    const task = document.querySelector(`#${card}-container > div:last-child > .task`);
    task.textContent = tTask;
    const dueDate = document.querySelector(`#${card}-container > div:last-child > .due-date`);
    dueDate.textContent = tDueDate;
    const prio = document.querySelector(`#${card}-container > div:last-child > .prio`);
    prio.textContent = tPrio;
    prio.classList.add(tPrio);
}

export { initNav, initContent, clearCards, createToDoCard, createDoneCard, fillCard };