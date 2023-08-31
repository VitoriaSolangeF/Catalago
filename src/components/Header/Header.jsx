import React, { useState } from "react";
import './Header.css';
import CartButton from "../CartButton/CartButton";
import Menu from "../Menu/Menu";



function Header({valor, onChange}) {

    return (
        <header className="hearder">
            <div className="container_menu">
                <img className="logo" src="logobranca.png" alt="logo__kimaster" />
                <input
                    type="text"
                    placeholder="Pesquisar produtos..."
                    value={valor}
                    onChange={onChange}
                />
                <CartButton />
                <Menu />
            </div>
        </header>
    );
}

export default Header;