import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { actionsImgs } from '../../../redux/actions/picture.actions'
import Buttons from '../../buttons/Buttons'
import CardPage from '../../Cards/Cards.page'

import '../../styles/About.css'

const About = () => {
  const { images } = useSelector(state => state.imgReducer)
  const {pagina} = useSelector(state => state.buttReducer)


  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actionsImgs.fetchImages(pagina))
  }, [pagina])
  console.log({ pagina })


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
      <Buttons />
    </>
  )
}

export default About