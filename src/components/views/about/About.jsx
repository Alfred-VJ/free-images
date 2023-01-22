import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { actionsImgs } from '../../../redux/actions/picture.actions'
import Buttons from '../../buttons/Buttons'
import CardPage from '../../Cards/Cards.page'
import CardPageDown from '../../Cards/Cards.pageDown'
import { useLocation } from 'react-router-dom';
import '../../styles/About.css'

const About = () => {
  const { images } = useSelector(state => state.imgReducer)
  const {pagina} = useSelector(state => state.buttReducer)

  // let location = useLocation()
  const dispatch = useDispatch()

  // useEffect(() => {
  //  if(location.pathname === window.location.pathname){
  //   window.location.replace('/');
  //  }
  // }, [location])

  useEffect(() => {
    window.addEventListener('beforeunload', handleUnload);
    return () => {
      window.removeEventListener('beforeunload', handleUnload);
    };
  }, []);

  function handleUnload(e) {
    // Aquí puedes colocar la lógica para redirigir al usuario a una ruta específica
    window.location.replace('/');
  }

  useEffect(() => {
    dispatch(actionsImgs.fetchImages(pagina))
  }, [pagina])
  console.log({ images })


  const handleClick = (image) => {
    const win = window.open(image, '_blank');
    win.focus();
  }
  return (
    <>
      <Buttons />
      <div className='grid-container'>
        <CardPage page={pagina}/>
        <div className="grid">
          {images?.map((image, index) => (
            <div key={index} className="grid-item">
              <img
                src={image.urls.regular}
                alt={`Image ${index}`}
                // cache={cache}
                onClick={() => handleClick(image.urls.raw)}
              />
            </div>
          ))}
        </div>
      </div>
      <CardPageDown page={pagina}/>
      <Buttons />
    </>
  )
}

export default About