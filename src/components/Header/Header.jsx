import React, { useState } from "react";
import './Header.css';
import CartButton from "../CartButton/CartButton";
import Menu from "../Menu/Menu";



<<<<<<< HEAD
function Header({valor, onChange}) {

=======

function Header() {
>>>>>>> 1b21e4b0f9e53ab16f4484358c45c8d9fb7aada0
    return (
        <header className="hearder">
            <div className="container_menu">
                <img className="logo" src="logobranca.png" alt="logo__kimaster" />
<<<<<<< HEAD
                <input
                    type="text"
                    placeholder="Pesquisar produtos..."
                    value={valor}
                    onChange={onChange}
                />
                <CartButton />
                <Menu />
=======
                <SearchBar />
                <Menu/>
>>>>>>> 1b21e4b0f9e53ab16f4484358c45c8d9fb7aada0
            </div>
        </header>
    );
}

export default Header;