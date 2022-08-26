import Rive from "@rive-app/react-canvas";
import Basketball from './assets/basketball.riv'
import ManInTheWind from './assets/man-in-the-wind.riv'

import "./App.sass";

function App() {
  return (
    <div>
      <h1 className="title">My Rive Projects</h1>
      <div className="projects-container">
        <Rive src={Basketball} />
        <Rive src={ManInTheWind} />
      </div>
    </div>
  );
}

export default App;
