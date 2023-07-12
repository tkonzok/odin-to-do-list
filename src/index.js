import { initNav, createToDoCard, createDoneCard, fillCard } from './render';
import { toDoList } from './todos';
import './normalize.css';
import './style.css';

initNav();
let toDos = toDoList.getToDos()
for (let i = 0; i < toDos.length; i++) {
    createToDoCard(i);
    fillCard("card", toDos[i].task, toDos[i].dueDate, toDos[i].prio)
}
let done = toDoList.getDone()
for (let i = 0; i < done.length; i++) {
    createDoneCard();
    fillCard("done-card", done[i].task, done[i].dueDate, done[i].prio)
}