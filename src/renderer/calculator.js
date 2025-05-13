document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener("click", () => handleInput(button.textContent));
    })

    document.addEventListener("keydown", (e) => {
        const key = e.key

        if (/[\d\+\-\*\/\.]/.test(key)) {
            handleInput(key);
        } else if (key === "Enter") {
            handleInput("=");
        } else if (key === "Escape" || key === "c") {
            handleInput("C")
        } else if (key === "Backspace") [
            display.value = display.value.slice(0, -1)
        ]
    });

    const handleInput = (input) => {
        if (input === "=") {
            if (display.value.trim() === "") return;
            try {
                const result = eval(display.value);
                display.value = Number(result).toLocaleString("en-US");
            } catch (error) {
                display.value = "Error";
            }
        } else if (input === "C") {
            display.value = ""
        } else {
            display.value += input;
        }
    }
});