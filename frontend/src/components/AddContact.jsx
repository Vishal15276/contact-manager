import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddContact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send a POST request to add the new contact
        axios.post('http://localhost:5000/api/contacts', { name, email, phone })
            .then(() => {
                navigate('/'); // Redirect to the contact list after adding
            })
            .catch((error) => console.error('Error adding contact:', error));
    };

    return (
        <div className="add-contact-container">
            <h2>Add New Contact</h2>
            <form onSubmit={handleSubmit} className="add-contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        className="input-field" 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        className="input-field" 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input 
                        type="tel" 
                        id="phone" 
                        value={phone} 
                        onChange={(e) => setPhone(e.target.value)} 
                        className="input-field" 
                        required 
                    />
                </div>
                <button type="submit" className="submit-button">Add Contact</button>
            </form>
        </div>
    );
}

export default AddContact;
