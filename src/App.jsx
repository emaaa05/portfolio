import Tabs from './components/Tabs';
import MatrixRain from './components/MatrixRain';
import './styles/App.css';
import './styles/Matrix.css';

function App() {
  return (
    <div className="app-wrapper">
      <MatrixRain variant="backdrop" />
      <Tabs />
    </div>
  );
}

export default App;
