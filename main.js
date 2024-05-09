const botoes = document.querySelectorAll(".botao");
const abastextos = document.querySelectorAll(".abas-conteudo")

//Percorrer (iterar) uma lista de elementos
for(let i = 0; i < botoes.length; i++){
    botoes[i].onclick = function(){
        for(let j = 0; j < botoes.length; j++){
               botoes[j].classList.remove("ativo")
               abastextos[j].classList.remove("ativo")            
        }
        botoes[i].classList.add("ativo")
        abastextos[i].classList.add("ativo")
    }
}