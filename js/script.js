const abrirBtn = document.getElementById("abrirBtn");
const tarjeta = document.getElementById("tarjeta");

abrirBtn.addEventListener("click", () => {
    tarjeta.classList.remove("oculto");
    tarjeta.classList.add("mostrar");
    abrirBtn.style.display = "none";
});