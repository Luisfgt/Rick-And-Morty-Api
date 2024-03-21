import style from './Contenedor.module.css'
import VistaPrevia from '../VistaPrevisa/VistaPrevia.jsx';
import Reproductor from '../reproductor/reproductor.jsx';
import TransitionComponent from '../TransitionComponent/TransitionComponent.jsx';
import reproductorTv from '../reproductor/TV.png'


const ContenedorPadre = ({ characters, onClose, loading, loadChar}) => {
    console.log(loadChar);

   
    return (
        <>
            <div className={style.containerPadre}>
                <TransitionComponent>
                    <div className={style.container}>
                        <div className={style.contenedorTarjetas}>
                            <div className={style.tarjetas}>
                                <VistaPrevia
                                    loadChar={loadChar}
                                    characters={characters}
                                    onClose={onClose} />
                            </div>
                        </div>
                        <div className={style.containerTv}>
                            <Reproductor
                            reproductor={reproductorTv}
                            />
                        </div>
                    </div>
                </TransitionComponent>

            </div>
        </>
    )
}

export default ContenedorPadre;