// p3-messages.js

const crypto = require('crypto');

// Objet qui stocke tous les messages
const messages = {};

/*
====================================================
FONCTION : STOCKER UN MESSAGE
====================================================
type :
- text
- image
- video
- audio
- pdf

content :
- texte du message
OU
- chemin du fichier
====================================================
*/

function storeMessage(type, content) {

    // Générer un ID unique
    const id = crypto.randomUUID();

    // Expiration après 24 heures
    const expiresAt = Date.now() + 60 * 1000;

    // Stockage du message
    messages[id] = {
        type,
        content,
        expiresAt
    };

    // Retourner l'ID
    return id;
}

/*
====================================================
FONCTION : LIRE ET SUPPRIMER LE MESSAGE
====================================================
*/

function getAndDeleteMessage(id) {

    const entry = messages[id];

    // Vérifier si le message existe
    if (!entry) {
        return null;
    }

    // Vérifier expiration
    if (entry.expiresAt < Date.now()) {

        delete messages[id];

        return null;
    }

    // Supprimer le message après lecture
    delete messages[id];

    // Retourner les données
    return {
        type: entry.type,
        content: entry.content
    };
}

/*
====================================================
NETTOYAGE AUTOMATIQUE DES MESSAGES EXPIRÉS
====================================================
*/

setInterval(() => {

    const now = Date.now();

    for (const id in messages) {

        if (messages[id].expiresAt < now) {

            delete messages[id];

            console.log(`Message expiré supprimé : ${id}`);
        }
    }

}, 60 * 60 * 1000); // Vérification chaque heure

/*
====================================================
EXPORT DES FONCTIONS
====================================================
*/

module.exports = {
    storeMessage,
    getAndDeleteMessage
};