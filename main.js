// Varibles Globlales 
let IdCounter = 0;
let input = document.querySelector('input[type="text"]');

const userInput = document.querySelector('form');

userInput.addEventListener('submit', (event) => {
    event.preventDefault();
    // console.log("Se ha disparado el evento SUBMIT")  
    addTask();
});
let addTask = () => {
    IdCounter++;
    let newValue = input.value;
    if (newValue.trim() == "") return;
    list.innerHTML += `
    <div class="task-container" id="${IdCounter}">
            <label>
                <input type="checkbox">
                ${newValue}
            </label>
            <img src="./images/delete.png" class="closeBtn">
        </div>
    `;

    input.value = '';
    updateStats();
}

list.addEventListener('click', (event) => {
    // console.log(event.srcElement.nodeName);
    if (event.srcElement.nodeName == 'INPUT') {
        updateStats();
    } else if (event.srcElement.nodeName == 'IMG') {
    // console.log(event.srcElement.parentNode.id);
        deleteTask(event.srcElement.parentNode.id);
    }
})

let updateStats = () => {
    let element = list.querySelectorAll('div');
    let checkbox = list.querySelectorAll('input[type="checkbox"]:checked');
    stats.innerHTML = `<p>Tareas pendientes: ${element.length} - Completadas: ${checkbox.length}</p>`;
}

let deleteTask = (id) => {
    let taskToDelete = document.getElementById(id);
    list.removeChild(taskToDelete);
    updateStats();
}
