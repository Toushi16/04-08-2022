import MainContent from './components/MainContent';
import ColorList from './components/ColorList';
import ColorCard from './components/ColorCard';
import './App.css';

const colors = ['#dc143c','#deb887','#ffc0cb'];

function App() {
  return (
    <div className="App">
      <MainContent>
        <ColorList>
          <ColorCard color={colors[0]} />
          <ColorCard color={colors[1]} />
          <ColorCard color={colors[2]} />
        </ColorList>
      </MainContent>
    </div>
  );
}

export default App;
