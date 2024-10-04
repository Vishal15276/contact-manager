import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function ContactList() {
    const [contacts, setContacts] = useState([]);
    const [menuOpen, setMenuOpen] = useState(null); // Tracks which contact's menu is open
    const navigate = useNavigate(); // Used to programmatically navigate

    useEffect(() => {
        axios.get('http://localhost:5000/api/contacts')
            .then((response) => setContacts(response.data))
            .catch((error) => console.error('Error fetching contacts:', error));
    }, []);

    const deleteContact = (id) => {
        // Ask for confirmation before deletion
        const confirmed = window.confirm('Are you sure you want to delete this contact?');
        if (confirmed) {
            axios.delete(`http://localhost:5000/api/contacts/${id}`)
                .then(() => setContacts(contacts.filter(contact => contact.id !== id)))
                .catch((error) => console.error('Error deleting contact:', error));
        }
    };

    const editContact = (id) => {
        // Ask for confirmation before editing
        const confirmed = window.confirm('Are you sure you want to edit this contact?');
        if (confirmed) {
            navigate(`/edit/${id}`); // Navigate to edit page if confirmed
        }
    };

    // Toggle dropdown menu for a specific contact
    const toggleMenu = (id) => {
        if (menuOpen === id) {
            setMenuOpen(null); // Close if same menu is clicked
        } else {
            setMenuOpen(id); // Open the menu
        }
    };

    return (
        <div className="container">
            <h1>Contact Manager</h1>

            <ul className="contact-list">
                {contacts.length > 0 ? (
                    contacts.map(contact => (
                        <li key={contact.id} className="contact-item">
                            {/* Display name and phone number */}
                            <div>
                                <span>{contact.name}</span>
                                <div style={{ fontSize: '14px', color: '#5f6368' }}>{contact.phone}</div>
                            </div>

                            {/* Three-dot menu button */}
                            <div className="contact-actions">
                                <button className="contact-menu-button" onClick={() => toggleMenu(contact.id)}></button>

                                {/* Dropdown menu */}
                                <div className={`contact-menu ${menuOpen === contact.id ? 'show-menu' : ''}`}>
                                    <button onClick={() => editContact(contact.id)}>Edit</button>
                                    <button onClick={() => deleteContact(contact.id)}>Delete</button>
                                </div>
                            </div>
                        </li>
                    ))
                ) : (
                    <li>No contacts found</li>
                )}
            </ul>
        </div>
    );
}

export default ContactList;
