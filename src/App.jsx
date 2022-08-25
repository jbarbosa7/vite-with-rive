import Rive from "@rive-app/react-canvas";
import BouncingBall from './bouncing-ball.riv'

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hello!</h1>
      <Rive src={BouncingBall} width={500} height={500} />
    </div>
  );
}

export default App;
