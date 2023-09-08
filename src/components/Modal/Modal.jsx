import './Modal.css'

const Modal = ({ isOpen, setOpenModal, children }) => {
  if(isOpen) {
    return (
            <div className="Background_modal">
                <div className="Conteudo_modal">
                    {children}
                    <button onClick={setOpenModal}>Fechar</button>
                </div>
            </div>
        )
    }

    return null
}

export default Modal