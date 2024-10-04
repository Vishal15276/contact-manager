import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactList from './components/ContactList.jsx';
import AddContact from './components/AddContact.jsx'; // Import your AddContact component
import EditContact from './components/EditContact.jsx'; // Import your EditContact component
import Navbar from './components/Navbar.jsx'; // Import the Navbar component

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<ContactList />} />
                <Route path="/add" element={<AddContact />} />
                <Route path="/edit/:id" element={<EditContact />} />
            </Routes>
        </Router>
    );
}

export default App;
