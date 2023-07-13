import { initNav, initContent, clearCards, createToDoCard, createDoneCard, fillCard, checkDate } from './render';
import { toDoList } from './todos';
import { formHandler } from './form';
import './normalize.css';
import './style.css';

function createToDoList() {
    let toDos = toDoList.getToDos()
    eventHandler.sortByDate(toDos);
    for (let i = 0; i < toDos.length; i++) {
        createToDoCard(i);
        fillCard("card", toDos[i].task, toDos[i].dueDate, toDos[i].prio)
    }
    eventHandler.alertPastDates();
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
        toDoList.addToDo(task, date, prio);
        clearCards();
        createToDoList();
        createDoneList();
        formHandler.closeForm();
    } 

    function alertPastDates() {
        const taskDates = document.querySelectorAll('#card-container > div > p.due-date');
        for (let i=0; i<taskDates.length; i++) {
            if (checkDate(taskDates[i].textContent)) {
                taskDates[i].classList.add('past-date');
            }
        }
    }

    function sortByDate(toDos) {
        toDoList.sortToDos(toDos);
    }

    return {
        markAsDone,
        deleteEntry,
        openForm,
        addTask,
        alertPastDates,
        sortByDate
    }
})();

initNav();
initContent();
createToDoList();
createDoneList();

export { eventHandler }