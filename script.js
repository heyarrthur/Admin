let totalIncome = parseFloat(localStorage.getItem('totalIncome')) || 0;
let faturamentos = JSON.parse(localStorage.getItem('faturamentos')) || [];

document.addEventListener('DOMContentLoaded', () => {
    // Atualizar os resultados e faturamentos ao carregar a página
    updateResult();
    updateFaturamentos();
});

function addIncome() {
    const incomeInput = document.getElementById('income');
    const reasonInput = document.getElementById('reason');

    const incomeValue = parseFloat(incomeInput.value);
    const reason = reasonInput.value.trim();

    if (!isNaN(incomeValue) && reason !== '') {
        totalIncome += incomeValue;
        updateResult();
        saveFaturamento(incomeValue, reason);
        incomeInput.value = '';
        reasonInput.value = '';
    } else {
        alert('Por favor, insira um valor e motivo válidos.');
    }
}

function saveFaturamento(value, reason) {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString();
    const faturamento = { value, reason, date: formattedDate };

    faturamentos.push(faturamento);
    updateFaturamentos();

    // Salvar no armazenamento local
    localStorage.setItem('totalIncome', totalIncome.toString());
    localStorage.setItem('faturamentos', JSON.stringify(faturamentos));
}


function updateFaturamentos() {
    const faturamentosList = document.getElementById('faturamentosList');
    faturamentosList.innerHTML = '';

    faturamentos.forEach(faturamento => {
        const listItem = document.createElement('li');
        listItem.textContent = `${faturamento.reason}: +R$${faturamento.value.toFixed(2)} (${faturamento.date})`;

        // Adicionar formatação de cor verde
        listItem.style.color = 'green';

        faturamentosList.appendChild(listItem);
    });
}

function updateResult() {
    const totalIncomeElement = document.getElementById('totalIncome');
    const percentageElement = document.getElementById('percentage');

    totalIncomeElement.textContent = totalIncome.toFixed(2);

    // Assumindo uma fatura total fixa de 1000 para demonstração
    const totalInvoice = 1000;

    const percentage = (totalIncome / totalInvoice) * 100;
    percentageElement.textContent = percentage.toFixed(2) + '%';
}
