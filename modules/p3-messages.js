// p3-messages.js

const crypto = require('crypto');
const path = require('path');

// Stockage temporaire des messages
const messages = {};

/*
====================================================
STOCKER UN MESSAGE
====================================================

type:
- text
- image
- video
- file

content:
- texte OU chemin fichier

expiration:
- durée en millisecondes
- null = pas d'expiration temporelle
====================================================
*/

function storeMessage(type, content, expiration = null) {

    // Générer ID unique
    const id = crypto.randomUUID();

    // Création du message
    messages[id] = {
        id,
        type,
        content,

        createdAt: Date.now(),

        // null = pas d'expiration
        expiresAt: expiration
            ? Date.now() + Number(expiration)
            : null
    };

    console.log(`✅ Message stocké : ${id}`);

    return id;
}

/*
====================================================
LIRE + SUPPRIMER LE MESSAGE
====================================================
*/

function getAndDeleteMessage(id) {

    const message = messages[id];

    // Message inexistant
    if (!message) {
        return null;
    }

    // Vérifier expiration
    if (
        message.expiresAt &&
        message.expiresAt < Date.now()
    ) {

        delete messages[id];

        console.log(`⏰ Message expiré : ${id}`);

        return null;
    }

    // Supprimer après lecture
    delete messages[id];

    console.log(`🗑️ Message supprimé après lecture : ${id}`);

    return {
        id: message.id,
        type: message.type,
        content: message.content
    };
}

/*
====================================================
NETTOYAGE AUTOMATIQUE
====================================================
*/

setInterval(() => {

    const now = Date.now();

    for (const id in messages) {

        const msg = messages[id];

        if (
            msg.expiresAt &&
            msg.expiresAt < now
        ) {

            delete messages[id];

            console.log(`🧹 Message expiré supprimé : ${id}`);
        }
    }

}, 60 * 1000); // chaque minute

/*
====================================================
EXPORT
====================================================
*/

module.exports = {
    storeMessage,
    getAndDeleteMessage
};