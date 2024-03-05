

document.getElementById("meuP").textContent = "Novo conteúdo de texto!";

document.querySelector("img").setAttribute("src", "fotos/free.jpg");

document.getElementById("meuE").style.backgroundColor = "red";

document.getElementById("botao").addEventListener("click", function clicar() {
    alert("Você clicou no botão!");
    document.body.style.backgroundColor = "black"
})

document.getElementById("butao").addEventListener("click", function clicar(){
    document.body.style.backgroundColor = "black"
    document.body.style.color = "white"
    document.getElementById("top").style.color = "white"
    
})
document.getElementById("botao").addEventListener("click", function clicar(){
    document.body.style.backgroundColor = "red"
    document.body.style.color = "black"
    document.getElementById("top").style.color = "black"
    
})

document.addEventListener("DOMContentLoaded", function() {
    const mostrarCardBtn = document.getElementById("mostrarcard");
    const cardContainer = document.getElementById("cardContainer");
  
    mostrarCardBtn.addEventListener("click", function() {
      // Toggle para exibir/ocultar o cardContainer
      cardContainer.classList.toggle("hidden");
    });
  });