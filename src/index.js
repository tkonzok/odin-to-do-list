import { initNav, initContent, clearCards, createToDoCard, createDoneCard, fillCard } from './render';
import { toDoList } from './todos';
import { formHandler } from './form';
import './normalize.css';
import './style.css';

function createToDoList() {
    let toDos = toDoList.getToDos()
    for (let i = 0; i < toDos.length; i++) {
        createToDoCard(i);
        fillCard("card", toDos[i].task, toDos[i].dueDate, toDos[i].prio)
    }
}

function createDoneList() {
    let done = toDoList.getDone()
    for (let i = 0; i < done.length; i++) {
        createDoneCard();
        fillCard("done-card", done[i].task, done[i].dueDate, done[i].prio)
    }
}

const eventHandler = (() => {
    function markAsDone(index) {
        toDoList.moveDone(index);
        clearCards();
        createToDoList();
        createDoneList();
    } 

    function deleteEntry(index) {
        toDoList.remove(index);
        clearCards();
        createToDoList();
        createDoneList();
    } 

    function openForm() {
        formHandler.openForm();
    }

    function addTask(task, date, prio) {
        console.log(task, date, prio)
        toDoList.addToDo(task, date, prio);
        clearCards();
        createToDoList();
        createDoneList();
        formHandler.closeForm();
    } 

    return {
        markAsDone,
        deleteEntry,
        openForm,
        addTask
    }
})();

initNav();
initContent();
createToDoList();
createDoneList();

export { eventHandler }