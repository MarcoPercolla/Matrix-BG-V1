const wordsArray = [".PAY", ".HIRE", ".EARN", "SI", "YES", "ASSUMILO", " LET_MARCO.CODE", "PAY[MARCO]", "GIVEME.MONEY", "$$$", ".Pay.MARCO)", "PAGAMI", "WE/ARE/WATCHING", "1987", "AQUARIUS", "DARPA", "OVNI", "MJ-12", "JOIN-NAVY", "MARCO.HIR3", "<$$$>", "</£££>", "HIRE/MARCO"];

function generateRandomString(length) {
    let result = '';
    const characters = '01';
    const charactersLength = characters.length;
    const wordsArrayLength = wordsArray.length;

    for (let i = 0; i < length; i++) {
        if (i !== 0 && Math.floor(Math.random() * 2) === 0) {
            result += ' / ' + wordsArray[Math.floor(Math.random() * wordsArrayLength)] + ' / ';
        }
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function updateOutput() {
    const matrixContainer = document.getElementById('matrix-container');


    const intervals = [2000, 500, 100, 1000, 800, 4000, 5000, 50];

    // Creazione e aggiunta di n elementi <p> con id "output(i)"
    for (let i = 1; i <= 47; i++) {
        const fullString = generateRandomString(300);
        const outputElement = document.createElement('p');
        outputElement.classList = 'output';
        outputElement.id = 'output' + i;
        matrixContainer.appendChild(outputElement);

        let interval = intervals[Math.floor(Math.random() * intervals.length)];
        setInterval(() => {
            const startIndex = interval - 1;
            const endIndex = startIndex + 70;
            const displayString = fullString.substring(startIndex, endIndex);
            outputElement.textContent = displayString;

            interval = (interval % 71) + 1;
            // Reset a 1 se intervallo da resto diverso da se stesso, altrimenti aggiune 1 fino a 71
        }, interval);
    }
}

updateOutput();
