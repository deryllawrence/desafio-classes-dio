class Hero {
    constructor(nome, idade, tipo) {
       this.nome = nome;
       this.idade = idade;
       this.tipo = tipo;
    }
   
    atacar() {
       let ataque;
   
       switch (this.tipo) {
         case 'mago':
           ataque = 'usou magia';
           break;
         case 'guerreiro':
           ataque = 'usou espada';
           break;
         case 'monge':
           ataque = 'usou artes marciais';
           break;
         case 'ninja':
           ataque = 'usou shuriken';
           break;
         default:
           console.log('Tipo de herói inválido');
           return;
       }
   
       console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
   }
   
   const heroi = new Hero('João', 25, 'mago');
   heroi.atacar(); // Exibe: "o mago atacou usando magia"