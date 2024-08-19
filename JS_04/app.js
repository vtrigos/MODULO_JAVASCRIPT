// VARIABLES
const listName = document.getElementById('listName');
const listDate = document.getElementById('listDate');
const listAuthor = document.getElementById('listAuthor');
const listForm = document.getElementById('listForm');
const tasksTitle = document.getElementById('tasksTitle');
const tasks = document.getElementById('tasks');

const list = { nameList: '', dateList: '', authorList: '' };
let taskList = [];

// LISTENERS
listName.addEventListener('input', (e) => {
    list.nameList = e.target.value;
});

listDate.addEventListener('input', (e) => {
    list.dateList = e.target.value;
});

listAuthor.addEventListener('input', (e) => {
    list.authorList = e.target.value;
});

listForm.addEventListener('submit', (e) => {
    e.preventDefault();

    taskList = [...taskList, { ...list }];

    listName.value = '';
    listDate.value = '';
    listAuthor.value = '';

    list.nameList = '';
    list.dateList = '';
    list.authorList = '';

    listTasks();
});

// FUNCIONES

function listTasks() {

    tasks.innerHTML = '';

    if (taskList.length === 0) {
        tasksTitle.textContent = 'NO DATA';
    } else {
        tasksTitle.textContent = 'LISTADO DE TAREAS';
    }

    taskList.forEach((task, index) => {
        const taskElement = document.createElement('div');
        taskElement.className = 'taskItem';
        taskElement.innerHTML = `
           <b>${index + 1}. </b> ${task.nameList}, ${task.dateList}, ${task.authorList}
        `;

        const delButton = document.createElement('button');
        delButton.innerHTML = `<b>X</b>`;
        delButton.className = 'taskButton';
        delButton.addEventListener('click', () => {
            deleteTask(index)
        });

        taskElement.appendChild(delButton);
        tasks.appendChild(taskElement);
    });
}

function deleteTask(index) {
    taskList.splice(index, 1);
    listTasks();
}