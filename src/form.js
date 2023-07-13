import { eventHandler } from './index';
import { toDoList } from './todos';

const formHandler = (() => {

    function openForm() {
        const content = document.querySelector('#content');
        const formDiv = document.createElement('div');
        formDiv.classList.add('form-div');
        content.appendChild(formDiv);
        const form = document.createElement('form');
        formDiv.appendChild(form);

        let taskInput = document.createElement('input');
        taskInput.setAttribute("type", "text");
        taskInput.setAttribute("class", "form");
        taskInput.setAttribute("id", "todo-task");
        taskInput.setAttribute("placeholder", "Task");
        form.appendChild(taskInput);

        let dueDateInput = document.createElement('input')
        dueDateInput.setAttribute("type", "date");
        dueDateInput.setAttribute("class", "form");
        dueDateInput.setAttribute("id", "todo-due-date");
        dueDateInput.setAttribute("value", "2023-07-01");
        form.appendChild(dueDateInput);

        let prioInput = document.createElement('input')
        prioInput.setAttribute("type", "text");
        prioInput.setAttribute("class", "form");
        prioInput.setAttribute("id", "num-prio");
        prioInput.setAttribute("placeholder", "Priority (low / mid / high)");
        form.appendChild(prioInput);
        
        let btn = document.createElement('button');
        btn.setAttribute("type", "submit");
        btn.setAttribute("id", "submit-btn");
        btn.textContent = "Add Task";
        form.appendChild(btn);

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const formTask = document.getElementById('todo-task');
            const formDueDate = document.getElementById('todo-due-date');
            const formPrio = document.getElementById('num-prio');
            console.log(`${formDueDate.value} is the value`);
            eventHandler.addTask(formTask.value, formDueDate.value, formPrio.value);
        })
    }

    function closeForm() {
        const content = document.querySelector('#content');
        content.removeChild(content.lastChild);
    }

    return {
        openForm,
        closeForm
    };
})();

export { formHandler }