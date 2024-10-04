const db = require('../config/dbConfig');

const Contact = {
    getAllContacts: (callback) => {
        db.query('SELECT * FROM contacts', callback);
    },

    getContactById: (id, callback) => {
        db.query('SELECT * FROM contacts WHERE id = ?', [id], callback);
    },

    createContact: (contactData, callback) => {
        db.query('INSERT INTO contacts SET ?', contactData, callback);
    },

    updateContact: (id, contactData, callback) => {
        db.query('UPDATE contacts SET ? WHERE id = ?', [contactData, id], callback);
    },

    deleteContact: (id, callback) => {
        db.query('DELETE FROM contacts WHERE id = ?', [id], callback);
    }
};

module.exports = Contact;
