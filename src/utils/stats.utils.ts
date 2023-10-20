
// Le modificateur se base sur le score de la caractéristique pour 
// ajouter un bonus ou un malus sur base des tests  suivants : si la 
// caractéristique est inférieure à 5 on ajoute -1, sinon si elle est 
// inférieure à 10 alors on ajoute 0, sinon si elle est inférieure à 15 

import Dice from '../models/dice';

// alors on ajoute +1, sinon on ajoute +2.
export function getModifier(stats : number) : number {

    switch (true) {
        case (stats < 5) :
            return -1;
        case (stats < 10) :
            return 0;
        case (stats < 15) :
            return 1;
        default :
            return 2;
    }
}


// La force et l’endurance sont calculées à la création du personnage en lançant, pour chacune d’elles, 
// quatre dé 6 faces et en n’en reprenant que les 3 meilleurs.
export function generateStats(dice: Dice, rollQuantity = 4, rollKeep = 3) : number {

    const results : number[] = [];

    // On lance les X dés
    for(let i = 0; i < rollQuantity; i++) {
        results.push(dice.roll());
    }

    // On trie les résultats
    results.sort((v1, v2) => v2 - v1);

    // On conserve les Y meilleurs dés
    let stats = 0;
    for(let i = 0; i < rollKeep; i++) {
        stats += results[i];
    }

    return stats;
}