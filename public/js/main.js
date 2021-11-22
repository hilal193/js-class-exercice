class Lieu{
    constructor(nom,personne){
        this.nom=nom;
        this.personne=personne;
    }
}

let ville = new Lieu("molengeek","snack","maison");
class Personne{
    constructor(nom,prenom,argent){
        this.nom=nom;
        this.prenom=prenom;
        this.argent=argent;
        this.seDeplacer=(a)=>{
            return this.embarquer(a);
        }
        this.embarquer=()=>{
            return this.nom;
        }
    }
}

// extra
//1
class Lieu {
    constructor(nom, personnes){
        this.nom = nom;
        this.personnes = personnes
    }
}

class Personne {
    constructor(nom, prenom, argent){
        this.nom = nom;
        this.prenom = prenom;
        this.argent = argent;
    }
    seDeplacer(start, end, transport){
        // Se retirer du lieu de départ
        start.personnes.splice(start.personnes.indexOf(this), 1);
        console.log(`${this.prenom} sort de ${start.nom}.`);
        // Vérifier si l'embarquement a eu lieu (Astuce: utiliser le return dans la méthode embarquer)
        if(transport.embarquer(this) == true){
            // Si oui, mettre le personnage dans le lieu final.
            end.personnes.push(this);
            console.log(`${this.prenom} est arrivé à ${end.nom}.`);  
        } else {
            // Si non, je reviens dans le lieu de départ et console.log plus assez d'argent, et ne pas bouger.
            start.personnes.push(this);
            console.log(`${this.prenom} n'a plus assez d'argent, et reste à ${start.nom}`);
        };
    }
}

class Bus {
    constructor(caisse){
        this.place = [];
        this.caisse = caisse;
        this.tarif = 2.80
    }
    embarquer(personne){
        // Vérifier si assez d'argent pour le trajet.
        if(personne.argent >= this.tarif){
            // Si oui, ajouter la personne dans le bus.
            this.place.push(personne);
            console.log(`${personne.prenom} embarque dans le bus.`);
                // Retirer l'argent du personnage.
                personne.argent -= this.tarif;
                // Rajouter l'argent à la caisse.
                this.caisse += this.tarif;
                // Retirer le personnage du bus.
                this.place.splice(this.place.indexOf(personne), 1);
                console.log(`${personne.prenom} sort du bus.`);
                // Return que le trajet a eu lieu
                return true;
        } else {
            // Si non, return que le trajet n'a pas eu lieu.
            return false;
        }
    }
}

let max = new Personne('Caliskan', 'Ayhan', 50);
let maison = new Lieu('Maison', [max]);
let molenGeek = new Lieu('MolenGeek', []);
let snack = new Lieu('Snack', []);
let bus = new Bus(0);

max.seDeplacer(maison, molenGeek, bus);
console.log('____________');
max.seDeplacer(molenGeek, snack, bus);
console.log('____________');
max.seDeplacer(snack, maison, bus);
console.log('____________');



//2
class Personne{
    constructor(nom, panier){
        this.nom = nom;
        this.panier = panier;
    };
    
    derober(perso2){
        for(let i = 0; i < 2; i++) {
            // var random = Math.floor(Math.random() *perso.panier.length)
            // console.log(random);
            // this.panier.push(perso2.panier[random]);
            // perso2.panier.splice(random, 1);

            let product = prompt(`Que voulez vous dérober ? ${perso2.panier}` ).toLowerCase()
            this.panier.push(product)
            console.log(product);
            perso2.panier.splice(perso2.panier.indexOf(product), 1)  
        }
        // let prod1 = this.panier[this.panier.length - 1];
        // let prod2 = this.panier[this.panier.length - 2];
        // return `${this.nom} a derobé ${this.panier[random]} et ${this.panier[random]} de ${perso2.nom}`
    }
}
let francois = new Personne("François", ["huile", "tomate", "pain"]);
let sergio = new Personne("Sergio", []);

sergio.derober(francois);
console.log(francois.panier);
console.log(sergio.panier);
