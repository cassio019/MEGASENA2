document.addEventListener('DOMContentLoaded', function () {
    const generateBtn = document.getElementById('generateBtn');
    const numberElements = document.querySelectorAll('.number');

    // Gera números aleatórios ao carregar a página
    generateRandomNumbers();

    generateBtn.addEventListener('click', generateRandomNumbers);

    function generateRandomNumbers() {
        // Gera 6 números inteiros, únicos e aleatórios entre 1 e 60
        const numbers = [];
        while (numbers.length < 6) {
            const randomNum = Math.floor(Math.random() * 60) + 1;
            if (!numbers.includes(randomNum)) {
                numbers.push(randomNum);
            }
        }

        // Ordenar os números (como no sorteio)
        numbers.sort((a, b) => a - b);

        // Atualizar os elementos com Animação
        numberElements.forEach((element, index) => {
            // Remove a classe de animação antes de reaplicar
            element.classList.remove('animate');

            // Tempo para atualizar o número e reaplicar a animação
            setTimeout(() => {
                element.textContent = numbers[index];
                element.classList.add('animate');
            }, 50 * index);
        }); // <-- ESTE parêntese estava faltando
    }
});
