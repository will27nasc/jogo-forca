/* Variaveis */
/* Elemento HTML referente a categoria */
const categoria = document.querySelector("#category");
/* Elemento HTML referente a lista das letras erradas*/
const letrasErradas = document.querySelector(".wrongLetters");
/* Elemento HTML referente a palavra oculta
    Utilizaremos esse mesmo elemento para exibir as mensagens do jogo*/
const palavraInterface = document.querySelector(".dashes");
/* Array com elementos HTML referentes aos olhos do personagem */
const olhos = Array.from(document.querySelectorAll(".eyes"));
/* Array com elementos HTML referentes as partes do corpo */
let partesBoneco = Array.from(document.querySelectorAll("#person div"));
partesBoneco = partesBoneco.slice(2, partesBoneco.length);
/* Lista das letras erradas */
let letrasErradasArray = [];
/* Numero de chances do jogador */
const numTentativas = 7;
/* lista de temas */
const listThemes = document.querySelector(".list-themes");
/* Botão definição temas */
const buttonThemes = document.querySelector(".button-themes");
/* Botão dos temas */
const boxesColor = document.querySelectorAll(".box-color");
/* Definição root css */
const root = document.querySelector(':root');

export { 
            categoria, 
            letrasErradas, 
            palavraInterface, 
            olhos, 
            partesBoneco, 
            letrasErradasArray, 
            numTentativas, 
            listThemes, 
            buttonThemes, 
            boxesColor, 
            root 
        }