document.addEventListener("DOMContentLoaded", function () {
    const calendarContainer = document.getElementById("calendar");
    const monthSelector = document.getElementById("monthSelector");

    // Preenche o seletor de mês
    for (let month = 1; month <= 12; month++) {
        const option = document.createElement("option");
        option.value = month;
        option.text = getMonthName(month);
        monthSelector.add(option);
    }

    // Adiciona um evento de mudança para atualizar o calendário
    monthSelector.addEventListener("change", updateCalendar);

    // Inicializa o calendário com o mês atual
    updateCalendar();
});

function updateCalendar() {
    const calendarContainer = document.getElementById("calendar");
    const selectedMonth = parseInt(document.getElementById("monthSelector").value);

    // Limpa o conteúdo anterior do calendário
    calendarContainer.innerHTML = '';

    // Cria os dias da semana
    const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    for (let day of daysOfWeek) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('day');
        dayElement.textContent = day;
        calendarContainer.appendChild(dayElement);
    }

    // Obtém o ano e o número de dias no mês selecionado
    const currentYear = new Date().getFullYear();
    const daysInMonth = new Date(currentYear, selectedMonth, 0).getDate();

    // Cria os dias do mês
    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('day');
        dayElement.textContent = day;
        dayElement.addEventListener('click', function () {
            addTask(day);
        });
        calendarContainer.appendChild(dayElement);
    }
}

function addTask(day) {
    const task = prompt(`Digite a tarefa para o dia ${day}`);
    if (task) {
        const taskList = document.createElement('ul');
        taskList.classList.add('task-list');

        const taskItem = document.createElement('li');
        taskItem.classList.add('task');
        taskItem.textContent = task;

        taskList.appendChild(taskItem);

        const dayElement = document.querySelectorAll('.day')[day + 6]; // seleciona o dia correto (considerando dias da semana)
        dayElement.appendChild(taskList);
    }
}

function getMonthName(month) {
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return monthNames[month - 1];
}
