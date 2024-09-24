/**
 * @type {HTMLElement}
 */
const input = document.querySelector('#mot');
/**
 * @type {HTMLElement}
 */
const listeMots = document.querySelector('.liste-mots');
/**
 * @type {HTMLElement}
 */
const btnValider = document.querySelector('.valider');


/**
 * @type {string[]}
 */
let mots = [];

if (localStorage.getItem('mots')) {
    mots = JSON.parse(localStorage.getItem('mots'));
    mots.forEach(mot => afficherMot(mot));
}

btnValider.addEventListener('click', () => {
    /**
     * @type {string}
     */
    let mot = input.value;
    mots.push(mot);
    localStorage.setItem('mots', JSON.stringify(mots));
    afficherMot(mot);
    input.value = '';
});

/**
 * @returns {void}
 */
function afficherMot(mot) {
    if(mot.length > 0){
        /**
         * @type {HTMLElement}
         */
        const motHTML = document.createElement('li');
        motHTML.textContent = mot;
        listeMots.appendChild(motHTML);
    }
}