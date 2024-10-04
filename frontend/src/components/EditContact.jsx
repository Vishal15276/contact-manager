import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function EditContact() {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:5000/api/contacts/${id}`)
            .then((response) => {
                const { name, email, phone } = response.data[0];
                setName(name);
                setEmail(email);
                setPhone(phone);
            })
            .catch((error) => console.error('Error fetching contact:', error));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:5000/api/contacts/${id}`, { name, email, phone })
            .then(() => navigate('/'))
            .catch((error) => console.error('Error updating contact:', error));
    };

    return (
        <div className="container edit-contact-container">
            <h2>Edit Contact</h2>
            <form onSubmit={handleSubmit} className="edit-contact-form">
                <label className="input-label">Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Name"
                    required
                    className="input-field"
                />
                <label className="input-label">Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Email"
                    required
                    className="input-field"
                />
                <label className="input-label">Phone Number</label>
                <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter Phone Number"
                    required
                    className="input-field"
                />
                <button type="submit" className="submit-button">Update</button>
            </form>
        </div>
    );
}

export default EditContact;
