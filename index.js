let totalIncome = parseFloat(localStorage.getItem('totalIncome')) || 0;

document.addEventListener('DOMContentLoaded', () => {
    // Atualizar os resultados ao carregar a página
    updateResult();
});

function addIncome() {
    const incomeInput = document.getElementById('income');
    const incomeValue = parseFloat(incomeInput.value);

    if (!isNaN(incomeValue)) {
        totalIncome += incomeValue;
        updateResult();
        incomeInput.value = '';

        // Salvar no armazenamento local
        localStorage.setItem('totalIncome', totalIncome.toString());
    } else {
        alert('Por favor, insira um valor válido.');
    }
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
