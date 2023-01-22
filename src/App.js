import './App.css';
import {Routes, Route} from 'react-router-dom'
import routes from './Routes/public/routes';



function App() {
  return (
    <div className="App">
     <Routes>
      {
        routes.map(({path, component: Component}, key) =>(
          <Route key={key} path={path} exact element={<Component />} />
        ))
      }
     </Routes>
    </div>
  );
}

export default App;
