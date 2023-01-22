import { GET_PICTURE } from "../actionsType/picture.type";
import axios from 'axios'


const YOUR_ACCESS_KEY = "OkhH8j8hgxbylql_lRlDM7SwfgdZFmAN6DcvIdeqxSI"

 const fetchImages = (pagina) => async dispatch => {
    const params = { page: pagina, per_page: 30};
  
  try {
    const response = await axios.get('https://api.unsplash.com/photos', {
        params,
        headers: {
            Authorization: `Client-ID ${YOUR_ACCESS_KEY}`
        }
    })
    dispatch({ type: GET_PICTURE, payload: response.data })
  } catch (error) {
    dispatch({ type: 'FETCH_IMAGES_ERROR', payload: error })
  }
}

export const actionsImgs = {
    fetchImages,
}