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

    const getToDos = () => myToDos;

    const addToDo = (task) => myToDos.push(task);

    return {
        getToDos,
        addToDo
    };
})();

export { toDoList }