import './components/App.css';
import Banner from './components/banner/Banner';
import NavBar from './components/navBar/NavBar';
import RowPost from './components/rowPost/RowPost';
import { action, original } from './constants/urls';

function App() {
  return (
    <>
      <NavBar/>
      <Banner/>
      <RowPost title='Netflix Originals' url={original}/>
      <RowPost title='Action' isSmall url={action} />

    </>
  );
}

export default App;
