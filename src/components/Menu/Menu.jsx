import React from 'react';
import './Menu.css';

import { BiMenu } from 'react-icons/bi';


function Menu () {
    return (
        <div className="menu_produtos">
            <div className="menu">
                <button onClick={() => {}} className='menu-button'>
                    <span>Menu</span>
                    <img src="BiMenu" alt="BiMenu"></img>

                </button>

                <nav>
                    <ul>
                        <li>
                            <a href="#">Carregador</a>
                        </li>
                        <li>
                            <a href="#">Fonte</a>
                        </li>
                        
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Menu;
