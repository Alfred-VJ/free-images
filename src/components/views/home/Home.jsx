import '../../styles/Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="container_button">
      <Link to="/about">
        <button className="cool-button">Ir a las imagenes</button>
      </Link>

    </div>
  )
}

export default Home