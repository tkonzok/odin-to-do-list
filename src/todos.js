const toDoList = (() => {
    function ToDo(title, task, dueDate, prio) {
        this.title = title;
        this.task = task;
        this.dueDate = dueDate;
        this.prio = prio;
    }

    let myToDos = [
        new ToDo('Title 1', 'Task 1', '1', 'low'),
        new ToDo('Title 2', 'Task 2', '1', 'mid'),
        new ToDo('Title 3', 'Task 3', '1', 'low'),
        new ToDo('Title 4', 'Task 4', '1', 'high'),
        new ToDo('Title 5', 'Task 5', '1', 'high'),
    ]

    const getToDos = () => myToDos;

    const addToDo = (task) => myToDos.push(task);

    return {
        getToDos,
        addToDo
    };
})();

export { toDoList }