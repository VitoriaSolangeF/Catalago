
function Menu() {
    return (
        <nav id="menu" className="fixed w-full p-8 shadow ">
             <div className="m-auto flex justify-between items-center">
                <a href="#">
                    teste
                </a> 
                <div className="hidden md:flex items-center pr-10 transition-all ease-in duration-500">
                    <ion-icon name="key-outline"></ion-icon>
                    <a href="#" className="text-xl hover: duration-500 p-3">User</a>
                    <ion-icon size="large" name="person-circle-outline"></ion-icon>
                </div>
            </div>
        </nav>
    )
}

export default Menu;