# Calculette Simple en JavaScript

[![Aperçu](https://img.shields.io/badge/Aperçu-Live-brightgreen)](https://shoopstv.github.io/calculette/)
[![GitHub](https://img.shields.io/github/license/shoopstv/calculette)](https://github.com/shoopstv/calculette/blob/main/LICENSE)

## Description

Ce projet est une calculatrice simple, construite avec HTML, CSS et JavaScript. Elle permet d'effectuer les opérations arithmétiques de base :

*   Addition (+)
*   Soustraction (-)
*   Multiplication (x)
*   Division (÷)
*   Modulo (%)
* Effacer (C)

Elle supporte l'enchainement d'opérations et les nombres décimaux.

## Aperçu

Vous pouvez voir la calculatrice en action ici : [https://shoopstv.github.io/calculette/](https://shoopstv.github.io/calculette/)

## Technologies Utilisées

*   **HTML5 :**  Structure de la page web et des éléments de la calculatrice.
*   **CSS3 :**  Style et mise en page de la calculatrice (design responsive).
*   **JavaScript (ES6+) :**  Logique de calcul et interaction utilisateur.

## Structure du Projet
Use code with caution.
Markdown
calculette/
├── index.html # Page HTML principale
├── style.css # Fichier CSS pour le style
├── script.js # Fichier JavaScript contenant la logique


## Fonctionnement

Le fichier `script.js` contient les fonctions principales :

1.  **`addToDisplay(value)`:** Ajoute les chiffres, opérateurs et le point décimal à l'écran de la calculatrice.
2.  **`calculate()`:** Évalue l'expression mathématique entrée par l'utilisateur et affiche le résultat. Gère les erreurs (division par zéro, expression invalide).
3.  **`clearDisplay()`:** Efface complètement l'écran de la calculatrice.
4.  **Gestion des événements :**  Des écouteurs d'événements sont attachés aux boutons pour déclencher les fonctions appropriées lors des clics. Le code gère également la saisie au clavier (chiffres, opérateurs, Entrée pour `=`,  Backspace pour effacer).

## Améliorations Possibles

*   **Historique des calculs :**  Ajouter un affichage de l'historique des opérations précédentes.
*   **Fonctions scientifiques :**  Implémenter des fonctions plus avancées (sin, cos, tan, log, etc.).
*   **Thèmes :** Permettre à l'utilisateur de changer le thème de la calculatrice (clair/sombre).
*   **Gestion des parenthèses :** Ajouter la prise en charge des parenthèses pour les expressions complexes.
*   **Tests unitaires :** Écrire des tests pour s'assurer du bon fonctionnement des calculs.
*   **Meilleure gestion des erreurs:** Afficher des messages d'erreur plus précis à l'utilisateur.

## Installation et Utilisation

1.  **Cloner le dépôt :**

    ```bash
    git clone https://github.com/shoopstv/calculette.git
    ```

2.  **Ouvrir le fichier `index.html`** dans votre navigateur web.  Aucune installation de serveur n'est nécessaire, car il s'agit d'un projet purement front-end.

## Contribution

Les contributions sont les bienvenues !  Si vous souhaitez améliorer cette calculatrice, n'hésitez pas à :

1.  Faire un fork du projet.
2.  Créer une nouvelle branche (`git checkout -b ma-fonctionnalite`).
3.  Faire vos modifications.
4.  Faire un commit de vos changements (`git commit -m "Ajout d'une fonctionnalité"`)
5.  Pousser vers la branche (`git push origin ma-fonctionnalite`).
6.  Ouvrir une Pull Request.

## Auteur

*   [shoopstv](https://github.com/shoopstv)
