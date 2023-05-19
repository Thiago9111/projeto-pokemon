/**o que precisamos fazer? - quando clicarmos no botão de troca de tema temos que alterar a cor da para as cores do tema claro oudo tema escuro.
  - objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body pra que os estilos do modo escuro sejam aplicados e mudar a imagem pra lua.
    -passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema.
    -passo2 - dar um jeito de pegar no JS o elemento HTML correspondente ao Body.
    -passo3 - dar um jeito de identificar o clique do usuário no botão de troca de tema.
    -passo4 - adicionar a classe modo-escuro no Body.
    -passo5 - trocar a imagem do botão de alterar tema pra lua.
    
    - objetivo 2 - quando clicar no botão de tropca de tema, caso o Body já tenha a classe modo-escuro, remover a classe pra mudar po modo-claro e mudar a imagem pro sol.
    -passo6 - remova a classe do modo-escuro do Body.
    -passo7 - trocar a imagem do notão de alterar tema pra sol 
 */

const BotaoTrocaTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const ImagemDoBotao = document.querySelector(".imagem-botao");

BotaoTrocaTema.addEventListener("click", () => {
  const ModoEscuroAtivo = (body.classList.contains("modo-escuro"));

   if (ModoEscuroAtivo) {
    body.classList.remove("modo-escuro");
  ImagemDoBotao.setAttribute("src","./src/imagens/sun.png");
}
else{
  body .classList.add("modo-escuro");
  ImagemDoBotao.setAttribute("src","./src/imagens/moon.png");
}

})
