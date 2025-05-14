document.addEventListener('DOMContentLoaded', () => {
    let count = 0;
    const counterDisplay = document.getElementById('counter');
    const increaseBtn = document.getElementById('increaseBtn');
    const decreaseBtn = document.getElementById('decreaseBtn');
    const resetBtn = document.getElementById('resetBtn');

    function updateCounter() {
        counterDisplay.textContent = count;
        counterDisplay.className = count > 0 ? 'positive' : count < 0 ? 'negative' : 'zero';
    }

    increaseBtn.addEventListener('click', () => {
        count++;
        updateCounter();
    });

    decreaseBtn.addEventListener('click', () => {
        count--;
        updateCounter();
    });

    resetBtn.addEventListener('click', () => {
        count = 0;
        updateCounter();
    });
});
