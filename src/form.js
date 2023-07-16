import { eventHandler } from './index';
import { format } from 'date-fns';

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
        let today = new Date();
        dueDateInput.setAttribute("min", format(today, 'yyyy-MM-dd'));
        dueDateInput.valueAsDate = today;
        form.appendChild(dueDateInput);

        let prioInput = document.createElement('select')
        prioInput.setAttribute("class", "form");
        prioInput.setAttribute("id", "todo-prio");
        form.appendChild(prioInput);

        let option1 = document.createElement('option');
        option1.setAttribute("value", "low");
        option1.textContent = "Low Priority";
        prioInput.appendChild(option1);
        let option2 = document.createElement('option');
        option2.setAttribute("value", "mid");
        option2.textContent = "Mid Priority";
        prioInput.appendChild(option2);
        let option3 = document.createElement('option');
        option3.setAttribute("value", "high");
        option3.textContent = "High Priority";
        prioInput.appendChild(option3);
        
        let btn = document.createElement('button');
        btn.setAttribute("type", "submit");
        btn.setAttribute("id", "submit-btn");
        btn.textContent = "Add Task";
        form.appendChild(btn);

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const formTask = document.getElementById('todo-task');
            const formDueDate = document.getElementById('todo-due-date');
            const formPrio = document.getElementById('todo-prio');
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