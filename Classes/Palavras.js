export default class Palavras{
    #categorias = {
        frutas: ['banana', 'maça', 'laranja', 'mamão', 'uva'],
        profissoes: ['engenheiro', 'advogado', 'médico', 'professor'],
        animais: ['papagaio', 'galo', 'cachorro', 'gato'],
        cores: ['amarelo', 'azul', 'verde', 'preto']
    }

    /* Palavra corrente */
    palavraProposta;

    constructor(categoria, letrasErradas, palavraInterface) {
        this.categoria = categoria;
        this.letrasErradas = letrasErradas;
        this.palavraInterface = palavraInterface;
    }

    /* Pega cada chave do array categorias */
    retornaArrayCategorias(){
        return Object.keys(this.#categorias);
    }
    
    /* Retorna um indice aleatoria para pegar um valor aleatório do array categorias */
    retornaCategoria(){
        const arrayCategorias = this.retornaArrayCategorias();
        let indiceCategoria = this.retornaNumAleatorio(arrayCategorias.length);
    
        return arrayCategorias[indiceCategoria];
    }
    
    /* exibe o nome da categoria na tela */
    exibeCategoria(){
        this.categoria.innerHTML = this.retornaCategoria();
    }
    
    /* Gera um número aleatório  */
    retornaNumAleatorio(max){
        return Math.floor(Math.random() * max);
    }
    
     /* Define uma palavra secreta para  o jogo   */
    definePalavraProposta(){
        const arrayPalavras = this.#categorias[this.categoria.innerHTML];
        let indicePalavra = this.retornaNumAleatorio(arrayPalavras.length);
        this.palavraProposta = arrayPalavras[indicePalavra];
        this.ocultaPalavra();
    }
    
     /* Oculta palavra na tela  */
    ocultaPalavra(){
        let palavraOcultada = '';
        for(let i = 0; i < this.palavraProposta.length; i++){
            palavraOcultada += '-';
        }
        this.exibePalavraInterface(palavraOcultada);
    }
    
     /* Exibe a palavra na tela  */
    exibePalavraInterface(palavra){    
        this.palavraInterface.innerHTML = palavra;
    }
    
     /* Gera palavra na tela em caso de acerto  */
    atualizaPalavraInterface(letra){
        let palavraAux = '';
        for(let i = 0; i < this.palavraProposta.length; i++) {
            if(this.palavraProposta[i] === letra) {
                palavraAux += letra;
            }else if(this.palavraInterface.innerHTML[i] !== '-'){
                palavraAux += this.palavraInterface.innerHTML[i];
            }else{
                palavraAux += '-';
            }
        }
    
        this.exibePalavraInterface(palavraAux);
    }
}

