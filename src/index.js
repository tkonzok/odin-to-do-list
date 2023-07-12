import { initNav, createCard, fillCard } from './render';
import { toDoList } from './todos';
import './normalize.css';
import './style.css';

initNav();
let toDos = toDoList.getToDos()
for (let i = 0; i < toDos.length; i++) {
    createCard();
    fillCard(toDos[i].task, toDos[i].dueDate, toDos[i].prio)
}