

const botao = document.querySelector(".btn-plataforma");
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

botao.addEventListener("click", () => {
    const botaoEstarAberto = elementoPlataformas.classList.contains("ativo");

if(botaoEstarAberto){
    elementoPlataformas.classList.remove("ativo")
}
  else{
    elementoPlataformas.classList.add("ativo")
  }  


// elementoPlataformas.classList.toggle("ativo");

});
