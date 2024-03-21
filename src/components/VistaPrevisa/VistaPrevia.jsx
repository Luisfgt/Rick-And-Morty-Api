import Casetes from '../Casetes/Casetes.jsx'



const VistaPrevia = ({ characters, onClose, loadChar }) => {
    console.log(loadChar);
    return (
        <>
            <Casetes
                loadChar={loadChar}
                characters={characters}
                onClose={onClose}
            />
        </>
    )
}

export default VistaPrevia;


