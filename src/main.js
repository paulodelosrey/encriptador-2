const texto1 = document.getElementById("texto1")
const encriptar = document.getElementById("encriptar")
const desencriptar = document.getElementById("desencriptar")
const texto2 = document.getElementById("texto2")
const copiar = document.getElementById("copiar")
const reiniciar = document.getElementById("reiniciar")


texto1.addEventListener("input", (e) => {
    const texto = e.target.value;
    const textoMinusculas = texto.toLowerCase();
    texto1.value = textoMinusculas.replace(/[^a-zA-Z0-9 ]/g, "")
});



encriptar.addEventListener("click", () => {
    let texto = texto1.value.toLowerCase()
    let matrizDeEncriptacion = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"],
    ];
    for (let i = 0; i < matrizDeEncriptacion.length; i++) {
        if (texto.includes(matrizDeEncriptacion[i][0])) {
            texto = texto.replaceAll(matrizDeEncriptacion[i][0], matrizDeEncriptacion[i][1]);
        }
    }
    texto2.disabled = false
    texto2.textContent = texto
    desencriptar.disabled = false
    copiar.disabled = false
    reiniciar.disabled = false
});


reiniciar.addEventListener("click", () => {
    location.reload()
})

copiar.addEventListener("click", () => {
    texto2.select()
    document.execCommand("copy")
    alert("Copiado al portapapeles")
})

desencriptar.addEventListener("click", () => {

    let texto = texto1.value.toLowerCase()
    let matrizDeEncriptacion = [
        ["u", "ufat"],
        ["o", "ober"],
        ["a", "ai"],
        ["i", "imes"],
        ["e", "enter"],
    ];
    for (let i = 0; i < matrizDeEncriptacion.length; i++) {
        if (texto.includes(matrizDeEncriptacion[i][1])) {
            texto = texto.replaceAll(matrizDeEncriptacion[i][1], matrizDeEncriptacion[i][0]);
        }
    }
    texto2.textContent = texto
})