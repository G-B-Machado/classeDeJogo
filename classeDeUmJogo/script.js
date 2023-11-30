class personagem{
    constructor(nome, idade, tipo, atributos){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.atributos = atributos
    }

    atacar(){
        console.log(`${this.tipo.nome} atacou usando ${this.tipo.ataque}`)
    }

}
class tipo{
    constructor(nome, ataque){
        this.nome = nome
        this.ataque = ataque
    }
}
let classe1 = new tipo("Mago", "Bola de Fogo")
let classe2 = new tipo("Guerreiro", "Espada")
let classe3 = new tipo("Monge", "Artes marciais")
let classe4 = new tipo("Ninja", "Shuriken")
let player1 = new personagem("Fulano", 45, classe1, [10,14,17])
let player2 = new personagem("Ciclano", 25, classe2, [11,18,12])
let player3 = new personagem("Beltrano", 67, classe3, [18,12,14])
let player4 = new personagem("Exemplilson", 35, classe4, [15,11,13])
player1.atacar()
player2.atacar()
player3.atacar()
player4.atacar()