import { format, parseISO } from 'date-fns';

const toDoList = (() => {
    function ToDo(task, dueDate, prio) {
        this.task = task;
        this.dueDate = dueDate;
        this.prio = prio;
    }

    const today = new Date()

    let myToDos = [
        new ToDo('Task 1', format(today.setDate(today.getDate() - 1), 'dd.MM.yyyy'), 'low'),
        new ToDo('Task 2', format(today.setDate(today.getDate() + 1), 'dd.MM.yyyy'), 'mid'),
        new ToDo('Task 3', format(today.setDate(today.getDate() + 1), 'dd.MM.yyyy'), 'low'),
        new ToDo('Task 4', format(today.setDate(today.getDate() + 1), 'dd.MM.yyyy'), 'high'),
        new ToDo('Task 5', format(today.setDate(today.getDate() + 1), 'dd.MM.yyyy'), 'high'),
    ]

    let doneToDos = [
        new ToDo('Done Task 1', '1', 'low'),
        new ToDo('Done Task 2', '1', 'mid'),
        new ToDo('Done Task 3', '1', 'low'),
    ]

    const getToDos = () => myToDos;

    const getDone = () => doneToDos;

    const addToDo = (task, date, prio) => myToDos.push(new ToDo(task, format(parseISO(date), "dd.MM.yyyy"), prio));

    const addDone = (task) => doneToDos.push(task);

    const remove = (taskId) => myToDos.splice(taskId, 1);

    function moveDone(taskId) {
        addDone(myToDos[taskId]);
        remove(taskId);
    }

    return {
        getToDos,
        getDone,
        addToDo,
        moveDone,
        remove
    };
})();

export { toDoList }