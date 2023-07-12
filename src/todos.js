const toDoList = (() => {
    function ToDo(task, dueDate, prio) {
        this.task = task;
        this.dueDate = dueDate;
        this.prio = prio;
    }

    let myToDos = [
        new ToDo('Task 1', '1', 'low'),
        new ToDo('Task 2', '1', 'mid'),
        new ToDo('Task 3', '1', 'low'),
        new ToDo('Task 4', '1', 'high'),
        new ToDo('Task 5', '1', 'high'),
    ]

    let doneToDos = [
        new ToDo('Done Task 1', '1', 'low'),
        new ToDo('Done Task 2', '1', 'mid'),
        new ToDo('Done Task 3', '1', 'low'),
    ]

    const getToDos = () => myToDos;

    const getDone = () => doneToDos;

    const addToDo = (task) => myToDos.push(task);

    const addDone = (task) => doneToDos.push(task);

    function markAsDone(taskId) {
        addDone(myToDos[taskId]);
        myToDos.splice(taskId, 1)
    }

    return {
        markAsDone,
        getToDos,
        getDone,
        addToDo
    };
})();

export { toDoList }