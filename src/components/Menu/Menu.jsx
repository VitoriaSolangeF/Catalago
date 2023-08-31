import React, { useState, useEffect, useRef } from 'react';
import './Menu.css';
import menu from '../img/menu.png';
import carregando from '../img/carregando.png';
import fone from '../img/fone-de-ouvido.png';
import cabo from '../img/plug-usb.png';

function Menu () {
    const [open, setOpen] = useState(false);

    let menuRef = useRef();

    useEffect(() => {
        let handler = (e)=>{
          if(!menuRef.current.contains(e.target)){
            setOpen(false);
            console.log(menuRef.current);
          }      
        };

        document.addEventListener("mousedown", handler);

        return() =>{
            document.removeEventListener("mousedown", handler);
          }
      
        });

    return (
        <div className="Menu">
            <div className='menu-container' ref={menuRef}>
                <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
                    <img src={menu}></img>
                </div>

                <div className={`dropdown-menu ${open? 'active' : 'inactive'}`}>
                    <h3>Produtos<br/><span>Catalogo Kimaster</span></h3>
                    <ul>
                        <DropdownItem img ={carregando} text = {"Carregador"}/>
                        <DropdownItem img ={fone} text = {"Fone"}/>
                        <DropdownItem img ={cabo} text = {"plug-usb"}/>
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

function DropdownItem(props){
    return(
        <li className='dropdownItem'>
            <img src={props.img}></img>
            <a> {props.text} </a>
        </li>
    );
}

export default Menu;