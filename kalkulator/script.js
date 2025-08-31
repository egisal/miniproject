const layar = document.getElementById("layar");
const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.textContent === "=") {
            try {
                layar.value = eval(layar.value.replace(/x/g, "*"));
            } catch {
                layar.value = "Error";
            }
        } else if (button.textContent === "D") {
            layar.value = layar.value.slice(0, -1);
        } else {
            layar.value += button.textContent;
        }
    });
});
