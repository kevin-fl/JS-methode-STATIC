                                                            //METHODE STATIC


const nombreALeatoire = Math.random();
console.log(nombreALeatoire);

const low = Math.floor(29.98);
console.log(low);

//AUTRES EXEMPLES 

let LLivre = class LLivre {
    constructor(titre, auteur, nbrePages) {
        this.titre = titre;
        this.auteur = auteur;
        this.nbrePages = nbrePages;
        
    }

   affichage1(){                                                     //-->cree une fonction anonyme ou methode
     console.log(
    "j ai lu" +
    this.titre + 
    " de " +
        this.auteur);
    }                                        
    
    affichage2(nom){                                                     //-->cree une fonction anonyme ou methode    // je peux cree un argument dans l affichage2()
        console.log(
            "j aime " +
            this.auteur + " " + nom);
    } 
    
    // utilisation methode statique   --> appeler depuis la classe , pas depuis une instance de la classe !  utilité : si on a pas envie que ceci soit dans l instance de la classe ;) 
    
    static livreType() {
        console.log("c est un livre de fantaisie");
    }
    };






let monLLivre = new LLivre( " l' alchimiste" , "paulo coelho", 285)      
console.log(monLLivre);
monLLivre.affichage1();                                 //--> crée l affichage de la methode 1 de monLLivre

LLivre.livreType();       //--> ! je dois interagir depuis la classe dans methode static donc depuis le LLivre V et la ca marche !


// methode extends avec super   
// va extend la classe parents llivre , je vais pouvoir rajouter des proprietes ds avis venant de llivre ou recup proprietes de la classe LLivre


//Sous-classe AVIS de la classe LLivre

class AVIS extends LLivre{
    constructor(titre, avis){
        super(titre);            //> mot clé super recup depuis la classe parent
        this.avis = avis        //> creation de l argument avis
    }
            affichage() {
        //  console.log((`le livre ${this.titre} est noté ${this.avis}`); ou bien return 
                return (`le livre ${this.titre} est noté ${this.avis}`);
            }                   //> methode affichage mnt 
}
//console.log(AVIS);

const avis01 = new AVIS("le voyage merveilleux", "très bien");
avis01.affichage();               //> nickel ca fonctionne  // si on utilise reutrn alors console.log(avis01(affichage)); et ca fonctionnera pareille 
console.log(avis01);
