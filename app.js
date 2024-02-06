/* Importando arquivos */
import Boneco from './Classes/Boneco.js';
import Palavras from './Classes/Palavras.js';
import EditTheme from './Classes/EditTheme.js';
import { 
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
} from "/properties.js";

/* instancias */
const palavras = new Palavras(
    categoria, 
    letrasErradas, 
    palavraInterface
);
const boneco = new Boneco(
    partesBoneco, 
    olhos 
);

/* Verifica se formam palavras */
function verificaFimDeJogo(){
    if(!palavras.palavraInterface.innerHTML.includes('-')){
        palavras.exibePalavraInterface('Você venceu!!!');
        window.removeEventListener('keypress', retornaLetra);
    }else if(letrasErradasArray.length >= numTentativas){
        boneco.desenhaOlhos();
        palavras.exibePalavraInterface('Você Perdeu!!!');
        window.removeEventListener('keypress', retornaLetra);
    }
}

/* Contabiliza erros ou acertos */
function tentativa(letra){
    if(palavras.palavraProposta.includes(letra)){
        palavras.atualizaPalavraInterface(letra)
    }else{
        letrasErradasArray.push(letra);
        letrasErradas.innerHTML = 'Letras erradas: ' + letrasErradasArray;
        if(boneco.partesBoneco.length > boneco.indiceBoneco){
            boneco.desenhaBoneco();
        }
    }

    verificaFimDeJogo();
}

/*Recebe o evento do teclado e passa apenas o valor da letra para a função tentativa*/
function retornaLetra(e){ 
    tentativa(e.key);
}

/*Inicia as configurações do jogo*/
function iniciaJogo(){
    boneco.indiceBoneco = 0;
    letrasErradasArray.splice(0, letrasErradasArray.length);
    boneco.ocultaBoneco();
    palavras.exibeCategoria();
    palavras.definePalavraProposta();
    letrasErradas.innerHTML = "Letras erradas: ";
    window.addEventListener("keypress", retornaLetra);
}

window.addEventListener("load", iniciaJogo);
document.querySelector('.buttonNewGame').addEventListener('click', iniciaJogo);

buttonThemes.addEventListener("click", () => {
    EditTheme.menuTheme(listThemes);
});

boxesColor.forEach((boxColor) => {
    boxColor.addEventListener("click", () => {
        let themes = boxColor.dataset.theme;

        EditTheme.changeTheme(themes, root);
    });
});