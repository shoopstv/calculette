
// 1. Sélection de l'élément HTML
//    On récupère l'élément input (l'écran de la calculatrice)
//    en utilisant son ID "ecran". Cet élément est stocké dans la variable 'ecran'.
const ecran = document.getElementById('ecran');

/**
 * 2. Fonction pour ajouter une valeur à l'écran
 *    Cette fonction est appelée lorsqu'un bouton de chiffre ou d'opérateur est cliqué.
 *    Elle prend en paramètre 'valeur', qui est le chiffre ou l'opérateur à ajouter.
 *
 *    Fonctionnement :
 *    - Elle accède à la propriété 'value' de l'élément 'ecran' (le texte affiché à l'écran).
 *    - Elle ajoute la 'valeur' passée en paramètre à la fin du texte existant.
 *    - Le résultat est mis à jour dans l'écran de la calculatrice.
 *    - .test() est comme un détecteur de mots. il va rechercher une séquence ou un texte / mot et vérifier si il est présent.
 *    - .test renvois toujours un bool. 
 *    
 *    - .value est une propriété utilisée pour accéder à la valeur d'un élément de formulaire. 
 *      Il peut s'agir d'un champ de texte, d'une zone de texte, d'une liste déroulante, d'une case à cocher, etc.
 * 
 *    Exemple :
 *    Si l'écran affiche "12" et qu'on appelle ajouterAEcran("3"), l'écran affichera "123".
 */
function ajouterAEcran(valeur) {
    if (/[\+\-\*\/]$/.test(ecran.value) && /[\+\-\*\/]/.test(valeur)) {
        return;
    }
    ecran.value += valeur;
}

/**
 * 3. Fonction pour effacer l'écran
 *    Cette fonction est appelée lorsqu'on clique sur le bouton "C" (effacer).
 *
 *    Fonctionnement :
 *    - Elle accède à la propriété 'value' de l'élément 'ecran'.
 *    - Elle assigne une chaîne de caractères vide ("") à cette propriété,
 *      ce qui efface tout le contenu de l'écran.
 */
function effacer() {
    ecran.value = '';
}

/**
 * 4. Fonction pour calculer le résultat
 *    Cette fonction est appelée lorsqu'on clique sur le bouton "=".
 *
 *    Fonctionnement :
 *    - Elle utilise un bloc try...catch pour gérer les erreurs potentielles.
 *    - try :
 *      - Elle accède à la propriété 'value' de l'élément 'ecran' (l'expression à calculer).
 *      - Elle utilise la fonction eval() pour évaluer cette expression mathématique.
 *        ATTENTION : eval() peut être dangereux car elle exécute du code arbitraire.
 *                   Dans un contexte de production, il est préférable d'utiliser
 *                   une bibliothèque d'analyse et d'évaluation d'expressions mathématiques
 *                   plus sécurisée. Mais je ne sais toujours pas utilisé les bibliothèques.
 *      - Le résultat du calcul est affecté à la propriété 'value' de l'élément 'ecran',
 *        ce qui affiche le résultat à l'écran.
 *    - catch (erreur c'est la fonction associé a try qui gere les erreurs.) :
 *      - Si une erreur se produit pendant l'évaluation (par exemple, une division par zéro),
 *        l'erreur est capturée.
 *      - La propriété 'value' de l'élément 'ecran' est définie à "Erreur",
 *        ce qui affiche un message d'erreur à l'écran.
 */
function calculer() {
    try {
        ecran.value = eval(ecran.value);
    } catch (erreur) {
        ecran.value = 'Erreur';
    }
}

/**
 * 5. Personnalisation CSS via JavaScript
 *    Cette partie du code ajoute un effet visuel lorsque la souris survole les boutons.
 *
 *    Fonctionnement :
 *    - document.querySelectorAll('button') : Sélectionne tous les éléments <button> présents dans le document.
 *                                             Retourne une NodeList (semblable à un tableau mais n'est pas un array) contenant tous les boutons.
 *    - boutons.forEach(bouton => { ... }) : Parcourt chaque bouton de la NodeList.
 *      - bouton.addEventListener('mouseover', () => { ... }) :
 *        Ajoute un écouteur d'événements 'mouseover' à chaque bouton.
 *        Cet écouteur est appelé lorsque la souris entre dans la zone du bouton.
 *        La fonction fléchée (=>) à l'intérieur de l'écouteur modifie la couleur de fond du bouton en 'lightgreen'.
 *      - bouton.addEventListener('mouseout', () => { ... }) :
 *        Ajoute un écouteur d'événements 'mouseout' à chaque bouton.
 *        Cet écouteur est appelé lorsque la souris quitte la zone du bouton.
 *        La fonction fléchée (=>) à l'intérieur de l'écouteur rétablit la couleur de fond du bouton à '#eee' (gris clair).
 *        ATTENTION : J'ai tester d'écrire la fonction en simplifié ou dite fleché, je garantit pas que cela fonctionne sans probleme. Meme si ca fonctionne pour le moment...
 */
const boutons = document.querySelectorAll('button');

boutons.forEach(bouton => {
    bouton.addEventListener('mouseover', () => {
        bouton.style.backgroundColor = 'lightgreen'; // Change la couleur au survol
    });
    bouton.addEventListener('mouseout', () => {
        bouton.style.backgroundColor = '#eee'; // Revenir à la couleur d'origine
    });
});
