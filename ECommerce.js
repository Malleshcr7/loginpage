import React, { useState } from 'react';
import './ECommerce.css';

const ECommerce = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [showProfile, setShowProfile] = useState(false);
    const [showOrders, setShowOrders] = useState(false);
    const [showLocation, setShowLocation] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [showLanguage, setShowLanguage] = useState(false);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const toggleProfile = () => setShowProfile(!showProfile);
    const toggleOrders = () => setShowOrders(!showOrders);
    const toggleLocation = () => setShowLocation(!showLocation);
    const toggleCart = () => setShowCart(!showCart);
    const toggleLanguage = () => setShowLanguage(!showLanguage);

    return (
        <div className="ecommerce-container">
            <nav className="navbar">
                <div className="nav-left">
                    <div className="nav-icon" onClick={toggleProfile}>
                        <img src="profile-icon.png" alt="Profile" />
                        <span>Profile</span>
                    </div>
                    <div className="nav-icon" onClick={toggleOrders}>
                        <img src="orders-icon.png" alt="Orders" />
                        <span>Returns & Orders</span>
                    </div>
                    <div className="nav-icon" onClick={toggleLocation}>
                        <img src="location-icon.png" alt="Location" />
                        <span>Location</span>
                    </div>
                </div>
                <div className="nav-center">
                    <input 
                        type="text" 
                        placeholder="Search for mobiles..." 
                        value={searchTerm} 
                        onChange={handleSearch} 
                    />
                    <button>Search</button>
                </div>
                <div className="nav-right">
                    <div className="nav-icon" onClick={toggleCart}>
                        <img src="cart-icon.png" alt="Cart" />
                        <span>Cart</span>
                    </div>
                    <div className="nav-icon" onClick={toggleLanguage}>
                        <img src="language-icon.png" alt="Language" />
                        <span>Language</span>
                    </div>
                </div>
            </nav>

            {/* Profile Modal */}
            {showProfile && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>My Profile</h2>
                        <p>Name: John Doe</p>
                        <p>Email: john.doe@example.com</p>
                        <button onClick={toggleProfile}>Close</button>
                    </div>
                </div>
            )}

            {/* Orders Modal */}
            {showOrders && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Returns & Orders</h2>
                        <p>No orders or returns found.</p>
                        <button onClick={toggleOrders}>Close</button>
                    </div>
                </div>
            )}

            {/* Location Dropdown */}
            {showLocation && (
                <div className="dropdown">
                    <h2>Select Location</h2>
                    <ul>
                        <li>India</li>
                        <li>USA</li>
                        <li>UK</li>
                        <li>Russia</li>
                        <li>China</li>
                        <li>Brazil</li>
                        <li>Nepal</li>
                        <li>Australia</li>
                        <li>England</li>
                    </ul>
                    <button onClick={toggleLocation}>Close</button>
                </div>
            )}

            {/* Cart Modal */}
            {showCart && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Cart</h2>
                        <p>Your cart is empty.</p>
                        <button onClick={toggleCart}>Close</button>
                    </div>
                </div>
            )}

            {/* Language Dropdown */}
            {showLanguage && (
                <div className="dropdown">
                    <h2>Select Language</h2>
                    <ul>
                        <li>English (India)</li>
                        <li>English (UK)</li>
                        <li>English (USA)</li>
                        <li>Telugu</li>
                        <li>Hindi</li>
                        <li>Tamil</li>
                        <li>Malayalam</li>
                        <li>Kannada</li>
                    </ul>
                    <button onClick={toggleLanguage}>Close</button>
                </div>
            )}

            <h2>Available Mobiles</h2>
            <div className="mobiles-list">
                {/* Display filtered mobiles here */}
            </div>
        </div>
    );
};


export default ECommerce;
