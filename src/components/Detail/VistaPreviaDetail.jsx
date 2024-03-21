import Casetes from '../Casetes/Casetes.jsx'

const VistaPreviaDetail = ({ characters, onClose, changeTv }) => {
    return (
        <>
            <Casetes
                characters={characters}
                onClose={onClose}
                changeTv={changeTv}
            />
        </>
    )
}

export default VistaPreviaDetail;
