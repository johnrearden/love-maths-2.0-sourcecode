const VALID_CHARS = "0123456789abcdefghijklmnopqrstuvwxyz";

document.addEventListener("DOMContentLoaded", () => {

    const inputs = document.getElementsByClassName('base-input');

    for (let input of inputs) {
        input.addEventListener('input', (e) => {

            const base = parseInt(e.target.getAttribute('data-base'));
            const validChars = VALID_CHARS.slice(0, base);
            
            const currentText = e.target.value.split("");
            for (let i = 0; i < currentText.length; i++) {
                if (!validChars.includes(currentText[i])) {
                    currentText[i] = "";
                }
            }
            const newValue = currentText.join("");

            e.target.value = newValue;
            const intValue = parseInt(newValue, base);

            updateAllInputs(intValue);

        });
    }

});

const updateAllInputs = (intValue) => {
    if (isNaN(intValue)) {
        intValue = 0;
    }
    const inputs = document.getElementsByClassName('base-input');
    for (let input of inputs) {
        const base = parseInt(input.getAttribute('data-base'));
        const newValue = intValue.toString(base);
        input.value = newValue;
    }
}