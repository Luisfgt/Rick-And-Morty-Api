import './App.css'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import ContenedorPadre from './components/ContenedorPrincipal/Contenedor';
import Nav from './components/Nav/Nav.jsx';
import Detail from './views/Detail.jsx';
import About from './views/About.jsx';
import style from './styles.module.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Form from './components/About/Form/Form.jsx';
import FavoritesView from './views/FavoritesView.jsx';
import Loader from './components/Loader/Loader.jsx';




function App() {

  // !Hooks
  const [access, setAccess] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    !access && navigate('/')
  }, [access])

  const [loading, setLoading] = useState(false)
  const [loadChar, setLoadChar] = useState(false)

  const login = async (userData) => {
    try {
      // const { email, password } = userData;
      // const URL = 'http://localhost:3002/rickandmorty/login/';
      // const { data } = await axios(URL + `?email=${email}&password=${password}`)
      // const { access } = data;
      // setAccess(data);
      // if (access) functionLoading();
      setAccess(true)
      functionLoading()
    }
    catch (error) {
      throw Error(error.message)
    }
  }

  const functionLoading = () => {
    setLoading(true)
    navigate('/home');
    setTimeout(() => {
      setLoading(false)
    }, 4500);
  }
  console.log(loadChar);
  const [characters, setCharacters] = useState([])
  console.log(characters);

  const onSearch = async (id) => {
    try {
      const { data } = await axios(`https://rym2.up.railway.app/api/character/${id}?key=pi-luisfgt`)

      if (data.name) {
        const characterExiste = characters.some((character) => character.id === data.id)
        if (!characterExiste) setCharacters((oldChars) => [...oldChars, data]);
        else {
          window.alert('¡Este personaje ya está en la lista!')
        }
      }
    }
    catch (error) {
      window.alert('¡Este id no existe!');
    }
  }

  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id))
  }

  const propiedadesPadre = {
    characters: characters,
    onClose: onClose,
    loading: loading,
    loadChar: loadChar

  }
  const location = useLocation();

  return (
    <div className={style.contenedor}>
      {loading && <div className={style.loaderComp}> <Loader/> </div>}
      {(location.pathname !== '/' && !loading) && <Nav 
      logOut={() => setAccess(false)}
      onSearch={onSearch} />}
      <Routes>
        <Route path='/home' element={<ContenedorPadre {...propiedadesPadre} />} />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:id' element={<Detail {...propiedadesPadre} />} />
        <Route path='/Favorites' element={<FavoritesView />} />
        <Route path='/' element={<Form login={login} />} />
        <Route path='/test' element={<Loader/>} />
      </Routes>
    </div>
  )
}

export default App
