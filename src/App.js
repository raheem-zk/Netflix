import './components/App.css';
import Banner from './components/banner/Banner';
import NavBar from './components/navBar/NavBar';
import RowPost from './components/rowPost/RowPost';
import { Horrer, Romantic, action, commedy, original, trending } from './constants/urls';

function App() {
  return (
    <>
      <NavBar/>
      <Banner/>
      <RowPost title='Netflix Originals' url={original}/>
      <RowPost title='Action' isSmall url={action} />
      <RowPost title='Trending' isSmall url={trending} />
      <RowPost title='Horrer Movies' isSmall url={Horrer} />
      <RowPost title='Commedy Movies' isSmall url={commedy} />
      <RowPost title='Romantic Movies' isSmall url={Romantic} />
    </>
  );
}

export default App;
