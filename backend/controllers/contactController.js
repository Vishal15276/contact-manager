const Contact = require('../models/contactModel');

exports.getContacts = (req, res) => {
    Contact.getAllContacts((err, results) => {
        if (err) res.status(500).json({ error: err });
        res.json(results);
    });
};

exports.getContact = (req, res) => {
    const id = req.params.id;
    Contact.getContactById(id, (err, result) => {
        if (err) res.status(500).json({ error: err });
        res.json(result);
    });
};

exports.addContact = (req, res) => {
    const contactData = req.body;
    Contact.createContact(contactData, (err, result) => {
        if (err) res.status(500).json({ error: err });
        res.json({ message: 'Contact added successfully', id: result.insertId });
    });
};

exports.updateContact = (req, res) => {
    const id = req.params.id;
    const contactData = req.body;
    Contact.updateContact(id, contactData, (err, result) => {
        if (err) res.status(500).json({ error: err });
        res.json({ message: 'Contact updated successfully' });
    });
};

exports.deleteContact = (req, res) => {
    const id = req.params.id;
    Contact.deleteContact(id, (err, result) => {
        if (err) res.status(500).json({ error: err });
        res.json({ message: 'Contact deleted successfully' });
    });
};
