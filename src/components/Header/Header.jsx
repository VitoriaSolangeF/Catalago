import React from "react";
import SearchBar from "../SearchBar/SearchBar";

import './Header.css';
import CartButton from "../CartButton/CartButton";



function Header() {
    return (
        <header className="hearder">
            <div className="container_menu">
                <img className="logo" src="logobranca.png" alt="logo__kimaster" />
                <SearchBar />
                <CartButton />
            </div>
        </header>
    );
}

export default Header;