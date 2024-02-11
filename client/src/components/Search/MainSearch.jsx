import { useState } from 'react';
import '../../css/search.css'; 
import Header from '../partials/Header';
import Footer from '../partials/Footer';

const SearchBox = () => {
    // Sample data for search suggestions
    const suggestions = [
        'Computer Networks',
        'Operating Systems',
        'Database Management Systems',
        'Web Development',
        'Machine Learning',
        'Data Science',
        'Artificial Intelligence'
    ];

    // State to manage user input and filtered suggestions
    const [userInput, setUserInput] = useState('');
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);

    // Function to handle search suggestions based on user input
    const handleSearchSuggestions = (event) => {
        const input = event.target.value.toLowerCase();
        setUserInput(input);
        const filtered = suggestions.filter(item => item.toLowerCase().includes(input));
        setFilteredSuggestions(filtered);
    };

    // Function to handle selection of a suggestion
    const handleSuggestionClick = (suggestion) => {
        setUserInput(suggestion);
        setFilteredSuggestions([]);
    };

    return (
        <>
            <Header />
            <div className="footer">
                <div className="search-box">
                    <input type="text" placeholder="Search..." value={userInput} onChange={handleSearchSuggestions} />
                    <button onClick={() => console.log('Search clicked')}>Search</button>
                    {/* Suggestions will be displayed below the input box */}
                    <ul className="suggestion-list">
                        {filteredSuggestions.map((suggestion, index) => (
                            <li key={index} className="suggestion-item" onClick={() => handleSuggestionClick(suggestion)}>
                                {suggestion}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default SearchBox;
