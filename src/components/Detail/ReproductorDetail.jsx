import { useEffect, useState } from 'react'
import style from '../reproductor/reproductor.module.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'


function ReproductorDetail({reproductor}) {

    //Hooks
    const id = useParams()
    const [character, setCharacter] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const NewCharacter = async() => {
            const character = (await axios(`https://rym2.up.railway.app/api/character/${id.id}?key=pi-luisfgt`)).data
            if(character.name) {
                setCharacter(character)
            } else {setLoading(true)}
        }
        NewCharacter()
    } , [id.id])

    //Funciones

    return <>
        <div className={style.contenedorTV}>
            <div className={style.info}>
                <div className={style.cuadroInfo}>
                    <div className={style.capsulas}>
                        <h3 className={style.textoTitulo}>{character?.name}</h3>
                        <h4 className={style.textoInfo}>Name</h4>
                    </div>
                    <div className={style.capsulas}>
                        <h3 className={style.textoTitulo}>{character?.species}</h3>
                        <h4 className={style.textoInfo}>Specie</h4>
                    </div>
                    <div className={style.capsulas}>
                        <h3 className={style.textoTitulo}>{character?.gender}</h3>
                        <h4 className={style.textoInfo}>Gender</h4>
                    </div>
                    <div className={style.capsulas}>
                        <h3 className={style.textoTitulo}>{character?.status}</h3>
                        <h4 className={style.textoInfo}>Status</h4>
                    </div>
                    <div className={style.capsulas}>
                        <h3 className={style.textoTitulo}>{character?.origin?.name}</h3>
                        <h4 className={style.textoInfo}>Origin</h4>
                    </div>
                </div>
                <img className={style.image} src={character?.image} alt="" />
            </div>
            <img className={style.reproductor} src={reproductor} alt="" />
        </div>
    </>

}

export default ReproductorDetail;
