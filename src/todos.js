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
        new ToDo('Done Task 1', format(today.setDate(today.getDate() - 4), 'dd.MM.yyyy'), 'low'),
        new ToDo('Done Task 2', format(today.setDate(today.getDate() - 1), 'dd.MM.yyyy'), 'mid'),
        new ToDo('Done Task 3', format(today.setDate(today.getDate() - 222), 'dd.MM.yyyy'), 'low'),
    ]

    const getToDos = () => myToDos;

    const sortToDos = (list) => {
        list.sort((a,b) => (new Date(
                                    a.dueDate.split('.')[2] + '-' + 
                                    a.dueDate.split('.')[1] + '-' + 
                                    a.dueDate.split('.')[0]
                                ) - new Date(
                                    b.dueDate.split('.')[2] + '-' + 
                                    b.dueDate.split('.')[1] + '-' + 
                                    b.dueDate.split('.')[0]
                                )
                            )
                        );
    }

    const getDone = () => doneToDos;

    const addToDo = (task, date, prio) => myToDos.push(new ToDo(task, format(parseISO(date), "dd.MM.yyyy"), prio));

    const addDone = (task) => doneToDos.unshift(task);

    const remove = (taskId) => myToDos.splice(taskId, 1);

    function moveDone(taskId) {
        addDone(myToDos[taskId]);
        remove(taskId);
    }

    return {
        getToDos,
        sortToDos,
        getDone,
        addToDo,
        moveDone,
        remove
    };
})();

export { toDoList }