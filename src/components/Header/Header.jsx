import React from "react";
import SearchBar from "../SearchBar/SearchBar";

import './Header.css';
import CartButton from "../CartButton/CartButton";
import Menu from "../Menu/Menu";



function Header() {
    return (
        <header className="hearder">
            <div className="container_menu">
                <img className="logo" src="logobranca.png" alt="logo__kimaster" />
                <SearchBar />
                <CartButton />
                <Menu />
            </div>
        </header>
    );
}

export default Header;