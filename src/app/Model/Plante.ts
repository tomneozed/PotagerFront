export class Plante {
    id: number;
    nom_commun: string;
    regne: string;
    sous_regne: string;
    division: string;
    classe: string;
    sous_classe: string;
    ordre: string;
    famille: string;
    genre: string;
    espece: string;
    variete: string;
    img: string;

    constructor(id=0, nom_commun='', regne='', sous_regne='', division='', classe='', sous_classe='', ordre='', famille='', genre='', espece='', variete='', img=''){
        this.id = id;
        this.nom_commun = nom_commun;
        this.regne = regne;
        this.sous_regne = sous_regne;
        this.division = division;
        this.classe = classe;
        this.sous_classe = sous_classe;
        this.ordre = ordre;
        this.famille = famille;
        this.genre = genre;
        this.espece = espece;
        this.variete = variete;
        this.img = img;
    }
}


