export default class Boneco {
    /* Index da parte do corpo corrente */
    indiceBoneco;
    /* Valor para opacidade dos olhos */
    opacidadeOlhos = 0.0; 
    constructor(partesBoneco, olhos){
        this.partesBoneco = partesBoneco;
        this.olhos = olhos;
    }

    /*
    Desenha a parte do corpo corrente
    */
    desenhaBoneco(){
        this.partesBoneco[this.indiceBoneco].classList.remove("hide");
        this.indiceBoneco++; 
    }

    /* 
    Desenha os olhos do personagem
    */
    desenhaOlhos(){
        this.olhos.forEach((olho => {
            olho.style.opacity = 1;
            olho.style.zIndex = 10;
        }));
    }

    /*
    Oculta as partes do corpo do personagem
    */
    ocultaBoneco(){
        this.olhos.forEach((olho => {
            olho.style.opacity = this.opacidadeOlhos; 
        }));
        this.partesBoneco.forEach(parteBoneco => {
            parteBoneco.classList.add("hide");
        });
    }
}

