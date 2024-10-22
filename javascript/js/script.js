let h1Name = document.querySelector(".name")
const btn = document.querySelector("#btn")

btn.addEventListener('click', () => {
    let novoNome = prompt("Digite aqui o seu novo nome: ")
    h1Name.innerHTML = novoNome
})

